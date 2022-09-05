import { writable } from 'svelte/store';

export const deviceConfig = writable({
	tier: 3
});

export const selectedDevice = writable({});
