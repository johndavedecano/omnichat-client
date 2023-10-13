<script>
  import { onMount } from "svelte";
  import { IconSend, IconAdjustmentsHorizontal } from "@tabler/icons-svelte";
  import store from "./../store.js";

  onMount(() => {
    console.log("omni web chat has successfully mounted");
  });
</script>

<div class="omni-controls">
  <div class="omni-prepends">
    <button class="omni-icon-send">
      <IconAdjustmentsHorizontal />
    </button>
  </div>
  <div class="omni-text-input">
    <textarea placeholder={$store.placeholder} />
  </div>
  <div class="omni-appends">
    <button class="omni-icon-send">
      <IconSend />
    </button>
  </div>
</div>

<style>
  .omni-controls {
    min-height: var(--control-height);
    @apply bg-gray-50 flex items-center flex items-stretch;
  }

  .omni-text-input {
    @apply flex items-start flex-1 border-solid border-transparent border-2;
  }

  .omni-text-input:focus-within {
    @apply border-purple-900;
  }

  .omni-text-input textarea {
    resize: none;
    @apply border-none bg-transparent w-full p-4;
  }

  .omni-text-input textarea:focus,
  .omni-text-input textarea:focus-visible {
    outline: none;
  }

  .omni-prepends {
    @apply flex items-center;
  }

  .omni-appends {
    @apply flex items-center;
  }

  button {
    @apply border-none bg-transparent cursor-pointer text-purple-950 inline-flex items-center justify-center;
    height: 60px;
    width: 60px;
  }
</style>
