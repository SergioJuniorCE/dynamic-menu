<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import type { PageData } from './$types';
	import Footer from './footer.svelte';
	import Navbar from './navbar.svelte';

	export let data: PageData;
</script>

<Navbar user={data.user} />
<main class="flex-1">
	<section class="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-40">
		<div class="container grid items-center gap-6 px-4 text-center md:px-6 lg:gap-12">
			<div class="space-y-3">
				<h1
					class="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none lg:text-7xl/none"
				>
					Dynamic Menu
				</h1>
				<p
					class="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					Gestiona fácilmente el menú de tu restaurante. Menús bellamente diseñados que puedes user
					directamente.
				</p>
				<p>Accesibles. Personalizables. Open Source.</p>
			</div>
			<div class="mx-auto w-full max-w-md space-y-4">
				<form class="flex flex-col gap-2 min-[350px]:flex-row sm:gap-4">
					<Input placeholder="Ingresa tu correo" type="email" />
					<Button
						class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						type="submit"
					>
						Registrate
					</Button>
				</form>
				<p class="text-xs text-gray-500 dark:text-gray-400">
					Regístrese para recibir una notificación cuando lo lancemos.
					<a class="underline underline-offset-2" href="/"> Terms &amp; Conditions </a>
				</p>
			</div>
		</div>
	</section>
	<section class="mt-12 w-full border-t py-12 md:py-24 lg:py-32">
		<div class="container grid items-center gap-6 px-4 text-center md:px-6 lg:gap-12">
			<div class="space-y-3">
				<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
				<p
					class="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					The platform for rapid progress. Let your team focus on shipping features instead of
					managing infrastructure with automated CI/CD, built-in testing, and integrated
					collaboration.
				</p>
			</div>
			<div
				class="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3"
			>
				<div class="grid gap-1">
					<h3 class="text-lg font-bold">Infinite scalability, zero config</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Enable code to run on-demand without needing to manage your own infrastructure or
						upgrade hardware.
					</p>
				</div>
				<div class="grid gap-1">
					<h3 class="text-lg font-bold">Real-time insights and controls</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Get granular, first-party, real-user metrics on site performance per deployment.
					</p>
				</div>
				<div class="grid gap-1">
					<h3 class="text-lg font-bold">Personalization at the edge</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Deliver dynamic, personalized content, while ensuring users only see the best version of
						your site.
					</p>
				</div>
				<div class="grid gap-1">
					<h3 class="text-lg font-bold">Real-time insights and controls</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Get granular, first-party, real-user metrics on site performance per deployment.
					</p>
				</div>
				<div class="grid gap-1">
					<h3 class="text-lg font-bold">Personalization at the edge</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Deliver dynamic, personalized content, while ensuring users only see the best version of
						your site.
					</p>
				</div>
				<div class="grid gap-1">
					<h3 class="text-lg font-bold">Infinite scalability, zero config</h3>
					<p class="text-sm text-gray-500 dark:text-gray-400">
						Enable code to run on-demand without needing to manage your own infrastructure or
						upgrade hardware.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="w-full border-t py-12 md:py-24 lg:py-32">
		<div class="container grid items-center gap-6 px-4 text-center md:px-6 lg:gap-12">
			<div class="space-y-3">
				<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
					Experience the workflow the best frontend teams love.
				</h2>
				<p
					class="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					Let your team focus on shipping features instead of managing infrastructure with automated
					CI/CD.
				</p>
			</div>
			<div class="mx-auto w-full max-w-sm space-y-2">
				<form class="flex space-x-2">
					<input
						class="flex h-10 w-full max-w-lg flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						placeholder="Enter your email"
						type="email"
					/>
					<button
						class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						type="submit"
					>
						Sign Up
					</button>
				</form>
				<p class="text-xs text-gray-500 dark:text-gray-400">
					Sign up to get notified when we launch.
					<a class="underline underline-offset-2" href="/"> Terms &amp; Conditions </a>
				</p>
			</div>
		</div>
	</section>
</main>
<Footer />
