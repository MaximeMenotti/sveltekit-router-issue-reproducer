<script>
	import {onMount} from "svelte";

    let content = ""

    onMount(async () => {
      const res = await fetch(`http://localhost:3000/api/render`)

      content = await res.text()
    });
</script>

<svelte:head>
    <link rel="stylesheet" href="http://localhost:3000/sphere-content.css" />
    <script src="http://localhost:3000/sphere-content.js" defer />
</svelte:head>

<h1>Hello</h1>
<div id="sphere-content"> {@html content} </div>
