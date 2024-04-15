<script lang="ts">
	import type { PageData } from './$types';
	import RestaurantCard from './restaurant-card.svelte';

	export let data: PageData;

	const restaurants = [
		{
			name: 'Restaurante 1',
			description: 'Descripción del restaurante 1'
		},
		{
			name: 'Restaurante 2',
			description: 'Descripción del restaurante 2'
		},
        {
            name: 'Restaurante 3',
            description: 'Descripción del restaurante 3'
        }
	];
</script>

<h1>Restaurantes</h1>

<div class="flex w-full flex-wrap gap-3">
	{#each restaurants as restaurant}
		<RestaurantCard name={restaurant.name} description={restaurant.description} />
	{/each}
</div>
