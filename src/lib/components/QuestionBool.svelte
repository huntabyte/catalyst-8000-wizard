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

<div class="w-full h-full">
	<div class="flex flex-col justify-center items-center h-full w-full mx-auto px-6">
		<div class="card w-3/4 bg-white shadow-xl py-12">
			<div class="card-body items-center text-center">
				{#if info}
					<div class="flex center">
						<h2 class="card-title text-3xl pr-2">{question}</h2>
						<InfoModal {content} />
					</div>
				{:else}
					<h2 class="card-title text-3xl">{question}</h2>
				{/if}
				<p>{note}</p>
				<div class="card-actions justify-end pt-6 gap-4">
					<button on:click={yesAction} class="btn btn-success w-24">Yes</button>
					<button on:click={noAction} class="btn btn-error w-24">No</button>
				</div>
			</div>
		</div>
		<div class="w-3/4 flex justify-end pt-4">
			<button on:click={restart} class="btn btn-ghost self-end">Start Over</button>
		</div>
	</div>
</div>
