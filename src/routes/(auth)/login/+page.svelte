<script lang="ts">
	import type { PageData } from './$types';
	import LoginForm from './login-form.svelte';

	export let data: PageData;
</script>

<div class="p-3">
	<LoginForm data={data.form} />
</div>
