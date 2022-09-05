<script>
	export let configuration;
	export let label;
	export let config = false;
	export let placeholder = false;
	export let disabled = false;
</script>

<div class="form-control w-full pt-3">
	<label class="label" for="">
		<span class="label-text text-lg">{label}</span>
	</label>
	<select class="select select-bordered" {disabled} bind:value={configuration[config.key]}>
		{#if placeholder}
			<option disabled selected value={placeholder}>{placeholder}</option>
		{/if}
		{#if config}
			{#each config.options as option (option.value)}
				<option value={option.value}>{option.display}</option>
			{/each}
		{/if}
	</select>
</div>
