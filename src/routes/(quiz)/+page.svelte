<script>
	import devices from '$lib/data/devices.json';
	import QuestionBool from '$lib/components/QuestionBool.svelte';
	import QuestionMultipleChoice from '$lib/components/QuestionMultipleChoice.svelte';
	import ResultsCard from '$lib/components/ResultsCard.svelte';
	import StartCard from '$lib/components/StartCard.svelte';

	let pageCounter = 0;
	let currentDevices = devices;
	let modular;

	function handleReset() {
		modular = false;
		currentDevices = devices;
		pageCounter = 0;
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
	}

	function changePage(num) {
		pageCounter = num;
	}

	function filterVoice() {
		currentDevices = currentDevices.filter((device) => device.voice == true);
		modular = true;
		pageCounter = 2;
		console.log(currentDevices);
	}

	function filterSpeed(tier) {
		if (tier === 3) {
			currentDevices = currentDevices.filter((device) => device.tier_three == true);
			if (modular) {
				pageCounter = 999;
				console.log(currentDevices);
			} else {
				pageCounter = 2.5;
				console.log(currentDevices);
			}
			return;
		} else if (tier === 2) {
			currentDevices = currentDevices.filter((device) => device.tier_two == true);
			console.log(currentDevices);
		} else if (tier === 1) {
			currentDevices = currentDevices.filter((device) => device.tier_one == true);
			console.log(currentDevices);
		} else if (tier === 0) {
			currentDevices = currentDevices.filter((device) => device.tier_zero == true);
			console.log(currentDevices);
		}
		pageCounter = 3;
		console.log(currentDevices);
	}

	function filterFamily(family) {
		currentDevices = currentDevices.filter((device) => device.family == family);
		pageCounter = 999;
		console.log(currentDevices);
	}

	function filterPurpose(value) {
		if (value === 0) {
			currentDevices = currentDevices.filter((device) => device.types.includes('Branch'));
			console.log(currentDevices);
		} else if (value === 1) {
			currentDevices = currentDevices.filter((device) => device.types.includes('WAN Aggregation'));
			console.log(currentDevices);
		} else if (value === 2) {
			currentDevices = currentDevices.filter((device) => device.types.includes('Head-end'));
			console.log(currentDevices);
		}
		pageCounter = 999;
		console.log(currentDevices);
	}

	function filterFortyGig(bool) {
		if (bool) {
			currentDevices = currentDevices.filter((device) => device.forty_ge == true);
			pageCounter = 999;
			console.log(currentDevices);
		} else {
			currentDevices = currentDevices.filter((device) => device.forty_ge == false);
			pageCounter = 2.75;
			console.log(currentDevices);
		}
	}

	function filterTenGig(type) {
		if (type == true) {
			currentDevices = currentDevices.filter((device) => device.ten_ge > 0);
			if (currentDevices.length > 2) {
				purposeChoices.pop();
				pageCounter = 2.75;
				console.log(currentDevices);
			} else {
				pageCounter = 999;
				console.log(currentDevices);
			}
		} else {
			currentDevices = currentDevices.filter((device) => device.ten_ge == 0);
			if (currentDevices.length > 2) {
				pageCounter = 3.5;
				console.log(currentDevices);
			} else {
				pageCounter = 999;
				console.log(currentDevices);
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

<div class="w-full h-full">
	<div
		class="flex flex-col justify-center items-center h-full w-full mx-auto px-1.5 md:px-6 overflow-x-hidden"
	>
		{#if pageCounter === 0}
			<StartCard action={() => (pageCounter = 1)} />
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
