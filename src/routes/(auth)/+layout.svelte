<script lang="ts">
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>
<div class="flex items-center justify-center p-3">
    <h1>Dynamic Menu</h1>
</div>
<slot />