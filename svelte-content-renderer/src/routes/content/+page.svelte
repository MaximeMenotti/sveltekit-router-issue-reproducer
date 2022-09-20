<script lang="ts">
  let showContent = false;

  function handleClick() {
    showContent = !showContent;
  }
</script>

<div class="container">
  <h1>My Svelte content with interaction</h1>
  <button on:click={handleClick}>show hidden content</button>
  <div 
    class:hidden={!showContent}
    class:visible={showContent}>
    I was hidden
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .hidden {
    visibility: hidden;
  }
  
  .visible {
    visibility: visible;
  }
</style>