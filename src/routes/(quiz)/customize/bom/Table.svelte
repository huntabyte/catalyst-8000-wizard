<script>
	export let headings = ['Part Number', 'Description', 'Service Duration', 'Quantity'];
	import { deviceConfig } from '$lib/stores';

	let data = [
		['C8200-1N-4T', 'Catalyst 8200', '', 1],
		['CON-SNT-C8200TL1', '36 months of service blah', 36, 1],
		['MEM-8200-4GB', 'Memory 4GB', '', 1],
		['C-RFID-1R', 'RFID for Catalyst 8000', '', 1]
	];
</script>

<div class="overflow-x-auto">
	<table class="table table-normal w-full">
		<thead>
			<tr>
				{#each headings as heading, index (index)}
					<th>{heading}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as row}
				<tr>
					{#each row as item}
						<td>{item}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
