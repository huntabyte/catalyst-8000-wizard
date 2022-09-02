<script>
	import devices from '$lib/data/devices.json';
	import QuestionBool from '$lib/components/QuestionBool.svelte';
	import QuestionMultipleChoice from '$lib/components/QuestionMultipleChoice.svelte';

	let pageCounter = 0;

	let currentDevices = devices;
	let modular;

	function handleReset() {
		currentDevices = devices;
		pageCounter = 0;
		completed = false;
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
		speed = tier;
		if (tier === 3) {
			currentDevices = currentDevices.filter((device) => device.tier_three == true);
			if (modular) {
				pageCounter = 3;
			} else {
				pageCounter = 2.5;
			}
			console.log(currentDevices);
			return;
		} else if (tier === 2) {
			currentDevices = currentDevices.filter((device) => device.tier_two == true);
		} else if (tier === 1) {
			currentDevices = currentDevices.filter((device) => device.tier_one == true);
		} else if (tier === 0) {
			currentDevices = currentDevices.filter((device) => device.tier_zero == true);
		}
		pageCounter = 3;
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
	}

	function filterFortyGig(bool) {
		if (bool) {
			currentDevices = currentDevices.filter((device) => device.forty_ge == true);
			console.log(currentDevices);
			pageCounter = 999;
		} else {
			currentDevices = currentDevices.filter((device) => device.forty_ge == false);
			console.log(currentDevices);
			pageCounter = 2.75;
		}
	}

	function filterTenGig(type) {
		if (type == true) {
			currentDevices = currentDevices.filter((device) => device.ten_ge > 0);
			console.log(currentDevices);
			pageCounter = 999;
		} else {
			currentDevices = currentDevices.filter((device) => device.ten_ge == 0);
			console.log(currentDevices);
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
			<h1 class="text-3xl text-center font-bold">Catalyst 8000 Series Migration Wizard</h1>
			<p class="text-center pt-4 w-5/6 max-w-6xl text-xl">
				This tool will help you identify what Catalyst 8000 device you need based on your unique
				requirements. We accomplish this by asking a few questions about your requirements.
			</p>
			<p class="text-center pt-2 w-5/6 max-w-6xl text-xl italic text-gray-400">
				This should only take a few seconds.
			</p>
			<button on:click={() => (pageCounter = 1)} class="btn btn-primary mt-8"> Get Started </button>
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
		{:else if pageCounter === 2.75}
			<QuestionMultipleChoice
				question={'What is the purpose of this device?'}
				choices={purposeChoices}
			/>
		{:else if pageCounter === 3}
			<h1 class="text-3xl max-w-6xl text-center font-bold">Do you need 10GE WAN ports?</h1>
			<div class="flex justify-center pt-6">
				<button on:click={() => filterTenGig(true)} class="btn btn-success mx-4 w-1/2">
					Yes
				</button>
				<button on:click={() => filterTenGig(false)} class="btn btn-error mx-4 w-1/2"> No </button>
			</div>
		{:else if pageCounter === 999}
			<h1>Completed</h1>
			<button on:click={() => handleReset()} class="btn btn-primary mt-8"> Restart </button>
		{/if}
	</div>
</div>
