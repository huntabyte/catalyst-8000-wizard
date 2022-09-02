<script>
	export let question = 'Loading...';
	export let note = '';
	export let choices;
	export let restart;
</script>

<div class="w-full h-full">
	<div class="flex flex-col justify-center items-center h-full w-full mx-auto px-6">
		<div class="card w-3/4 bg-white shadow-xl py-12">
			<div class="card-body items-center text-center">
				<h2 class="card-title text-3xl">{question}</h2>
				<p>{note}</p>
				<div class="card-actions justify-end pt-6 gap-4">
					{#each choices as choice}
						<button on:click={() => choice.action(choice.value)} class="btn min-w-full normal-case"
							>{choice.content}</button
						>
					{/each}
				</div>
			</div>
		</div>
		<div class="w-3/4 flex justify-end pt-4">
			<button on:click={restart} class="btn btn-ghost self-end">Start Over</button>
		</div>
	</div>
</div>
