<script>
	import {onMount} from "svelte";

    let content = ""

    onMount(async () => {
      const res = await fetch(`http://localhost:3000/fragment?component=Header`)

      content = await res.text()
      console.log(res.body)
      const body = content
    });
</script>

<style>
    h1 {
        color: #1a2a34;
    }
</style>

<h1>Hello</h1>
<div id="sphere-content"> {@html content} </div>
