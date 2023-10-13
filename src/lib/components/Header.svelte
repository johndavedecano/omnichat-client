<script>
  import store from "./../store.js";
  import Avatar from "svelte-avatar";
  import { IconArrowsDiagonalMinimize, IconX } from "@tabler/icons-svelte";
</script>

<div class="omni-header">
  <div class="omni-title-icon">
    <Avatar
      name="John Walker"
      src="https://avatars0.githubusercontent.com/u/6810985?s=460&u=a2a24f33ad8d17377cef8163f596a7fbd1501cd4&v=4"
    />
  </div>
  <div class="omni-header-title">
    {$store.title}
  </div>

  <button title="minimize">
    <IconArrowsDiagonalMinimize />
  </button>

  <button class="omni-end-btn" title="End Chat">
    <IconX /> <span> End Chat </span>
  </button>
</div>

<style lang="postcss">
  .omni-header {
    min-height: var(--header-height);
    @apply bg-purple-950 flex items-center px-4 gap-4;
  }

  .omni-header-title {
    @apply text-white font-normal text-lg flex-1 overflow-hidden text-ellipsis whitespace-nowrap;
  }

  button.omni-end-btn {
    @apply bg-pink-500 text-white overflow-hidden text-ellipsis whitespace-nowrap;
  }

  button.omni-end-btn > span {
    @apply hidden md:inline;
  }

  button {
    @apply bg-transparent border-none rounded-sm inline-flex p-2 text-white items-center gap-2 cursor-pointer;
  }
</style>
