// import { deviceRepo } from '$lib/repos/devices';

// const deviceRepo = new DeviceRepo();

export const genC83002N4T = (deviceConfig) => {
	let nimBlankSlots = 2;
	let pimBlankSlots = 1;
	let smBlankSlots = 2;
	let nimTwoLine = [];
	let nimOneQty = 0;
	let nimTwoQty = 0;

	if (deviceConfig.nimOne.partNumber !== false) {
		nimOneQty = 1;
		if (deviceConfig.nimOne.partNumber === deviceConfig.nimTwo.partNumber) {
			nimOneQty = 2;
			nimTwoQty = 0;
			nimTwoLine = false;
			nimBlankSlots = 0;
		} else {
			nimBlankSlots -= 1;
		}
	}

	if (deviceConfig.nimTwo.partNumber !== false && nimTwoLine !== false) {
		nimTwoQty = 1;
		nimBlankSlots -= 1;
	}

	let template = [
		['C8300-2N2S-4T2X', 'Cisco Catalyst C8300-2N2S-4T2X Router', '', 1],
		['CON-SNT-C8302TNX', 'SNTC-8X5XNBD Cisco Catalyst C8300', 36, 1],
		[deviceConfig.memory.partNumber, 'Memory 4GB', '', 1],
		['M2USB-16', 'Description here', '', 1],
		['C-RFID-2R', 'RFID for Catalyst 8000', '', 1],
		['C8300-RM-19-2R', 'Description here', '', 1],
		['C8300-NIM-BLANK', 'Description here', '', nimBlankSlots],
		[deviceConfig.nimOne.partNumber, 'Description here', '', nimOneQty],
		[deviceConfig.nimTwo.partNumber, 'Description here', '', nimTwoQty],
		['C8300-SM-BLANK', 'Description here', '', smBlankSlots],
		['C8300-PIM-BLANK', 'Description here', '', pimBlankSlots],
		['NETWORK-PNP-LIC', 'Description here', '', 1],
		['TE-R-SW', 'Description here', '', 1],
		['IOSXE-AUTO-MODE', 'Description here', '', 1],
		['C8000-HSEC', 'Description here', '', 1],
		['C8300-FAN-2R', 'Description here', '', 1],
		['C-POE-COVER', 'Description here', '', 2],
		['SC8KBEUK9-176', 'Description here', '', 1],
		['PWR-CC1-650WAC', 'Description here', '', 2],
		[deviceConfig.powerCable.partNumber, 'Description here', '', 2],
		[`DNA-P-T${deviceConfig.tier}-A-3Y`, 'Description here', '', 1],
		['SVS-PDNA-ADV', 'Description here', '', 1],
		[`DSTACK-T${deviceConfig.tier}-A`, 'Description here', '', 1],
		[`NWSTACK-T${deviceConfig.tier}-A`, 'Description here', '', 1],
		['SDWAN-UMB-ADV', 'Description here', '', 1],
		['DNAC-ONPREM-PF', 'Description here', '', 1]
	];

	let updatedTemplate = template.filter((item) => item[3] !== 0);
	return updatedTemplate;
};

export const templateC2L = [
	['C8200L-1N-4T', 'Cisco Catalyst C8300-2N2S-4T2X Router', '', 1],
	['CON-SNT-C8200TL1', 'SNTC-8X5XNBD Cisco Catalyst C8300', 36, 1],
	['MEM-C8200-4GB', 'Memory 4GB', '', 1],
	['C-RFID-1R', 'Description here', '', 1],
	['C8000-HSEC', 'RFID for Catalyst 8000', '', 1],
	['C8200-RM-19-1R', 'Description here', '', 1],
	['NETWORK-PNP-LIC', 'Description here', '', 1],
	['C8200-NIM-BLANK', 'Description here', '', 1],
	['C8200-PIM-BLANK', 'Description here', '', 1],
	['C-M2-BLANK', 'Description here', '', 1],
	['IOSXE-AUTO-MODE', 'Description here', '', 1],
	['SC8KBEUK9-176', 'Description here', '', 1],
	['PWR-CC1-150WAC', 'Description here', '', 1],
	['CAB-AC', 'Description here', '', 2],
	['DNA-P-T2-A-3Y', 'Description here', '', 1],
	['SVS-PDNA-ADV', 'Description here', '', 1],
	['DSTACK-T2-A', 'Description here', '', 1],
	['NWSTACK-T2-A', 'Description here', '', 1],
	['SDWAN-UMB-ADV', 'Description here', '', 1],
	['DNAC-ONPREM-PF', 'Description here', '', 1]
];

