<script lang="ts">
	import NavBar from "$lib/components/nav/NavBar.svelte";
  import "../app.css";
</script>

<div class="w-full">
  <NavBar/>
  <slot />
</div>