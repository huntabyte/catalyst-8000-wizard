<script>
	import devices from '$lib/data/devices.json';
	import constants, { specs, performance, scalability } from '$lib/constants.js';

	let results = devices.filter((device) => device.ru == 2);

	let quantity = results.length;
</script>

<div class="w-full h-full pt-8">
	<div class="flex flex-col items-center h-full w-full mx-auto">
		<h1 class="text-5xl font-medium pb-8">Results</h1>
		<div class="card w-11/12 bg-white shadow-xl h-auto pb-8">
			<div class="grid grid-cols-3 divide-x h-48">
				<div class="w-full h-full px-6" />
				{#each results as result}
					<div class="w-full h-full px-6 py-6">
						<div class="flex flex-col h-auto justify-between">
							<div>
								<h1 class="font-medium text-center text-xl">{result.part_number}</h1>
								<p class="text-center text-xs pt-2">{result.description}</p>
							</div>
							<div class="pt-4">
								<img src="img/{result.part_number}.webp" alt=" One" />
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="flex w-full h-12 bg-slate-100 items-center">
				<div class="px-6">
					<h3 class="font-medium">Platform Specifications</h3>
				</div>
			</div>
			{#each Object.entries(specs) as [key, value]}
				<div class="grid grid-cols-3 divide-x h-auto border-b-2 border-b-slate-100">
					<div class="w-full h-full px-6 py-2 text-start text-gray-500">
						{value}
					</div>
					{#each results as result}
						<div class="w-full h-full px-6 py-2 text-center">
							{result['specs'][key]}
						</div>
					{/each}
				</div>
			{/each}
			<div class="flex w-full h-12 bg-slate-100 items-center">
				<div class="px-6">
					<h3 class="font-medium">Performance</h3>
				</div>
			</div>
			{#each Object.entries(performance) as [key, value]}
				<div class="grid grid-cols-3 divide-x h-auto border-b-2 border-b-slate-100">
					<div class="w-full h-full px-6 py-2 text-start text-gray-500">
						{value}
					</div>
					{#each results as result}
						<div class="w-full h-full px-6 py-2 text-center">
							{result['performance'][key]}
						</div>
					{/each}
				</div>
			{/each}
			<div class="flex w-full h-12 bg-slate-100 items-center">
				<div class="px-6">
					<h3 class="font-medium">Scalability</h3>
				</div>
			</div>
			{#each Object.entries(scalability) as [key, value]}
				<div class="grid grid-cols-3 divide-x h-auto border-b-2 border-b-slate-100">
					<div class="w-full h-full px-6 py-2 text-start text-gray-500">
						{value}
					</div>
					{#each results as result}
						<div class="w-full h-full px-6 py-2 text-center">
							{result['scalability'][key]}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
