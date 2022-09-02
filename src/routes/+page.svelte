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
	}

	function filterSpeed(tier) {
		if (tier === 3) {
			currentDevices = currentDevices.filter((device) => device.tier_three == true);
			if (modular) {
				pageCounter = 3;
			} else {
				pageCounter = 2.5;
			}
			return;
		} else if (tier === 2) {
			currentDevices = currentDevices.filter((device) => device.tier_two == true);
		} else if (tier === 1) {
			currentDevices = currentDevices.filter((device) => device.tier_one == true);
		} else if (tier === 0) {
			currentDevices = currentDevices.filter((device) => device.tier_zero == true);
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

<div class="w-full h-full">
	<div class="flex flex-col justify-center items-center h-full w-full mx-auto px-6">
		{#if pageCounter === 0}
			<StartCard action={() => (pageCounter = 1)} />
		{:else if pageCounter === 1}
			<QuestionBool
				question={'Do you plan on using this router for voice?'}
				yesAction={filterVoice}
				noAction={() => changePage(1.5)}
			/>
		{:else if pageCounter === 1.5}
			<QuestionBool
				question={'Do you need port expandability or advanced layer 2 support?'}
				yesAction={filterVoice}
				noAction={() => changePage(2)}
			/>
		{:else if pageCounter === 2}
			<QuestionMultipleChoice
				question={'Which of these options best fits your speed/bandwidth requirement?'}
				choices={speedChoices}
			/>
		{:else if pageCounter === 2.5}
			<QuestionBool
				question={'Do you need 40GE or 100GE WAN ports?'}
				yesAction={() => filterFortyGig(true)}
				noAction={() => filterFortyGig(false)}
			/>
		{:else if pageCounter === 2.65}
			<QuestionMultipleChoice
				question={'What is the purpose of this device?'}
				choices={purposeChoices}
			/>
		{:else if pageCounter === 2.75}
			<QuestionMultipleChoice
				question={'What is the purpose of this device?'}
				choices={purposeChoices}
			/>
		{:else if pageCounter === 3}
			<QuestionBool
				question={'Do you need 10GE WAN ports?'}
				yesAction={() => filterTenGig(true)}
				noAction={() => filterTenGig(false)}
			/>
		{:else if pageCounter === 3.5}
			<QuestionBool
				question={'Do you plan to expand your WAN speed or add more than one network module in the future?'}
				yesAction={() => filterFamily('C8300')}
				noAction={() => filterFamily('C8200')}
			/>
		{:else if pageCounter === 999}
			<ResultsCard results={currentDevices} restart={() => handleReset()} />
		{/if}
	</div>
</div>
