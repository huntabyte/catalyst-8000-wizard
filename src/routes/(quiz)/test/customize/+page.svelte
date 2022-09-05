<script>
	import { device, deviceConfig } from '$lib/stores';
	import { goto } from '$app/navigation';
	import SelectInput from './SelectInput.svelte';

	let buildOptions = $device.build_options;

	let mapped = buildOptions.map((item) => ({ [item.key]: item.value }));
	let configuration = Object.assign({}, ...mapped);

	function handleUpdateConfig() {
		configuration['major_line'] = $device.part_number;
		deviceConfig.update((config) => configuration);
		console.log($deviceConfig);
		goto('/test/customize/bom');
	}
</script>

<div class="h-full w-full md:container md:mx-auto">
	<div class="flex justify-center items-center">
		<div class="w-1/2 card bg-slate-700 shadow-xl mt-4 px-6 pb-6">
			<h1 class="font-medium text-xl pt-6 pb-3">Build Device</h1>
			<div class="divider p-0 m-0" />
			<div class="form-control w-full">
				<SelectInput
					label={'Device Model'}
					placeholder={$device.part_number}
					disabled
					bind:configuration
				/>
				{#each buildOptions as config}
					<SelectInput label={config.display} {config} bind:configuration />
				{/each}
			</div>
			<button
				href="/test/customize/bom"
				on:click={() => handleUpdateConfig()}
				class="btn btn-primary mt-6">Build</button
			>
			<!-- <ul>
				{#each Object.entries(configuration) as [key, value], index (key)}
					<li>
						{key}: {value}
					</li>
				{/each}
			</ul> -->
		</div>
	</div>
</div>
