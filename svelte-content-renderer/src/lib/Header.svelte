<script>
  export let title = "Conçu pour traverser le temps"
  export let description = "Pas de concession sur la durabilité, c'est inscrit au coeur de notre ADN. Nos produits sont imaginés pour être responsables, résistants et réparables afin de vous suivre en trek le plus longtemps possible.."
</script>

<style global>
    .header {
        min-height: 50vh;
    }

    .image-container:before {
        inset: 0;
        z-index: 1;
        opacity: .6;
        content: '';
        display: block;
        position: absolute;
        background-color: #D09236;
    }
</style>

<div class="header vtmn-relative vtmn-flex vtmn-items-center vtmn-mx-auto vtmn-overflow-hidden">
    <div class="image-container vtmn-absolute vtmn-inset-0">
        <img class="vtmn-absolute vtmn-w-full vtmn-top-1/2 vtmn-left-1/2 vtmn-transform vtmn--translate-y-1/2 vtmn--translate-x-1/2"
             src="https://contents.mediadecathlon.com/p1797661/k$3ce222ec9a448c9ec5098b0f4ad6d5b4/FORCLAZ%20SHOOTING%20TREK%20MOUNTAIN%20PEAH20%20HAUTE%20SAVOIE.jpg/1920x0/64cr28?format=auto&quality=40"
             alt="Conçu pour traverser le temps" />
    </div>

    <div class="vtmn-z-10 vtmn-w-1/2 vtmn-h-5/6 vtmn-absolute vtmn-right-0 vtmn-top-1/2 vtmn--translate-y-1/2 vtmn-origin-top-right vtmn-transform vtmn-skew-x-6 vtmn-overflow-hidden vtmn-rounded-xl">
        <img class="vtmn-absolute"
             src="https://contents.mediadecathlon.com/p1797661/k$3ce222ec9a448c9ec5098b0f4ad6d5b4/FORCLAZ%20SHOOTING%20TREK%20MOUNTAIN%20PEAH20%20HAUTE%20SAVOIE.jpg/960x0/4cr3?format=auto"
             alt="Conçu pour traverser le temps">
    </div>

    <div class="vtmn-container vtmn-relative vtmn-mx-auto vtmn-h-full vtmn-z-10">
        <div class="vtmn-w-1/2 vtmn-text-white">
            <h1 class="vtmn-theme_core--dark vtmn-typo_display-2 vtmn-mb-6">{@html title}</h1>
            <h3 class="hb_txt-white">{@html description}</h3>
        </div>
    </div>
</div>
