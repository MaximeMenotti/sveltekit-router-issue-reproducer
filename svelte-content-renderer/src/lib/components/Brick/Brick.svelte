<script lang="ts">
    import Header from "$lib/components/Header/Header.svelte";
    import type { Brick } from "$lib/components/Brick/Brick.ts";

    export let brick: Brick
    export let displayAll = false;
</script>

{#if brick.technicalTitle === "block_header"}
    <Header title={brick.brickTitle} description={brick.descriptions.pop()} />
{:else}
    <p class:vtmn-hidden={!displayAll}>Unknown brick type: "{brick.technicalTitle}"</p>
{/if}
