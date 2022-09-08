<script>
	export let headings = [
		'Part Number',
		'Description',
		'Duration (Mnths)',
		'Initial Term(Months)',
		'Quantity',
		'Auto Renew Term(Months)'
	];

	export let data = [];
</script>

<div class="overflow-x-auto">
	<table id="bom-table" class="table table-compact w-full">
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
