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

  export let title = data?.title
  export let metaDescription = data?.meta_description
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={metaDescription}>
</svelte:head>

<Content data={data} />
