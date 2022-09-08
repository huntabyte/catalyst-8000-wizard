export const generateBOM = (deviceConfig) => {
	let template;

	if (deviceConfig.device.partNumber.startsWith('C8300-2N2S')) {
		template = genC83002RU(deviceConfig);
	} else if (deviceConfig.device.partNumber.startsWith('C8300-1N1S')) {
		template = genC83001RU(deviceConfig);
	} else if (deviceConfig.device.partNumber.startsWith('C8200')) {
		template = genC8200(deviceConfig);
	}

	return template;
};

const genC83002RU = (deviceConfig) => {
	let nimBlankSlots = 2;
	let pimBlankSlots = 1;
	let smBlankSlots = 2;
	let nimTwoLine = [];
	let nimOneQty = 0;
	let nimTwoQty = 0;
	let pimQty = 0;
	let template;

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

	if (deviceConfig.pim.partNumber !== false) {
		pimQty = 1;
		pimBlankSlots = 0;
	}

	if (deviceConfig.device.partNumber === 'C8300-2N2S-4T2X') {
		template = [
			[deviceConfig.device.partNumber, deviceConfig.device.description, '', 1],
			['CON-SNT-C8304T2X', 'SNTC-8X5XNBD Cisco Catalyst C8300', 36, 1],
			[deviceConfig.memory.partNumber, deviceConfig.memory.description, '', 1],
			['M2USB-16', 'Cisco Catalyst 8000 Edge M.2 USB 16GB', '', 1],
			['C-RFID-2R', 'RFID for Catalyst 8000', '', 1],
			['C8300-RM-19-2R', 'Cisco Catalyst 8000 Edge RFID - 2RU', '', 1],
			['C8300-NIM-BLANK', 'Cisco Catalyst 8300 Edge NIM Blank', '', nimBlankSlots],
			[deviceConfig.nimOne.partNumber, deviceConfig.nimOne.description, '', nimOneQty],
			[deviceConfig.nimTwo.partNumber, deviceConfig.nimTwo.description, '', nimTwoQty],
			['C8300-SM-BLANK', 'Cisco Catalyst 8300 Edge SM Blank', '', smBlankSlots],
			[deviceConfig.pim.partNumber, deviceConfig.pim.description, '', pimQty],
			['C8300-PIM-BLANK', 'Cisco Catalyst 8300 Edge PIM Blank', '', pimBlankSlots],
			['NETWORK-PNP-LIC', 'Network Plug-n-Play Connect for zero-touch device deployment', '', 1],
			['TE-R-SW', 'TE agent for IOSXE on Enterprise Routing', '', 1],
			['IOSXE-AUTO-MODE', 'IOS XE Autonomous boot up mode for Unified image', '', 1],
			['C8000-HSEC', 'U.S. Export Restriction Compliance license for C8000 series', '', 1],
			['C8300-FAN-2R', 'Cisco Catalyst 8300 Edge Fan Tray, 2RU', '', 1],
			['C-POE-COVER', 'Cover for empty POE slot on Cisco Catalyst Edge 8300', '', 2],
			['SC8KBEUK9-176', 'UNIVERSAL', '', 1],
			['PWR-CC1-650WAC', 'Cisco C8300 2RU AC  Power supply', '', 2],
			[deviceConfig.powerCable.partNumber, deviceConfig.powerCable.description, '', 2],
			[`DNA-P-T${deviceConfig.tier}-A-3Y`, 'Cisco DNA Advantage On-Prem Lic 3Y', '', 1],
			['SVS-PDNA-ADV', 'Embedded Support for SW - Tiered  DNA Advantage On-Prem', '', 1],
			[`DSTACK-T${deviceConfig.tier}-A`, 'Cisco DNA Advantage Stack', '', 1],
			[`NWSTACK-T${deviceConfig.tier}-A`, 'Cisco Network Advantage Stack', '', 1],
			['SDWAN-UMB-ADV', 'Cisco Umbrella for DNA Advantage', '', 1],
			['DNAC-ONPREM-PF', 'Cisco DNA Center On Prem Deployment Option for WAN', '', 1]
		];
	} else if (deviceConfig.device.partNumber === 'C8300-2N2S-6T') {
		template = [
			[deviceConfig.device.partNumber, deviceConfig.device.description, '', 1],
			['CON-SNT-C8302S6T', 'SNTC-8X5XNBD Cisco Catalyst C8300', 36, 1],
			[deviceConfig.memory.partNumber, deviceConfig.memory.description, '', 1],
			['M2USB-16G', 'Cisco Catalyst 8000 Edge M.2 USB 16GB', '', 1],
			['C-RFID-2R', 'Cisco Catalyst 8000 Edge RFID - 2RU', '', 1],
			['C8000-HSEC', 'U.S. Export Restriction Compliance license for C8000 series', '', 1],
			['C8300-RM-19-2R', 'Cisco Catalyst 8300 Rack mount kit - 19" 2R', '', 1],
			['C8300-NIM-BLANK', 'Cisco Catalyst 8300 Edge NIM Blank', '', nimBlankSlots],
			[deviceConfig.nimOne.partNumber, deviceConfig.nimOne.description, '', nimOneQty],
			[deviceConfig.nimTwo.partNumber, deviceConfig.nimTwo.description, '', nimTwoQty],
			['C8300-SM-BLANK', 'Cisco Catalyst 8300 Edge SM Blank', '', smBlankSlots],
			['C8300-PIM-BLANK', 'Cisco Catalyst 8300 Edge PIM Blank', '', pimBlankSlots],
			[deviceConfig.pim.partNumber, deviceConfig.pim.description, '', pimQty],
			['C8300-FAN-2R', 'Cisco Catalyst 8300 Edge Fan Tray, 2RU', '', 1],
			['NETWORK-PNP-LIC', 'Network Plug-n-Play Connect for zero-touch device deployment', '', 1],
			['C-POE-COVER', 'Cover for empty POE slot on Cisco Catalyst Edge 8300', '', 2],
			['TE-R-SW', 'TE agent for IOSXE on Enterprise Routing', '', 1],
			['IOSXE-AUTO-MODE', 'IOS XE Autonomous boot up mode for Unified image', '', 2],
			['SC8KBEUK9-176', 'UNIVERSAL', '', 1],
			['PWR-CC1-650WAC', 'Cisco C8300 2RU AC  Power supply', '', 2],
			[deviceConfig.powerCable.partNumber, deviceConfig.powerCable.description, '', 2],
			[`DNA-P-T${deviceConfig.tier}-A-3Y`, 'Cisco DNA Advantage On-Prem Lic 3Y', '', 1],
			['SVS-PDNA-ADV', 'Embedded Support for SW - Tiered  DNA Advantage On-Prem', '', 1],
			[`DSTACK-T${deviceConfig.tier}-A`, 'Cisco DNA Advantage Stack', '', 1],
			[`NWSTACK-T${deviceConfig.tier}-A`, 'Cisco Network Advantage Stack ', '', 1],
			['SDWAN-UMB-ADV', 'Cisco Umbrella for DNA Advantage', '', 1],
			['DNAC-ONPREM-PF', 'Cisco DNA Center On Prem Deployment Option for WAN', '', 1]
		];
	}

	let updatedTemplate = template.filter((item) => item[3] !== 0);
	return updatedTemplate;
};

