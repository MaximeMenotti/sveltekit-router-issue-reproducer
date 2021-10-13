<script>
  export let title = "WHAT IS GRIT ?"
  export let description = "What is grit, really? It's a word that's been used to describe everything under the sun, but it means something specific: when things get hard, you push harder; when you fail, you get back up stronger; when you don't see results, you don't get discouraged, but you just continue to pound away day, after day, after day, with relentlessness, consistency, heart, and passion -- that's grit."
  export let backgroundUrl = "https://contents.mediadecathlon.com/p1797661/k$3ce222ec9a448c9ec5098b0f4ad6d5b4/FORCLAZ%20SHOOTING%20TREK%20MOUNTAIN%20PEAH20%20HAUTE%20SAVOIE.jpg/1920x0/64cr28?format=auto&quality=40"
</script>

<style global>
    .header:before {
        inset: 0;
        opacity: .6;
        content: '';
        display: block;
        position: absolute;
        background-color: var(--theme-color);
    }

    .header > div {
        min-height: 500px;
    }
</style>

<div class="header vtmn-relative vtmn-overflow-hidden vtmn-bg-center vtmn-bg-cover" style="background-image: url({ backgroundUrl })">
  <div class="vtmn-container vtmn-flex vtmn-items-center vtmn-mx-auto vtmn-py-6 vtmn-flex-col-reverse small-desktop:vtmn-flex-row medium-desktop:vtmn-flex-row large-desktop:vtmn-flex-row">
    <div class="vtmn-z-10 vtmn-w-2/3 vtmn-text-white mobile:vtmn-mx-8 tablet:vtmn-mx-8 vtmn-py-6">
      <h1 class="vtmn-theme_core--dark vtmn-typo_display-2 vtmn-mb-6">{@html title}</h1>
      <h3 class="hb_txt-white">{@html description}</h3>
    </div>
    <div class="vtmn-relative vtmn-w-1/3 vtmn-h-full vtmn-z-10 vtmn-transform vtmn-skew-x-6 vtmn-rounded-xl vtmn-overflow-hidden vtmn-ml-6 mobile:vtmn-w-4/6 tablet:vtmn-w-4/6 mobile:vtmn-m-8 tablet:vtmn-m-8">
      <img src="https://contents.mediadecathlon.com/p1797661/k$3ce222ec9a448c9ec5098b0f4ad6d5b4/FORCLAZ%20SHOOTING%20TREK%20MOUNTAIN%20PEAH20%20HAUTE%20SAVOIE.jpg/960x0/4cr3?format=auto"
           alt="Conçu pour traverser le temps">
    </div>
  </div>
</div>
