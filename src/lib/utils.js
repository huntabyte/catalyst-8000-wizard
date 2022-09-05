function buildBOM(data) {}

function createDNAItems(data) {
	let tier = data.dna_tier;

	const dnaLineItems = [
		{
			part_number: `DNA-P-${tier}-A-3Y`,
			description: '',
			qty: 1
		},
		{
			part_number: `SVS-PDNA-ADV`,
			description: '',
			qty: 1
		},
		{
			part_number: `DSTACK-${tier}-A`,
			description: '',
			qty: 1
		},
		{
			part_number: `NWSTACK-${tier}-A`,
			description: '',
			qty: 1
		},
		{
			part_number: `SDWAN-UMB-ADV`,
			description: '',
			qty: 1
		},
		{
			part_number: `DNAC-ONPREM-PF`,
			description: '',
			qty: 1
		}
	];
}
