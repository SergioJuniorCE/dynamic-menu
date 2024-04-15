<script lang="ts">
	import type { LayoutData } from './$types';
	import BottomNav from '$lib/components/bottom-nav.svelte';
	import { checkIfMobile } from '$lib/utils';
	import { onMount } from 'svelte';

	export let data: LayoutData;

	let isMobile = true;

	onMount(() => {
		isMobile = checkIfMobile();
	});
</script>

<div class="mb-24">
	<slot />
	{#if isMobile}
		<BottomNav />
	{/if}
</div>