const genC83001RU = (deviceConfig) => {
	let nimBlankSlots = 1;
	let pimBlankSlots = 1;
	let smBlankSlots = 1;
	let nimQty = 0;
	let pimQty = 0;
	let template;

	if (deviceConfig.nimOne.partNumber !== false) {
		nimQty = 1;
		nimBlankSlots -= 1;
	}

	if (deviceConfig.pim.partNumber !== false) {
		pimQty = 1;
		pimBlankSlots = 0;
	}

	if (deviceConfig.device.partNumber === 'C8300-1N1S-4T2X') {
		template = [
			[deviceConfig.device.partNumber, deviceConfig.device.description, '', 1],
			['CON-SNT-C8304T2X', 'SNTC-8X5XNBD Cisco Catalyst C8300', 36, 1],
			[deviceConfig.memory.partNumber, deviceConfig.memory.description, '', 1],
			['M2USB-16G', 'Cisco Catalyst 8000 Edge M.2 USB 16GB', '', 1],
			['C-RFID-1R', 'Cisco Catalyst 8000 Edge RFID - 1RU', '', 1],
			['C8000-HSEC', 'U.S. Export Restriction Compliance license for C8000 series', '', 1],
			['C8300-RM-19-1R', 'Cisco Catalyst 8300 Rack mount kit - 19" 1R', '', 1],
			['C8300-NIM-BLANK', 'Cisco Catalyst 8300 Edge NIM Blank', '', nimBlankSlots],
			[deviceConfig.nimOne.partNumber, deviceConfig.nimOne.description, '', nimQty],
			['C8300-SM-BLANK', 'Cisco Catalyst 8300 Edge SM Blank', '', smBlankSlots],
			['C8300-PIM-BLANK', 'Cisco Catalyst 8300 Edge PIM Blank', '', pimBlankSlots],
			[deviceConfig.pim.partNumber, deviceConfig.pim.description, '', pimQty],
			['NETWORK-PNP-LIC', 'Network Plug-n-Play Connect for zero-touch device deployment', '', 1],
			['TE-R-SW', 'TE agent for IOSXE on Enterprise Routing', '', 1],
			['IOSXE-AUTO-MODE', 'IOS XE Autonomous boot up mode for Unified image', '', 2],
			['SC8KBEUK9-176', 'UNIVERSAL', '', 1],
			['PWR-CC1-250WAC', 'Cisco C8300 1RU 250W AC Power supply', '', 2],
			[deviceConfig.powerCable.partNumber, deviceConfig.powerCable.description, '', 2],
			[`DNA-P-T${deviceConfig.tier}-A-3Y`, 'Cisco DNA Advantage On-Prem Lic 3Y', '', 1],
			['SVS-PDNA-ADV', 'Embedded Support for SW - Tiered  DNA Advantage On-Prem', '', 1],
			[`DSTACK-T${deviceConfig.tier}-A`, 'Cisco DNA Advantage Stack', '', 1],
			[`NWSTACK-T${deviceConfig.tier}-A`, 'Cisco Network Advantage Stack ', '', 1],
			['SDWAN-UMB-ADV', 'Cisco Umbrella for DNA Advantage', '', 1],
			['DNAC-ONPREM-PF', 'Cisco DNA Center On Prem Deployment Option for WAN', '', 1]
		];
	} else if (deviceConfig.device.partNumber === 'C8300-1N1S-6T') {
		template = [
			[deviceConfig.device.partNumber, deviceConfig.device.description, '', 1],
			['CON-SNT-C830IN6T', 'SNTC-8X5XNBD Cisco Catalyst C8300', 36, 1],
			[deviceConfig.memory.partNumber, deviceConfig.memory.description, '', 1],
			['M2USB-16G', 'Cisco Catalyst 8000 Edge M.2 USB 16GB', '', 1],
			['C-RFID-1R', 'Cisco Catalyst 8000 Edge RFID - 1RU', '', 1],
			['C8000-HSEC', 'U.S. Export Restriction Compliance license for C8000 series', '', 1],
			['C8300-RM-19-1R', 'Cisco Catalyst 8300 Rack mount kit - 19" 1R', '', 1],
			['C8300-NIM-BLANK', 'Cisco Catalyst 8300 Edge NIM Blank', '', nimBlankSlots],
			[deviceConfig.nimOne.partNumber, deviceConfig.nimOne.description, '', nimQty],
			['C8300-SM-BLANK', 'Cisco Catalyst 8300 Edge SM Blank', '', smBlankSlots],
			['C8300-PIM-BLANK', 'Cisco Catalyst 8300 Edge PIM Blank', '', pimBlankSlots],
			[deviceConfig.pim.partNumber, deviceConfig.pim.description, '', pimQty],
			['NETWORK-PNP-LIC', 'Network Plug-n-Play Connect for zero-touch device deployment', '', 1],
			['TE-R-SW', 'TE agent for IOSXE on Enterprise Routing', '', 1],
			['IOSXE-AUTO-MODE', 'IOS XE Autonomous boot up mode for Unified image', '', 2],
			['SC8KBEUK9-176', 'UNIVERSAL', '', 1],
			['PWR-CC1-250WAC', 'Cisco C8300 1RU 250W AC Power supply', '', 2],
			[deviceConfig.powerCable.partNumber, deviceConfig.powerCable.description, '', 2],
			[`DNA-P-T${deviceConfig.tier}-A-3Y`, 'Cisco DNA Advantage On-Prem Lic 3Y', '', 1],
			['SVS-PDNA-ADV', 'Embedded Support for SW - Tiered  DNA Advantage On-Prem', '', 1],
			[`DSTACK-T${deviceConfig.tier}-A`, 'Cisco DNA Advantage Stack', '', 1],
			[`NWSTACK-T${deviceConfig.tier}-A`, 'Cisco Network Advantage Stack ', '', 1],
			['SDWAN-UMB-ADV', 'Cisco Umbrella for DNA Advantage', '', 1],
			['DNAC-ONPREM-PF', 'Cisco DNA Center On Prem Deployment Option for WAN', '', 1]
		];
	}

	let updatedTemplate = template.filter((item) => item[3] !== 0);
	return updatedTemplate;
};

