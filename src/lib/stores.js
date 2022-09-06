import { writable } from 'svelte/store';
import supabase from '$lib/supabase.js';

export const devices = writable([]);

export const loadDevices = async () => {
	const { data, error } = await supabase.from('devices').select();

	if (error) {
		return console.error(error);
	}
	devices.set(data);
};

export const deviceConfig = writable({
	tier: 3
});

export const selectedDevice = writable({});
