<script>
  import { onMount } from "svelte";

  import Header from "./components/Header.svelte";
  import MessageList from "./components/MessageList.svelte";
  import MessageControls from "./components/MessageControls.svelte";

  onMount(() => {
    console.log("omni web chat has successfully mounted");
  });
</script>

<div class="omni-web-chat">
  <Header />
  <MessageList />
  <MessageControls />
</div>

<style lang="postcss">
  @import "./style.css";

  .omni-web-chat {
    --font-family: "Roboto", sans-serif;
    --header-height: 75px;
    --control-height: 100px;
    --font-size: 16px;

    @apply bg-gray-50 w-full h-full fixed flex flex-col overflow-hidden;

    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    font-family: var(--font-family);
    font-size: var(--font-size);
  }
</style>
