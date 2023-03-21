<script lang="ts">
	export let name: string;
	export let number: string;
	export let email: string;

	let showDetails = false;

</script>
<div class="w-full border border-slate-200">
	<head>
		<h2>
			{name}	
		</h2>
		<button on:click={() => showDetails = !showDetails}>
			{showDetails ? "Hide" : "Show"}
		</button>
	</head>
	<main>
		{#if showDetails}
			<div class="w-full">
				<p>{number}</p>
				<p>{email}</p>
			</div>
		{/if}
	</main>
</div>