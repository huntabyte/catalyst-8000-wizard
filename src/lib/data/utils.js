import { networkModules } from './data.js';

export function getNetworkModules(type = false) {
	if (type === false) {
		let allModules = [];
		let mappedModules = networkModules.map((item) => item.options);
		mappedModules.forEach((array) => {
			allModules = allModules.concat(array);
		});
		return allModules;
	}
}
