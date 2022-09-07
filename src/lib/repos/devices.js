import { createClient } from '@supabase/supabase-js';

export class DeviceRepo {
	#client = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

	getAll = async () => {
		const { data, error } = await this.#client.from('devices').select('*');

		return data || [];
	};

	getDeviceByPN = async (pn) => {
		const { data, error } = await this.#client
			.from('devices')
			.select('*')
			.eq('part_number', pn)
			.single();

		return data || [];
	};

	getNetworkModules = async (device_id) => {
		let { data, error } = await this.#client
			.from('devices')
			.select(
				`
		id,
		items!inner (
			id,
			part_number,
			friendly_name,
			categories!inner ( name, friendly_name )
		)`
			)
			.eq('items.categories.name', 'NIM');

		data = data.filter((device) => device.id === device_id);
		data = data[0].items;
		return data || [];
	};

	getPowerCables = async (device_id) => {
		let { data, error } = await this.#client
			.from('devices')
			.select(
				`
		id,
		items!inner (
			id,
			part_number,
			friendly_name,
			categories!inner ( name, friendly_name )
		)`
			)
			.eq('items.categories.name', 'Power Cable');

		data = data.filter((device) => device.id == device_id);
		data = data[0].items;
		return data || [];
	};

	getPluggableModules = async (device_id) => {
		let { data, error } = await this.#client
			.from('devices')
			.select(
				`
		id,
		items!inner (
			id,
			part_number,
			friendly_name,
			categories!inner ( name, friendly_name )
		)`
			)
			.eq('items.categories.name', 'PIM');

		if (data.length > 0) {
			data = data.filter((device) => device.id == device_id);
			data = data[0].items;
			return data || [];
		}

		return [];
	};

	getServiceModules = async (device_id) => {
		let { data, error } = await this.#client
			.from('devices')
			.select(
				`
		id,
		items!inner (
			id,
			part_number,
			friendly_name,
			categories!inner ( name, friendly_name )
		)`
			)
			.eq('items.categories.name', 'SM');

		if (data.length > 0) {
			data = data.filter((device) => device.id == device_id);
			data = data[0].items;
			return data[0].items || [];
		}

		return [];
	};

	getMemory = async (device_id) => {
		let { data, error } = await this.#client
			.from('devices')
			.select(
				`
		id,
		items!inner (
			id,
			part_number,
			friendly_name,
			categories!inner ( name, friendly_name )
		)`
			)
			.eq('items.categories.name', 'Memory');

		data = data.filter((device) => device.id == device_id);
		data = data[0].items;
		return data || [];
	};

	getItemDescription = async (partNumber) => {
		let { data, error } = await this.#client
			.from('items')
			.select(
				`
			description
		`
			)
			.eq('part_number', partNumber)
			.single();

		return data.description || false;
	};

	getDeviceDescription = async (partNumber) => {
		let { data, error } = await this.#client
			.from('devices')
			.select('description')
			.eq('part_number', partNumber)
			.single();

		return data.description || false;
	};

	getDeviceData = async (device_pn) => {
		let response = {};

		response.device = await this.getDeviceByPN(device_pn);
		response.networkModules = await this.getNetworkModules(response.device.id);
		response.pluggableModules = await this.getPluggableModules(response.device.id);
		response.powerCables = await this.getPowerCables(response.device.id);
		response.memory = await this.getMemory(response.device.id);

		return response;
	};
}
