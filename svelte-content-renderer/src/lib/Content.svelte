<script>
    import Brick from "$lib/Brick.svelte";

    export let data = {
      brick_list: []
    }

    let displayAll = false;
</script>

{#each data.brick_list as brick}
    <Brick brick={brick} displayAll={displayAll} />
{/each}
<button class="vtmn-btn" on:click={() => displayAll = !displayAll}>{displayAll ? 'Hide all empty brick' : 'Display all bricks'}</button>
