<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Header from "./Header.svelte";
  import '@vtmn/css/dist/index.css';
</script>

<Meta
  title="Components/Header"
  component={Header}
  argTypes={{
    title: { control: "text" },
    description: { control: "text" },
    backgroundUrl: { control: "text" },
  }}
/>

<Template let:args>
  <Header {...args} />
</Template>

<Story
  name="Default"
  args={{
    title: "What is grit ?",
    description: "What is grit, really? It's a word that's been used to describe everything under the sun, but it means something specific: when things get hard, you push harder; when you fail, you get back up stronger; when you don't see results, you don't get discouraged, but you just continue to pound away day, after day, after day, with relentlessness, consistency, heart, and passion -- that's grit.",
    backgroundUrl: "https://contents.mediadecathlon.com/p1797661/k$3ce222ec9a448c9ec5098b0f4ad6d5b4/FORCLAZ%20SHOOTING%20TREK%20MOUNTAIN%20PEAH20%20HAUTE%20SAVOIE.jpg/1920x0/64cr28?format=auto&quality=40",
  }}
/>
