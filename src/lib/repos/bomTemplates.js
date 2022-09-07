import { deviceRepo } from '$lib/repos/devices';

const deviceRepo = new DeviceRepo();

export const genC8300 = async (deviceConfig) => {
	let bomData = [];
	let nimBlankSlots;

	if (deviceConfig.part_number.startsWith('C8300-2N2S')) {
		nimBlankSlots = 2;
	} else {
		nimBlankSlots = 1;
	}
};
