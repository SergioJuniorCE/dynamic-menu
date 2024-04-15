<script lang="ts">
	import type { PageData } from './$types';
	import RegistrationForm from './registration-form.svelte';

	export let data: PageData;
</script>

<div class="p-3">
	<RegistrationForm data={data.form} />
</div>
