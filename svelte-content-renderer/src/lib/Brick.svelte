<script>
    import Header from "$lib/Header.svelte";

    export let brick
    export let displayAll = false;
</script>

{#if brick.technical_title === "block_header"}
    <Header title={brick.brick_title} description={brick.descriptions.pop()} />
{:else}
    <p class:vtmn-hidden={!displayAll}>Unknown brick type: "{brick.technical_title}"</p>
{/if}
