<script lang="ts">
	import type { PageData } from './$types';
	import RestaurantCard from './restaurant-card.svelte';

	export let data: PageData;
</script>

<h1>Restaurantes</h1>

<div class="flex w-full flex-wrap gap-3">
	{#each data.restaurants as restaurant}
		<RestaurantCard {restaurant} />
	{/each}
</div>
