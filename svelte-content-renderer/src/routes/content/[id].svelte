<script context="module">
  export const load = async ({ fetch, page }) => {
    const { id } = page.params;
    const color = page.query.get('color') || '007DBC'

    const res = await fetch(`../content-api/${id}`)
    const data = await res.json()

    return {
      props: { data, color }
    }
  }
</script>

<script>
  import '@vtmn/css/dist/index.css';
  import Content from "$lib/components/Content.svelte";

  export let color;
  export let data;
</script>

<div style="--theme-color: {color}">
  <Content data={data}/>
</div>
