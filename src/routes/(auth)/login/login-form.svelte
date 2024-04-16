<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { cn } from '$lib/utils';
	import { toast } from 'svelte-sonner';
	import { userLoginSchema, type UserLoginSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<UserLoginSchema>>;

	const form = superForm(data, {
		validators: zodClient(userLoginSchema),
		onResult(event) {
			if (event.result.type === 'success') {
				alert(1)
			}
			if (event.result.type === 'failure') {
				const errors = event.result.data?.form.errors;
				if (errors?.email) {
					toast.error(errors.email)
				}
			}
			console.log(event)
		},
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
	<div class="flex flex-col items-center justify-center gap-3">
		<Form.Button class="w-40">Iniciar sesión</Form.Button>
		<a href="/register" class={cn('w-40', buttonVariants({ variant: 'outline' }))}>
			No tiene una cuenta? Registrese aquí
		</a>
	</div>
</form>
