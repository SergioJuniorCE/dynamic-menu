<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="flex min-h-[100dvh] flex-col">
	<slot />
</div>
