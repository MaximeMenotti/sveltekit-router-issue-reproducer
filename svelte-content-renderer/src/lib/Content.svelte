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
<div class="vtmn-fixed vtmn-right-0 vtmn-bottom-0 vtmn-m-6">
    <button class="vtmn-btn" on:click={() => displayAll = !displayAll}>{displayAll ? 'Hide all empty brick' : 'Display all bricks'}</button>
</div>
