<script>
	import { device } from '$lib/stores';
	import SingleSelect from '$lib/components/customization/SingleSelect.svelte';

	let buildOptions = $device.build_options;

	let mapped = buildOptions.map((item) => ({ [item.key]: item.value }));
	let configuration = Object.assign({}, ...mapped);

	function updateConfiguration(key, value) {
		configuration[key] = value;
	}
</script>

<div class="flex flex-col items-center w-full h-auto md:container md:pt-6 mx-auto">
	<div class="flex flex-col items-center">
		<h1 class="text-3xl md:text-5xl text-center max-w-4xl md:pb-2 leading-tight">
			Build your own {$device.part_number}
		</h1>
		<p class="font-thin md:font-normal text-center pt-4 max-w-2xl md:text-xl leading-snug">
			Using the selections you make below, we'll create a custom BOM that you can download and use
			for procurement.
		</p>
	</div>
	<div class="divider " />
	<div class="flex flex-col items-center w-full h-auto md:container md:pt-6 md:px-6 mx-auto">
		<div>
			{#each buildOptions as config}
				<div class="pb-5">
					<SingleSelect {updateConfiguration} bind:configuration {config} />
				</div>
			{/each}
		</div>
		<div>
			<ul>
				{#each Object.entries(configuration) as [key, value], index (key)}
					<li>
						{key} - {value}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
