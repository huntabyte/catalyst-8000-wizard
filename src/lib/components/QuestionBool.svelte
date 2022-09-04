<script>
	import InfoModal from '$lib/components/InfoModal.svelte';
	export let question;
	export let note = '';
	export let yesAction;
	export let noAction;
	export let restart;
	export let info = false;
	export let content = '';
</script>

<div class="w-full h-full md:container">
	<div class="flex flex-col justify-center items-center h-full w-full mx-auto lg:px-6">
		<div class="card">
			<div class="card-body items-center text-center px-4 md:px-2">
				{#if info}
					<div class="flex flex-col items-center justify-center text-center">
						<InfoModal {content} />
						<h2 class="text-4xl md:text-5xl font-light leading-tight pt-4">{question}</h2>
					</div>
				{:else}
					<h2 class="text-4xl md:text-5xl font-light leading-tight">{question}</h2>
				{/if}
				<p>{note}</p>
				<div
					class="grid grid-cols-2 items-center justify-center w-full lg:w-5/6 max-w-full pt-4 md:pt-6 gap-4"
				>
					<button
						on:click={yesAction}
						class="btn btn-outline rounded-full w-full grow max-w-full grid-max- btn-md">Yes</button
					>
					<button
						on:click={noAction}
						class="btn btn-outline rounded-full w-full grow max-w-full grid-max- btn-md">No</button
					>
				</div>
			</div>
		</div>
		<div class="w-full md:w-5/6 flex justify-end pt-4">
			<button on:click={restart} class="btn btn-ghost self-end">Start Over</button>
		</div>
	</div>
</div>
