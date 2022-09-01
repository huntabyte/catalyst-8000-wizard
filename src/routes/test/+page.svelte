<script>
	export let question;
	export let note = '';
	export let yesAction;
	export let noAction;
</script>

<div class="w-full h-full">
	<div class="flex flex-col justify-center items-center h-full w-full mx-auto px-6">
		<div class="card w-1/2 bg-neutral text-neutral-content shadow-xl py-12">
			<div class="card-body items-center text-center">
				<h2 class="card-title text-3xl">{question}</h2>
				<p>{note}</p>
				<div class="card-actions justify-end pt-6 gap-4">
					<button on:click={() => yesAction} class="btn btn-success w-24">Yes</button>
					<button on:click={() => noAction} class="btn btn-error w-24">No</button>
				</div>
			</div>
		</div>
	</div>
</div>
