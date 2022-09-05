<script>
	export let label;
	export let options = ['1', '2', '3', '4', '5', '6'];
	export let placeholder = 'placeholder';
</script>

<label class="label" for="">
	<span class="label-text text-lg">{label}</span>
</label>
<select class="select select-primary select-bordered">
	<option disabled selected>{placeholder}</option>
	{#each options as option}
		<option>Star Trek</option>
	{/each}
</select>