export const templateC2 = [
	['C8200-1N-4T', 'Cisco Catalyst C8300-2N2S-4T2X Router', '', 1],
	['CON-SNT-C82001N4', 'SNTC-8X5XNBD Cisco Catalyst C8300', 36, 1],
	['MEM-C8200-8GB', 'Memory 4GB', '', 1],
	['M2USB-16G', 'Description here', '', 1],
	['C-RFID-1R', 'RFID for Catalyst 8000', '', 1],
	['C8000-HSEC', 'Description here', '', 1],
	['C8200-RM-19-1R', 'Description here', '', 1],
	['NETWORK-PNP-LIC', 'Description here', '', 1],
	['C8200-NIM-BLANK', 'Description here', '', 1],
	['C8200-PIM-BLANK', 'Description here', '', 1],
	['TE-R-SW', 'Description here', '', 1],
	['IOSXE-AUTO-MODE', 'Description here', '', 1],
	['SC8KBEUK9-176', 'Description here', '', 1],
	['PWR-CC1-150WAC', 'Description here', '', 2],
	['CAB-AC', 'Description here', '', 1],
	['DNA-P-T1-A-3Y', 'Description here', '', 1],
	['SVS-PDNA-ADV', 'Description here', '', 1],
	['DSTACK-T1-A', 'Description here', '', 1],
	['NWSTACK-T1-A', 'Description here', '', 1],
	['SDWAN-UMB-ADV', 'Description here', '', 1],
	['DNAC-ONPREM-PF', 'Description here', '', 1]
];

export const templateC8324 = [
	['C8300-2N2S-4T2X', 'Cisco Catalyst C8300-2N2S-4T2X Router', '', 1],
	['CON-SNT-C8302TNX', 'SNTC-8X5XNBD Cisco Catalyst C8300', 36, 1],
	['MEM-C8300-8GB', 'Memory 4GB', '', 1],
	['M2USB-16', 'Description here', '', 1],
	['C-RFID-2R', 'RFID for Catalyst 8000', '', 1],
	['C8300-RM-19-2R', 'Description here', '', 1],
	['C8300-NIM-BLANK', 'Description here', '', 2],
	['C8300-SM-BLANK', 'Description here', '', 2],
	['C8300-PIM-BLANK', 'Description here', '', 1],
	['NETWORK-PNP-LIC', 'Description here', '', 1],
	['TE-R-SW', 'Description here', '', 1],
	['IOSXE-AUTO-MODE', 'Description here', '', 1],
	['C8000-HSEC', 'Description here', '', 1],
	['C8300-FAN-2R', 'Description here', '', 1],
	['C-POE-COVER', 'Description here', '', 2],
	['SC8KBEUK9-177', 'Description here', '', 1],
	['PWR-CC1-650WAC', 'Description here', '', 2],
	['DNA-P-T2-A-3Y', 'Description here', '', 1],
	['SVS-PDNA-ADV', 'Description here', '', 1],
	['DSTACK-T2-A', 'Description here', '', 1],
	['NWSTACK-T2-A', 'Description here', '', 1],
	['SDWAN-UMB-ADV', 'Description here', '', 1],
	['DNAC-ONPREM-PF', 'Description here', '', 1]
];

