import { writable } from 'svelte/store';

export const device = writable({
	id: 1,
	part_number: 'C8200L-1N-4T',
	description:
		'Modular enterprise branch edge platform with 2x SFP ports, 2x 1G Copper, 1x NIM and 1x PIM',
	voice: true,
	tier_zero: true,
	tier_one: true,
	tier_two: true,
	tier_three: false,
	forty_ge: false,
	ten_ge: 0,
	one_ge: 4,
	nim_qty: 1,
	sim_qty: 0,
	pim_qty: 1,
	ru: 1,
	family: 'C8200',
	types: ['Branch'],
	specs: {
		'10g_port_density': 0,
		'1g_port_density': 4,
		sm_slots: 0,
		nim_slots: 1,
		pim_slots: 1,
		memory_default: '4GB',
		storage_default: '-'
	},
	performance: {
		ipv4_forwarding: '3.8 Gbps',
		ipsec_throughput: '500 Mbps',
		ipsec_svti_tunnels: 1500
	},
	scalability: {
		acls: 4000,
		ipv4_aces: 72000,
		ipv4_routes: '800K (4GB) - 4M (32GB)',
		ipv6_routes: '800K (4GB) - 4M (32GB)',
		queues: 16000,
		nat_sessions: '600K (4GB) - 2M (32GB)',
		fw_sessions: 512000,
		vrfs: 2000
	},
	build_options: [
		{
			key: 'dna_package',
			display: 'DNA Subscription Package',
			type: 'radio',
			value: 'A',
			options: [
				{
					selected: true,
					display: 'Advantage',
					value: 'A'
				},
				{
					selected: false,
					display: 'Essentials',
					value: 'E'
				},
				{
					selected: false,
					display: 'Premier',
					value: 'P'
				}
			]
		},
		{
			key: 'dna_tier',
			display: 'DNA Bandwidth Tier',
			type: 'radio',
			value: 'T2',
			options: [
				{
					selected: false,
					display: 'Tier 0 (Up to 50M Agg.)',
					value: 'T0'
				},
				{
					selected: false,
					display: 'Tier 1 (Up to 400M Agg.)',
					value: 'T1'
				},
				{
					selected: true,
					display: 'Tier 2 (Up to 2G Agg.)',
					value: 'T2'
				}
			]
		},
		{
			key: 'dna_duration',
			display: 'DNA Subscription Duration',
			type: 'radio',
			value: '3Y',
			options: [
				{
					selected: true,
					display: '3 Years (36 Months)',
					value: '3Y'
				},
				{
					selected: false,
					display: '5 Years (60 Months)',
					value: '5Y'
				}
			]
		},
		{
			key: 'dram',
			display: 'Memory/DRAM',
			type: 'radio',
			value: 'MEM-C8200-4GB',
			options: [
				{
					selected: true,
					display: '4GB',
					value: 'MEM-C8200-4GB'
				},
				{
					selected: false,
					display: '8GB',
					value: 'MEM-C8200-8GB'
				},
				{
					selected: false,
					display: '16GB',
					value: 'MEM-C8200-16GB'
				},
				{
					selected: false,
					display: '32GB',
					value: 'MEM-C8200-32GB'
				}
			]
		},
		{
			key: 'storage',
			display: 'M.2 Storage',
			type: 'radio',
			value: 0,
			options: [
				{
					selected: true,
					display: 'None',
					value: 0
				},
				{
					selected: false,
					display: 'M.2 USB 32GB',
					value: 'M2USB-32G'
				},
				{
					selected: false,
					display: 'SSD M.2 NVMe 600GB',
					value: 'SSD-M2NVME-600G'
				}
			]
		},
		{
			key: 'mode',
			display: 'Operating Mode',
			type: 'radio',
			value: 'IOSXE-AUTO-MODE',
			options: [
				{
					selected: true,
					display: 'IOS XE Autonomous Mode',
					value: 'IOSXE-AUTO-MODE'
				},
				{
					selected: false,
					display: 'IOS XE SD-WAN Mode',
					value: 'IOSXE-CTRL-MODE'
				}
			]
		},
		{
			key: 'image',
			display: 'Software Image',
			type: 'radio',
			value: 'SC8KBEUK9-176',
			options: [
				{
					selected: false,
					display: 'IOS-XE 17.5',
					value: 'SC8KBEUK9-175'
				},
				{
					selected: true,
					display: 'IOS-XE 17.6',
					value: 'SC8KBEUK9-176'
				}
			]
		},
		{
			key: 'power_cable',
			display: 'Power Cable',
			type: 'radio',
			value: 'CAB-AC',
			options: [
				{
					selected: true,
					display: 'AC Power Cord (North America), C13, NEMA 5-15P, 2.1m',
					value: 'CAB-AC'
				},
				{
					selected: false,
					display: 'Power Cord Jumper, C13-C14 Connectors, 2 Meter Length',
					value: 'CAB-C13-C14-2M'
				},
				{
					selected: false,
					display: 'AC Power Cord (Europe), C13, CEE 7, 1.5M',
					value: 'CAB-ACE'
				},
				{
					selected: false,
					display: 'AC Power Cord (UK), C13, BS 1363, 2.5m',
					value: 'CAB-ACU'
				}
			]
		},
		{
			key: 'hsec',
			display: 'HSEC License',
			type: 'radio',
			value: 0,
			options: [
				{
					selected: false,
					display: 'None',
					value: 0
				},
				{
					selected: true,
					display: 'U.S. Export Restriction Compliance license',
					value: 'C-8000-HSEC'
				}
			]
		},
		{
			key: 'pim',
			display: 'Pluggable Modules',
			type: 'checkbox',
			value: 0,
			options: [
				{
					selected: true,
					display: 'None',
					value: 0
				},
				{
					selected: false,
					display: 'CAT6 LTE Advanced Pluggable for APAC, LATAM and ANZ',
					value: 'P-LTEA-LA'
				},
				{
					selected: false,
					display: 'CAT6 LTE Advanced Pluggable for Europe and North America',
					value: 'P-LTEA-EA'
				},
				{
					selected: false,
					display: 'CAT18 LTE Advanced PRO Pluggable for ALL Global Regions',
					value: 'P-LTEAP18-GL'
				}
			]
		},
		{
			key: 'console_cables',
			display: 'Console Cables',
			type: 'checkbox',
			value: 0,
			options: [
				{
					selected: true,
					display: 'None',
					value: 0
				},
				{
					selected: false,
					display: 'Console Cable 6ft with RJ45 and DB9F',
					value: 'CAB-CONSOLE-RJ45'
				},
				{
					selected: false,
					display: 'Auxiliary Cable 8ft with RJ45 and DB25M',
					value: 'CAB-AUX-RJ45'
				},
				{
					selected: false,
					display: 'CAT18 LTE Advanced PRO Pluggable for ALL Global Regions',
					value: 'CAB-ETH-S-RJ45'
				}
			]
		},
		{
			key: 'rfid',
			display: 'RFID Option',
			type: 'checkbox',
			value: 0,
			options: [
				{
					selected: true,
					display: 'None',
					value: 0
				},
				{
					selected: false,
					display: 'RFID - 1RU',
					value: 'C-RFID-1R'
				}
			]
		}
	]
});

export const deviceConfig = writable({});
