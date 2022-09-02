<script>
	import devices from '$lib/data/devices.json';
	let results = devices.filter((device) => device.ru == 2);

	let quantity = results.length;
</script>

<div class="w-full h-full pt-8">
	<div class="flex flex-col items-center h-full w-full mx-auto">
		<h1 class="text-5xl font-medium pb-8">Results</h1>
		<div class="card w-11/12 bg-white shadow-xl min-h-max h-full">
			<div class="grid grid-cols-3 divide-x h-48">
				<div class="w-full h-full px-6" />
				<div class="w-full h-full px-6 py-6">
					<div class="flex flex-col h-auto justify-between">
						<div>
							<h1 class="font-medium text-center text-xl">C8300-1N1S-4T2X</h1>
							<p class="text-center">Description of device will go here</p>
						</div>
						<div class="pt-4">
							<img src="img/C8300-1N1S-4T2X.webp" alt=" One" />
						</div>
					</div>
				</div>
				<div class="w-full h-full px-6 py-6">
					<div class="flex flex-col h-auto justify-between">
						<div>
							<h1 class="font-medium text-center text-xl">C8300-2N2S-4T2X</h1>
							<p class="text-center">Description of device will go here</p>
						</div>
						<div class="pt-4">
							<img src="img/C8300-2N2S-4T2X.webp" alt=" One" />
						</div>
					</div>
				</div>
			</div>
			<div class="flex w-full h-12 bg-slate-100 items-center">
				<div class="px-6">
					<h3 class="font-medium">Features</h3>
				</div>
			</div>
			<div class="grid grid-cols-3 divide-x h-auto border-b-2 border-b-slate-100">
				<div class="w-full h-full px-6 py-6 text-start text-gray-500">CPU Architecture</div>
				<div class="w-full h-full px-6 py-6 text-center">Free</div>
				<div class="w-full h-full px-6 py-6 text-center">Free</div>
			</div>
		</div>
	</div>
</div>
