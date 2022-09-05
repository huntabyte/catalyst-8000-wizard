<script>
	export let config;
	export let configuration;
	let value = config.value;
</script>

<div>
	<h3 class="font-medium text-3xl">
		{config.display}
	</h3>
	<div class="flex flex-col gap-3 pt-2">
		{#each config.options as option (option.value)}
			<label class="flex items-center gap-4">
				<input
					type="radio"
					class="radio radio-primary"
					value={option.value}
					bind:group={configuration[config.key]}
				/>
				<p class="text-lg">
					{option.display}
				</p>
			</label>
		{/each}
	</div>
</div>
