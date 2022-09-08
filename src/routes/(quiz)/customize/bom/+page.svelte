<script>
	import { deviceConfig, bom } from '$lib/stores';
	import Table from './Table.svelte';
	import XLSX from 'xlsx';
	const exportBOM = async () => {
		const table = document.getElementById('bom-table');
		const wb = XLSX.utils.table_to_book(table);

		XLSX.writeFile(wb, 'C8000_BOM.xlsx');
	};
</script>

<div class="h-full w-full md:container mx-auto">
	<div class="flex justify-center items-center">
		<div class="card w-full bg-slate-700 shadow-xl mt-4 px-6 pb-6">
			<div class="flex w-full justify-between items-center">
				<h1 class="font-medium text-2xl pt-6 pb-3">Bill of Materials</h1>
				<div>
					<a href="/" class="btn btn-primary btn-sm">Start Over</a>
					<button on:click={exportBOM} class="btn btn-success  btn-sm">Export</button>
				</div>
			</div>
			<div class="divider" />
			<Table data={$bom} />
		</div>
	</div>
</div>
