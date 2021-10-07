<script context="module">
  export const load = async ({ fetch, page }) => {
    const { id } = page.params;

    const res = await fetch(`../content-api/${id}`)
    const data = await res.json()

    return {
      props: { data }
    }
  }
</script>

<script>
  import '@vtmn/css/dist/index.css';
  import Content from "$lib/Content.svelte";
  export let data;
</script>

<Content data={data} />
