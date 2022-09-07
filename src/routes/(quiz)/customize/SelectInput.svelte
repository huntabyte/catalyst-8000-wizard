<script>
	export let label = '';
	export let options = ['1', '2', '3', '4', '5', '6'];
	export let none = false;
	export let value;
</script>

<label class="label pb-0" for="">
	<span class="label-text text-lg">{label}</span>
</label>
<select class="select select-primary select-bordered" bind:value>
	{#if none}
		<option selected value={false}>None</option>
	{/if}
	{#each options as option}
		<option value={option.part_number}>{option.friendly_name}</option>
	{/each}
</select>
