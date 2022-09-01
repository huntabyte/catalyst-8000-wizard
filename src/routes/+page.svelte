<script>
	import devices from '$lib/data/devices.json';
	let pageCounter = 0;

	let currentDevices = devices;
	let completed = false;
	let speed;
	let modular;

	function handleReset() {
		currentDevices = devices;
		pageCounter = 0;
		completed = false;
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

	function filterFortyGig() {
		currentDevices = currentDevices.filter((device) => device.forty_ge == true);
		console.log(currentDevices);
		completed = true;
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
			<h1 class="text-3xl max-w-6xl text-center font-bold">
				Do you plan on using this router for <span class="underline"> voice</span>?
			</h1>
			<div class="flex justify-center pt-6">
				<button on:click={filterVoice} class="btn btn-success mx-4 w-1/2"> Yes </button>
				<button on:click={() => (pageCounter = 1.5)} class="btn btn-error mx-4 w-1/2"> No </button>
			</div>
		{:else if pageCounter === 1.5}
			<h1 class="text-3xl max-w-6xl text-center font-bold">
				Does this device need to support network/service modules?
			</h1>
			<div class="flex justify-center pt-6">
				<button on:click={filterVoice} class="btn btn-success mx-4 w-1/2"> Yes </button>
				<button on:click={() => (pageCounter = 2)} class="btn btn-error mx-4 w-1/2"> No </button>
			</div>
		{:else if pageCounter === 2}
			<h1 class="text-3xl max-w-6xl text-center font-bold">
				Which of these options best fits your <span class="underline"> speed/bandwidth</span> requirement?
			</h1>
			<div class="flex justify-center pt-6">
				<button
					on:click={() => filterSpeed(0)}
					class="btn btn-ghost btn-outline mx-4 w-52 normal-case"
				>
					&lt;= 50Mbps
				</button>
				<button
					on:click={() => filterSpeed(1)}
					class="btn btn-ghost btn-outline mx-4 w-52 normal-case"
				>
					51 - 400Mbps
				</button>
				<button
					on:click={() => filterSpeed(2)}
					class="btn btn-ghost btn-outline mx-4 w-52 normal-case"
				>
					401Mbps - 2Gbps
				</button>
				<button
					on:click={() => filterSpeed(3)}
					class="btn btn-ghost btn-outline mx-4 w-52 normal-case"
				>
					&gt; 2Gbps
				</button>
			</div>
		{:else if pageCounter === 2.5}
			<h1 class="text-3xl max-w-6xl text-center font-bold">Do you need 40GE or 100GE WAN ports?</h1>
			<div class="flex justify-center pt-6">
				<button on:click={() => filterFortyGig()} class="btn btn-success mx-4 w-1/2"> Yes </button>
				<button class="btn btn-error mx-4 w-1/2"> No </button>
			</div>
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
