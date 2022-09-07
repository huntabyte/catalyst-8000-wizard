import { writable } from 'svelte/store';

export const deviceConfig = writable({
	device: {
		partNumber: '',
		description: ''
	},
	tier: 3,
	powerCable: {
		partNumber: 'CAB-AC',
		description: ''
	},
	pim: {
		partNumber: false,
		description: ''
	},
	nimOne: {
		partNumber: false,
		description: ''
	},
	nimTwo: {
		partNumber: false,
		description: ''
	},
	memory: {
		partNumber: '',
		description: ''
	}
});

export const selectedDevice = writable({});
