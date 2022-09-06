<script>
	import { deviceConfig, selectedDevice } from '$lib/stores';
	import { getNetworkModules } from '$lib/data/helpers';

	let networkModules = [];

	if ($selectedDevice.nim_qty > 0) {
		networkModules = getNetworkModules();
	}
	console.log('Device Config: ' + $deviceConfig);
	console.log('Selected Device: ' + $selectedDevice);
</script>

<div class="h-full w-full md:container mx-auto">
	<div class="flex justify-center items-center">
		<div class="card w-full bg-slate-700 shadow-xl mt-4 px-6 pb-6">
			<h1 class="font-medium text-2xl pt-6 pb-3">Customize Device - {$deviceConfig.part_number}</h1>
			<div class="divider" />
			<div class="form-control w-full max-w-sm space-y-2">
				{#if $selectedDevice.nim_qty > 0}
					<label class="label" for="">
						<span class="label-text text-lg">Network Module</span>
					</label>
					<select class="select select-primary select-bordered" bind:value={$deviceConfig.nim_one}>
						<option selected value={false}>None</option>
						{#each networkModules as module}
							<option value={module.part_number}>{module.part_number}</option>
						{/each}
					</select>
				{/if}
				{#if $selectedDevice.nim_qty > 1}
					<label class="label" for="">
						<span class="label-text text-lg">Network Module 2</span>
					</label>
					<select class="select select-primary select-bordered" bind:value={$deviceConfig.nim_two}>
						<option selected value={false}>None</option>
						{#each networkModules as module}
							<option value={module.part_number}>{module.part_number}</option>
						{/each}
					</select>
				{/if}
			</div>
		</div>
	</div>
</div>
