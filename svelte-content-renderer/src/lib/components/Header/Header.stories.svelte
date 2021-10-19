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
  }}
/>
