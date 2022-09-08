<script>
	import FaChevronRight from 'svelte-icons/fa/FaChevronRight.svelte';
	export let action;
</script>

<div class="flex flex-col items-center justify-center w-full h-full md:container">
	<div class="flex flex-col items-center justify-center">
		<h1 class="text-5xl md:text-7xl text-center max-w-4xl md:pb-6 leading-tight">
			Welcome to the Catalyst 8000 selection wizard
		</h1>
		<p class="font-thin md:font-normal text-center pt-4 w-5/6 max-w-2xl text-2xl leading-snug">
			This tool will help you identify what Catalyst 8000 device you need by asking you a few quick
			questions about your unique requirements.
		</p>
	</div>
	<button on:click={action} class="btn btn-circle btn-primary btn-lg mt-12">
		<div class="h-8 w-8 text-base-100">
			<FaChevronRight />
		</div>
	</button>
</div>