const genC8200 = (deviceConfig) => {
	let nimBlankSlots = 1;
	let pimBlankSlots = 1;
	let nimQty = 0;
	let pimQty = 0;
	let template;

	if (deviceConfig.nimOne.partNumber !== false) {
		nimQty = 1;
		nimBlankSlots -= 1;
	}

	if (deviceConfig.pim.partNumber !== false) {
		pimQty = 1;
		pimBlankSlots = 0;
	}

	if (deviceConfig.device.partNumber === 'C8200L-1N-4T') {
		template = [
			[deviceConfig.device.partNumber, deviceConfig.device.description, '', 1],
			[
				'CON-SNT-C8200TL1',
				'SNTC-8X5XNBD Cisco Catalyst 8200L with 1-NIM slot and 4x1G WAN ports',
				36,
				1
			],
			[deviceConfig.memory.partNumber, deviceConfig.memory.description, '', 1],
			['C-RFID-1R', 'Cisco Catalyst 8000 Edge RFID - 1RU', '', 1],
			['C8000-HSEC', 'U.S. Export Restriction Compliance license for C8000 series', '', 1],
			['C8200-RM-19-1R', 'Cisco Catalyst 8200 Rack mount kit - 19" 1R', '', 1],
			['NETWORK-PNP-LIC', 'Network Plug-n-Play Connect for zero-touch device deployment', '', 1],
			['C8200-NIM-BLANK', 'Cisco Catalyst 8200 Edge NIM Blank', '', nimBlankSlots],
			[deviceConfig.nimOne.partNumber, deviceConfig.nimOne.description, '', nimQty],
			['C8200-PIM-BLANK', 'Cisco Catalyst 8200 Edge PIM Blank', '', pimBlankSlots],
			[deviceConfig.pim.partNumber, deviceConfig.pim.description, '', pimQty],
			['C-M2-BLANK', 'Cisco Catalyst 8200 Edge M.2 Blank', '', 1],
			['IOSXE-AUTO-MODE', 'IOS XE Autonomous boot up mode for Unified image', '', 2],
			['SC8KBEUK9-176', 'UNIVERSAL', '', 1],
			[deviceConfig.powerCable.partNumber, deviceConfig.powerCable.description, '', 1],
			[`DNA-P-T${deviceConfig.tier}-A-3Y`, 'Cisco DNA Advantage On-Prem Lic 3Y', '', 1],
			['SVS-PDNA-ADV', 'Embedded Support for SW - Tiered  DNA Advantage On-Prem', '', 1],
			[`DSTACK-T${deviceConfig.tier}-A`, 'Cisco DNA Advantage Stack', '', 1],
			[`NWSTACK-T${deviceConfig.tier}-A`, 'Cisco Network Advantage Stack ', '', 1],
			['SDWAN-UMB-ADV', 'Cisco Umbrella for DNA Advantage', '', 1],
			['DNAC-ONPREM-PF', 'Cisco DNA Center On Prem Deployment Option for WAN', '', 1]
		];
	} else if (deviceConfig.device.partNumber === 'C8200-1N-4T') {
		template = [
			[deviceConfig.device.partNumber, deviceConfig.device.description, '', 1],
			['CON-SNT-C82001N4', 'SNTC-8X5XNBD Cisco Catalyst C8200', 36, 1],
			[deviceConfig.memory.partNumber, deviceConfig.memory.description, '', 1],
			['M2USB-16G', 'Cisco Catalyst 8000 Edge M.2 USB 16GB', '', 1],
			['C-RFID-1R', 'RFID for Catalyst 8000', '', 1],
			['C8000-HSEC', 'U.S. Export Restriction Compliance license for C8000 series', '', 1],
			['C8200-RM-19-1R', 'Cisco Catalyst 8200 Rack mount kit - 19" 1R', '', 1],
			['NETWORK-PNP-LIC', 'Network Plug-n-Play Connect for zero-touch device deployment', '', 1],
			['C8200-NIM-BLANK', 'Cisco Catalyst 8200 Edge NIM Blank', '', nimBlankSlots],
			[deviceConfig.nimOne.partNumber, deviceConfig.nimOne.description, '', nimQty],
			['C8200-PIM-BLANK', 'Cisco Catalyst 8200 Edge PIM Blank', '', pimBlankSlots],
			[deviceConfig.pim.partNumber, deviceConfig.pim.description, '', pimQty],
			['TE-R-SW', 'TE agent for IOSXE on Enterprise Routing', '', 1],
			['IOSXE-AUTO-MODE', 'IOS XE Autonomous boot up mode for Unified image', '', 2],
			['SC8KBEUK9-176', 'UNIVERSAL', '', 1],
			[deviceConfig.powerCable.partNumber, deviceConfig.powerCable.description, '', 1],
			[`DNA-P-T${deviceConfig.tier}-A-3Y`, 'Cisco DNA Advantage On-Prem Lic 3Y', '', 1],
			['SVS-PDNA-ADV', 'Embedded Support for SW - Tiered  DNA Advantage On-Prem', '', 1],
			[`DSTACK-T${deviceConfig.tier}-A`, 'Cisco DNA Advantage Stack', '', 1],
			[`NWSTACK-T${deviceConfig.tier}-A`, 'Cisco Network Advantage Stack ', '', 1],
			['SDWAN-UMB-ADV', 'Cisco Umbrella for DNA Advantage', '', 1],
			['DNAC-ONPREM-PF', 'Cisco DNA Center On Prem Deployment Option for WAN', '', 1]
		];
	}

	let updatedTemplate = template.filter((item) => item[3] !== 0);
	return updatedTemplate;
};
