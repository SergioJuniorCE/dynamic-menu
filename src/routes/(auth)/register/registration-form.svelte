<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { userRegistrationSchema, type UserRegistrationSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<UserRegistrationSchema>>;

	const form = superForm(data, {
		validators: zodClient(userRegistrationSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance class="flex flex-col">
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Correo</Form.Label>
			<Input {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="password">
		<Form.Control let:attrs>
			<Form.Label>Contraseña</Form.Label>
			<Input {...attrs} bind:value={$formData.password} type="password" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="passwordConfirmation">
		<Form.Control let:attrs>
			<Form.Label>Confirmar contraseña</Form.Label>
			<Input {...attrs} bind:value={$formData.passwordConfirmation} type="password" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<div class="flex flex-col items-center justify-center gap-3">
		<Form.Button class="w-40">Registrar</Form.Button>
		<a href="/login">
			<Button class="w-40" variant="outline">Ya tengo una cuenta</Button>
		</a>
	</div>
</form>
