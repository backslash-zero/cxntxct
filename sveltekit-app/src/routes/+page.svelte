<script lang="ts">
	import ContactCard from "$lib/components/Contact/ContactCard.svelte";
	import type { Contact } from "$lib/types";
	let contacts : Contact[] = [
		{
			id: 1,
			infos: [
				{ name: "John Doe" },
				{ phone: "1234567890" },
				{ email: "" }
			]
		},
		{
			id: 2,
			infos: [
				{ name: "Jane Doe" },
				{ phone: "0987654321" },
				{ email: "" }
			]
		},
		{
			id : 3,
			infos: [
				{ twitter: "@cele_stin" },
				{ email: "celestin.meunier@gmail.com" }
			]
		},
		{
			id : 4,
			infos: [
				{ "github": "backslash-zero" },
				{ "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }			
			]
		},
	]

</script>
<main class="w-full flex justify-center">
	<div class="w-full max-w-screen-lg h-full font-serif p-4 flex flex-col gap-4 overflow-y-auto">
		{#each contacts as contact (contact.id)}
			<ContactCard {contact} />
		{/each}
	</div>
</main>

