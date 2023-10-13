<script>
  import { onMount } from "svelte";

  import { OmniWebChat } from "$lib/index";

  let element;

  onMount(() => {
    OmniWebChat.initialize(element, {
      title: "Your are chatting with Chandler",
      screen: "fullscreen",
    });
  });
</script>

<h1>Welcome to your library project</h1>
<p>
  Create your package using @sveltejs/package and preview/showcase your work
  with SvelteKit
</p>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<div id="omni-web-chat" bind:this={element} />

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
  <style>
    *,
    body,
    html {
      font-family: "Roboto", sans-serif;
    }
  </style>
</svelte:head>
