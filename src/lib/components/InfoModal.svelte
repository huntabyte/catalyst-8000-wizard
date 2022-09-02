<script>
	import FaInfoCircle from 'svelte-icons/fa/FaInfoCircle.svelte';
	export let content = 'Loading...';
</script>

<!-- The button to open modal -->
<label for="my-modal-4" class="h-5 w-5 text-info cursor-pointer">
	<FaInfoCircle />
</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-4" class="modal-toggle" />
<label for="my-modal-4" class="modal modal-bottom sm:modal-middle cursor-pointer">
	<label class="modal-box relative" for="">
		<label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<h3 class="font-bold text-lg">Additional Information</h3>
		<p class="py-4">
			{content}
		</p>
	</label>
</label>
