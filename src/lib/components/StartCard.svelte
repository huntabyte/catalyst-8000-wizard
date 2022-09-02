<script>
	export let action;
</script>

<div class="card w-3/4 bg-white shadow-xl h-auto py-12 px-4">
	<div class="flex flex-col items-center justify-center w-full">
		<h1 class="text-3xl text-center font-bold">Catalyst 8000 Series Selection Wizard</h1>
		<p class="text-center pt-4 w-5/6 max-w-6xl text-xl">
			This tool will help you identify what Catalyst 8000 device you need by asking you a few quick
			questions about your unique requirements.
		</p>
		<p class="text-center pt-2 w-5/6 max-w-6xl text-xl italic text-gray-400">
			This should only take a few seconds.
		</p>
		<button on:click={action} class="btn btn-primary mt-8"> Get Started </button>
	</div>
</div>
