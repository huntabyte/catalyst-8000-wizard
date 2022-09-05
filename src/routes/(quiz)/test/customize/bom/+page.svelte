<script>
	import { deviceConfig } from '$lib/stores';
	import Table from '$lib/components/Table.svelte';

	console.log($deviceConfig);
</script>

<div class="h-full w-full md:container md:mx-auto">
	<div class="flex justify-center items-center">
		<div class="w-5/6 card bg-slate-700 shadow-xl mt-4 px-6 pb-6">
			<div class="flex justify-between items-center pt-6 pb-3">
				<h1 class="font-medium text-xl">Bill of Materials</h1>
				<button class="btn btn-primary btn-sm"> Export </button>
			</div>
			<div class="divider p-0 m-0 mb-3" />
			<Table />
		</div>
	</div>
</div>
