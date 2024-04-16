<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { SelectRestaurant } from '$lib/db/schema';
	import { cn } from '$lib/utils';

	export let restaurant: SelectRestaurant;

	export let className: string = '';
</script>

<a href="/restaurants/{restaurant.id}">
	<Card.Root class={cn(className)}>
		<Card.Header>
			<Card.Title>{restaurant.name}</Card.Title>
			<Card.Description>{restaurant.description}</Card.Description>
		</Card.Header>
	</Card.Root>
</a>
