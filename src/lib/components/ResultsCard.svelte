<script>
	import { specs, performance, scalability } from '$lib/constants.js';
	import { device } from '$lib/stores.js';

	function updateDevice(selection) {
		device.update((device) => selection);
	}

	export let results;
	export let restart;
</script>

<div class="w-full h-full pt-6 md:container md:pt-8 md:mx-auto mb-4">
	<div class="flex flex-col items-center h-auto w-full md:mx-auto">
		<div class="flex w-full md:px-2 justify-between">
			<div class="pb-4">
				<h1 class="text-4xl font-medium pb-2">Results</h1>
				<p class="w-full text-sm md:text-base italic">
					Based on the questions you answered, here's what we recommend.
				</p>
			</div>
			<button on:click={restart} class="btn btn-primary btn-sm md:btn-md ml-6">Start Over</button>
		</div>
		<div class="md:card h-auto pb-8 md:pb-8 px-0">
			<div class="grid grid-cols-3 divide-x divide-slate-700">
				<div class="w-full md:px-2" />
				{#each results as result}
					<div class="w-full md:px-4 py-6 md:pb-2">
						<div class="flex flex-col h-auto justify-between">
							<div>
								<h1 class="font-semibold text-center text-sm sm:text-xl">{result.part_number}</h1>
								<p class="text-center hidden md:block md:text-xs lg:text-sm pt-2">
									{result.description}
								</p>
							</div>
							<div class="hidden md:pt-4 lg:inline-block mb-2 pb-2">
								<img src="img/{result.part_number}.webp" alt="Recommended device" />
							</div>
							<a
								href="/customize"
								on:click={updateDevice(result)}
								class="btn btn-success btn-ghost text-success"
							>
								Customize and Build
							</a>
						</div>
					</div>
				{/each}
			</div>
			<div class="flex w-full h-8 md:h-12 bg-slate-600 items-center">
				<div class="px-3 md:px-4">
					<h3 class="font-semibold text-sm md:text-base">Platform Specifications</h3>
				</div>
			</div>
			{#each Object.entries(specs) as [key, value]}
				<div
					class="grid grid-cols-3 divide-x divide-slate-700 h-auto border-b-2 border-b-slate-700"
				>
					<div
						class="flex items-center w-full h-full px-3 py-1 md:px-4 md:py-2 text-start text-sm md:text-base text-neutral "
					>
						{value}
					</div>
					{#each results as result}
						<div
							class="flex justify-center items-center w-full h-full md:px-4 md:py-2 text-center text-sm md:text-base"
						>
							{result['specs'][key]}
						</div>
					{/each}
				</div>
			{/each}
			<div class="flex w-full h-8 md:h-12 bg-slate-600 items-center mt-4 md:mt-8">
				<div class="px-3 md:px-4">
					<h3 class="font-semibold text-sm md:text-base">Performance</h3>
				</div>
			</div>
			{#each Object.entries(performance) as [key, value]}
				<div
					class="grid grid-cols-3 divide-x divide-slate-700 h-auto border-b-2 border-b-slate-700"
				>
					<div
						class="flex items-center w-full h-full px-3 py-1 md:px-4 md:py-2 text-start text-sm md:text-base text-neutral"
					>
						{value}
					</div>
					{#each results as result}
						<div
							class="flex justify-center items-center w-full h-full md:px-4 md:py-2 text-center text-sm md:text-base"
						>
							{result['performance'][key]}
						</div>
					{/each}
				</div>
			{/each}
			<div class="flex w-full h-8 md:h-12 bg-slate-600 items-center mt-4 md:mt-8">
				<div class="px-3 md:px-4">
					<h3 class="font-semibold text-sm md:text-base">Scalability</h3>
				</div>
			</div>
			{#each Object.entries(scalability) as [key, value]}
				<div
					class="grid grid-cols-3 divide-x divide-slate-700 h-auto border-b-2 border-b-slate-700"
				>
					<div
						class="flex items-center w-full h-full px-3 py-1 md:px-4 md:py-2 text-start text-sm md:text-base text-neutral"
					>
						{value}
					</div>
					{#each results as result}
						<div
							class="flex justify-center items-center w-full h-full md:px-4 md:py-2 text-center text-sm md:text-base"
						>
							{result['scalability'][key]}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