export const templateC8326 = [
	['C8300-2N2S-6T', 'Cisco Catalyst C8300-2N2S-4T2X Router', '', 1],
	['CON-SNT-C8302S6T', 'SNTC-8X5XNBD Cisco Catalyst C8300', 36, 1],
	['MEM-C8300-8GB', 'Memory 4GB', '', 1],
	['M2USB-16G', 'Description here', '', 1],
	['C-RFID-2R', 'RFID for Catalyst 8000', '', 1],
	['C8000-HSEC', 'Description here', '', 1],
	['C8300-RM-19-2R', 'Description here', '', 2],
	['C8300-NIM-BLANK', 'Description here', '', 2],
	['C8300-SM-BLANK', 'Description here', '', 1],
	['C8300-PIM-BLANK', 'Description here', '', 1],
	['C8300-FAN-2R', 'Description here', '', 1],
	['NETWORK-PNP-LIC', 'Description here', '', 1],
	['C-POE-COVER', 'Description here', '', 1],
	['TE-R-SW', 'Description here', '', 1],
	['IOSXE-AUTO-MODE', 'Description here', '', 2],
	['SC8KBEUK9-176', 'Description here', '', 1],
	['PWR-CC1-650WAC', 'Description here', '', 2],
	['CAB-AC', 'Description here', '', 1],
	['DNA-P-T1-A-3Y', 'Description here', '', 1],
	['SVS-PDNA-ADV', 'Description here', '', 1],
	['DSTACK-T1-A', 'Description here', '', 1],
	['NWSTACK-T1-A', 'Description here', '', 1],
	['SDWAN-UMB-ADV', 'Description here', '', 1],
	['DNAC-ONPREM-PF', 'Description here', '', 1]
];

export const templateC8314 = [
	['C8300-1N1S-4T2X', 'Cisco Catalyst C8300-2N2S-4T2X Router', '', 1],
	['CON-SNT-C8304T2X', 'SNTC-8X5XNBD Cisco Catalyst C8300', 36, 1],
	['MEM-C8300-8GB', 'Memory 4GB', '', 1],
	['M2USB-16G', 'Description here', '', 1],
	['C-RFID-1R', 'RFID for Catalyst 8000', '', 1],
	['C8000-HSEC', 'Description here', '', 1],
	['C8300-RM-19-1R', 'Description here', '', 2],
	['C8300-NIM-BLANK', 'Description here', '', 2],
	['C8300-SM-BLANK', 'Description here', '', 1],
	['C8300-PIM-BLANK', 'Description here', '', 1],
	['NETWORK-PNP-LIC', 'Description here', '', 1],
	['TE-R-SW', 'Description here', '', 1],
	['IOSXE-AUTO-MODE', 'Description here', '', 1],
	['SC8KBEUK9-176', 'Description here', '', 1],
	['PWR-CC1-250WAC', 'Description here', '', 2],
	['CAB-AC', 'Description here', '', 1],
	['DNA-P-T2-A-3Y', 'Description here', '', 2],
	['SVS-PDNA-ADV', 'Description here', '', 1],
	['DSTACK-T2-A', 'Description here', '', 1],
	['NWSTACK-T2-A', 'Description here', '', 1],
	['SDWAN-UMB-ADV', 'Description here', '', 1],
	['DNAC-ONPREM-PF', 'Description here', '', 1]
];

export const templateC8316 = [
	['C8300-1N1S-6T', 'Cisco Catalyst C8300-2N2S-4T2X Router', '', 1],
	['CON-SNT-C830IN6T', 'SNTC-8X5XNBD Cisco Catalyst C8300', 36, 1],
	['MEM-C8300-8GB', 'Memory 4GB', '', 1],
	['M2USB-16G', 'Description here', '', 1],
	['C-RFID-1R', 'RFID for Catalyst 8000', '', 1],
	['C8000-HSEC', 'Description here', '', 1],
	['C8300-RM-19-1R', 'Description here', '', 2],
	['C8300-NIM-BLANK', 'Description here', '', 2],
	['C8300-SM-BLANK', 'Description here', '', 1],
	['C8300-PIM-BLANK', 'Description here', '', 1],
	['NETWORK-PNP-LIC', 'Description here', '', 1],
	['TE-R-SW', 'Description here', '', 1],
	['IOSXE-AUTO-MODE', 'Description here', '', 1],
	['SC8KBEUK9-176', 'Description here', '', 1],
	['PWR-CC1-250WAC', 'Description here', '', 2],
	['CAB-AC', 'Description here', '', 1],
	['DNA-P-T2-A-3Y', 'Description here', '', 2],
	['SVS-PDNA-ADV', 'Description here', '', 1],
	['DSTACK-T2-A', 'Description here', '', 1],
	['NWSTACK-T2-A', 'Description here', '', 1],
	['SDWAN-UMB-ADV', 'Description here', '', 1],
	['DNAC-ONPREM-PF', 'Description here', '', 1]
];
