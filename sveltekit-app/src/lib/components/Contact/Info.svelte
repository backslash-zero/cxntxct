<script lang="ts">
	export let key : string;
	export let value : string;
	export let id: number;
	export let length: number;
</script>

<div class={`flex items-baseline w-full text-lg h-auto pt-1 pb-1 ${id < length - 1 ? "border-b" : "border-slate-100"}`}>			
	<span class="w-40 font-mono text-sm text-slate-400">{key}</span>
	{#if key === "phone" }
		<span class="w-full font-mono text-sm">{value}</span>
	{:else if key === "notes" }
		<span class="w-full">{value}</span>
	{:else }
		<span class="w-full">{value}</span>
	{/if}
</div>
