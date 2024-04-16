<script lang="ts">
	import Logo from '$lib/components/logo.svelte';
	import type { User } from 'lucia';
	export let user: User | null;
</script>

<header class="flex h-14 items-center px-4 lg:px-6">
	<a class="flex items-center justify-center" href="/">
		<Logo />
		<span class="sr-only">Dynamic Menu</span>
	</a>
	<nav class="ml-auto flex gap-4 sm:gap-6">
		{#if user}
			<a class="text-sm font-medium underline-offset-4 hover:underline" href="/restaurants">
				Mis restaurantes
			</a>
		{:else}
			<a class="text-sm font-medium underline-offset-4 hover:underline" href="/"> Features </a>
			<a class="text-sm font-medium underline-offset-4 hover:underline" href="/"> Pricing </a>
			<a class="text-sm font-medium underline-offset-4 hover:underline" href="/"> About </a>
			<a class="text-sm font-medium underline-offset-4 hover:underline" href="/"> Contact </a>
			<a class="text-sm font-medium underline-offset-4 hover:underline" href="/register">
				Register
			</a>
			<a class="text-sm font-medium underline-offset-4 hover:underline" href="/login"> Login </a>
		{/if}
	</nav>
</header>
