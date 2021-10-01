<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
        try {
            const { default: module } = await import(`../../src/lib/${page.query.get('component')}.svelte`);

            const props = {};
            page.query.forEach((value, key) => {
                props[key] = value;
            });
            props.component = module;

            return {
                props
            };
        } catch (error) {
            return {
                status: 404,
                error
            };
        }
	}
</script>

<script>
    export let component = null;
</script>

<svelte:component this={component} {...$$restProps} />
