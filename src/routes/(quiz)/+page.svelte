<script>
	import { deviceConfig, defaultDeviceConfig } from '$lib/stores';
	import devices from '$lib/data/devices.json';
	import QuestionBool from '$lib/components/QuestionBool.svelte';
	import QuestionMultipleChoice from '$lib/components/QuestionMultipleChoice.svelte';
	import ResultsCard from '$lib/components/ResultsCard.svelte';
	import StartCard from '$lib/components/StartCard.svelte';

	let pageCounter = 0;
	let currentDevices = devices;
	let modular;

	function handleReset() {
		$deviceConfig.device.partNumber = '';
		$deviceConfig.nimOne.partNumber = false;
		$deviceConfig.nimTwo.partNumber = false;
		$deviceConfig.pim.partNumber = false;
		$deviceConfig.memory.partNumber = '';
		$deviceConfig.powerCable.partNumber = 'CAB-AC';

		modular = false;
		currentDevices = devices;
		purposeChoices = [
			{
				content: 'Branch',
				action: filterPurpose,
				value: 0
			},
			{
				content: 'WAN Aggregation',
				action: filterPurpose,
				value: 1
			},
			{
				content: 'Head-end',
				action: filterPurpose,
				value: 2
			}
		];
		if (pageCounter === 0) {
			pageCounter = 1;
		} else {
			pageCounter = 0;
		}
	}

	function changePage(num) {
		pageCounter = num;
	}

	function filterVoice() {
		currentDevices = currentDevices.filter((device) => device.voice == true);
		modular = true;
		pageCounter = 2;
	}

	function filterSpeed(tier) {
		if (tier === 3) {
			currentDevices = currentDevices.filter((device) => device.tier_three == true);
			$deviceConfig.tier = 3;
			if (modular) {
				pageCounter = 999;
			} else {
				pageCounter = 2.5;
			}
			return;
		} else if (tier === 2) {
			currentDevices = currentDevices.filter((device) => device.tier_two == true);
			$deviceConfig.tier = 2;
		} else if (tier === 1) {
			currentDevices = currentDevices.filter((device) => device.tier_one == true);
			$deviceConfig.tier = 1;
		} else if (tier === 0) {
			currentDevices = currentDevices.filter((device) => device.tier_zero == true);
			$deviceConfig.tier = 0;
		}
		pageCounter = 3;
	}

	function filterFamily(family) {
		currentDevices = currentDevices.filter((device) => device.family == family);
		pageCounter = 999;
	}

	function filterPurpose(value) {
		if (value === 0) {
			currentDevices = currentDevices.filter((device) => device.types.includes('Branch'));
		} else if (value === 1) {
			currentDevices = currentDevices.filter((device) => device.types.includes('WAN Aggregation'));
		} else if (value === 2) {
			currentDevices = currentDevices.filter((device) => device.types.includes('Head-end'));
		}
		pageCounter = 999;
	}

	function filterFortyGig(bool) {
		if (bool) {
			currentDevices = currentDevices.filter((device) => device.forty_ge == true);
			pageCounter = 999;
		} else {
			currentDevices = currentDevices.filter((device) => device.forty_ge == false);
			pageCounter = 2.75;
		}
	}

	function filterTenGig(type) {
		if (type == true) {
			currentDevices = currentDevices.filter((device) => device.ten_ge > 0);
			if (currentDevices.length > 2) {
				purposeChoices.pop();
				pageCounter = 2.75;
			} else {
				pageCounter = 999;
			}
		} else {
			currentDevices = currentDevices.filter((device) => device.ten_ge == 0);
			if (currentDevices.length > 2) {
				pageCounter = 3.5;
			} else {
				pageCounter = 999;
			}
		}
	}

	let speedChoices = [
		{
			content: '<= 50Mbps',
			action: filterSpeed,
			value: 0
		},
		{
			content: '50 - 400Mbps',
			action: filterSpeed,
			value: 1
		},
		{
			content: '401Mbps - 2Gbps',
			action: filterSpeed,
			value: 2
		},
		{
			content: '> 2Gbps',
			action: filterSpeed,
			value: 3
		}
	];

	let purposeChoices = [
		{
			content: 'Branch',
			action: filterPurpose,
			value: 0
		},
		{
			content: 'WAN Aggregation',
			action: filterPurpose,
			value: 1
		},
		{
			content: 'Head-end',
			action: filterPurpose,
			value: 2
		}
	];
</script>

<svelte:head>
	<title>Catalyst 8000 Wizard</title>
</svelte:head>

<div class="w-full h-full">
	<div
		class="flex flex-col justify-center items-center h-full w-full mx-auto px-1.5 md:px-6 overflow-x-hidden"
	>
		{#if pageCounter === 0}
			<StartCard action={() => handleReset()} />
		{:else if pageCounter === 1}
			<QuestionBool
				question={'Will this router be used for voice?'}
				yesAction={filterVoice}
				noAction={() => changePage(1.5)}
				restart={() => handleReset()}
				info={true}
				content={'By voice, we mean provide rich-media capabilities such as high-density voice connectivity, conferencing, transcoding, media optimization, transrating, and secure voice for Cisco Unified Communications solutions. This capability involves the use of Packet Voice Digital Signal Process Modules (PVDMs).'}
			/>
		{:else if pageCounter === 1.5}
			<QuestionBool
				question={'Will this router require port expandability or EtherSwitch capabilities?'}
				yesAction={filterVoice}
				noAction={() => changePage(2)}
				restart={() => handleReset()}
				info={true}
				content={'Port expandability and EtherSwitch capabilities require Network Interface Modules (NIMs). If the device you are replacing is currently using NIMs, you will be able to use the same NIMs in the Catalyst 8000 Series router.'}
			/>
		{:else if pageCounter === 2}
			<QuestionMultipleChoice
				question={'Which of these options best fits your speed/bandwidth requirement?'}
				choices={speedChoices}
				restart={() => handleReset()}
				info={true}
				content={'Catalyst 8000 Series devices require DNA licensing to operate. Different devices support different DNA tiers, and the tiers are broken up by speed/bandwidth.'}
			/>
		{:else if pageCounter === 2.5}
			<QuestionBool
				question={'Does this router need to have 40GE or 100GE WAN interfaces?'}
				yesAction={() => filterFortyGig(true)}
				noAction={() => filterFortyGig(false)}
				restart={() => handleReset()}
			/>
		{:else if pageCounter === 2.65}
			<QuestionMultipleChoice
				question={'What will this device be deployed as?'}
				choices={purposeChoices}
				restart={() => handleReset()}
			/>
		{:else if pageCounter === 2.75}
			<QuestionMultipleChoice
				question={'What is the purpose of this device?'}
				choices={purposeChoices}
				restart={() => handleReset()}
			/>
		{:else if pageCounter === 3}
			<QuestionBool
				question={'Does this router need to have 10GE WAN interfaces?'}
				yesAction={() => filterTenGig(true)}
				noAction={() => filterTenGig(false)}
				restart={() => handleReset()}
			/>
		{:else if pageCounter === 3.5}
			<QuestionBool
				question={'Do you plan to expand your WAN speed or add more than one network interface module in the future?'}
				yesAction={() => filterFamily('C8300')}
				noAction={() => filterFamily('C8200')}
				restart={() => handleReset()}
			/>
		{:else if pageCounter === 999}
			<ResultsCard results={currentDevices} restart={() => handleReset()} />
		{/if}
	</div>
</div>
