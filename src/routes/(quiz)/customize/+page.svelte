<script>
	import { deviceConfig, bom } from '$lib/stores';
	import { DeviceRepo } from '$lib/repos/devices';
	import SelectInput from './SelectInput.svelte';
	import { generateBOM } from '$lib/repos/bomTemplates';
	import { goto } from '$app/navigation';

	const deviceRepo = new DeviceRepo();

	function getPageData() {
		return deviceRepo.getDeviceData($deviceConfig.device.partNumber);
	}

	const handleBuild = async () => {
		$deviceConfig.device.description = await deviceRepo.getDeviceDescription(
			$deviceConfig.device.partNumber
		);
		$deviceConfig.memory.description = await deviceRepo.getItemDescription(
			$deviceConfig.memory.partNumber
		);

		if ($deviceConfig.nimOne.partNumber) {
			$deviceConfig.nimOne.description = await deviceRepo.getItemDescription(
				$deviceConfig.nimOne.partNumber
			);
		}

		if ($deviceConfig.nimTwo.partNumber) {
			$deviceConfig.nimTwo.description = await deviceRepo.getItemDescription(
				$deviceConfig.nimTwo.partNumber
			);
		}
		if ($deviceConfig.pim.partNumber) {
			$deviceConfig.pim.description = await deviceRepo.getItemDescription(
				$deviceConfig.pim.partNumber
			);
		}
		$deviceConfig.powerCable.description = await deviceRepo.getItemDescription(
			$deviceConfig.powerCable.partNumber
		);

		console.log($deviceConfig);
		let bomData = generateBOM($deviceConfig);
		$bom = bomData;
		goto('/customize/bom');
	};
</script>

<div class="h-full w-full md:container mx-auto">
	<div class="flex justify-center items-center">
		<div class="card w-full bg-slate-700 shadow-xl mt-4 px-6 pb-6">
			<h1 class="font-medium text-2xl pt-6 pb-3">
				Customize Device - {$deviceConfig.device.partNumber}
			</h1>
			<div class="divider" />
			{#await getPageData()}Loading...
			{:then { device, networkModules, powerCables, memory, pluggableModules }}
				<div class="form-control w-full max-w-sm space-y-2">
					{#if device.nim_slots > 0}
						<SelectInput
							label={'Network Module'}
							options={networkModules}
							none={true}
							bind:value={$deviceConfig.nimOne.partNumber}
						/>
					{/if}
					{#if device.nim_slots > 1}
						<SelectInput
							label={'Network Module (Slot 2)'}
							options={networkModules}
							none={true}
							bind:value={$deviceConfig.nimTwo.partNumber}
						/>
					{/if}
					{#if device.pim_slots > 0}
						<SelectInput
							label={'Pluggable Module'}
							options={pluggableModules}
							none={true}
							bind:value={$deviceConfig.pim.partNumber}
						/>
					{/if}
					<SelectInput
						label={'Power Cable'}
						options={powerCables}
						bind:value={$deviceConfig.powerCable.partNumber}
					/>
					<SelectInput
						label={'Memory'}
						options={memory}
						bind:value={$deviceConfig.memory.partNumber}
					/>
				</div>
				<div class="form-control w-full max-w-sm space-y-2">
					<button on:click={handleBuild} class="btn btn-primary mt-6">Generate BOM</button>
				</div>
			{/await}
		</div>
	</div>
</div>
