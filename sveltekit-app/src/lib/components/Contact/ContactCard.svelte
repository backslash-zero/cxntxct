<script lang="ts">
	import type { Contact } from "$lib/types";
	import type { DrawParams } from "svelte/types/runtime/transition";
	import Info from "./Info.svelte";
	
	// Props
	export let contact : Contact;
	let showDetails = false;

	const getDefaultField = (contact : Contact) : string => {
		return (
				contact.infos.find(info => info.name)?.name 
				|| Object.values(contact.infos[0])[0] 
				|| "undefined"
			)
	}
</script>
<div class="w-full border border-slate-200 rounded-md transition-all duration-300">
	<button class="w-full flex items-center justify-between p-4 pl-6 pr-6 overflow-hidden bg-none" 
		on:click={() => showDetails = !showDetails}>
		<h2 class="text-2xl">
			{getDefaultField(contact)}	
		</h2>
	</button>
	{#if showDetails}
		<main class={`w-full flex flex-col gap-2 border-t border-slate-200 p-4`}>
			{ #each contact.infos as info, i (i) }
				<Info id={i} length={contact.infos.length} value={Object.values(info)[0]} key={Object.keys(info)[0]} />
			{/each}
		</main>
	{/if}
</div>