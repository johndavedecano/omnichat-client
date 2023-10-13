<script>
  import store from "./../store.js";

  const items = Array.from(new Array(100));
</script>

<div class="omni-message-list">
  <div class="omni-message-items">
    {#each items as item}
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          convallis consectetur commodo. Mauris eget cursus eros, eget placerat
          erat. Duis tortor ipsum, condimentum id lectus porta, semper lobortis
          turpis. Quisque dapibus lacus ut viverra fringilla. Donec iaculis
          molestie turpis sit amet sodales.
        </p>
      </div>
    {/each}
  </div>
</div>

<style>
  .omni-message-list {
    height: calc(100vh - var(--control-height) - var(--header-height));
    max-height: calc(100vh - var(--control-height) - var(--header-height));
    @apply bg-gray-100 overflow-y-auto overflow-x-hidden;
    scroll-behavior: smooth;
  }

  .omni-message-list::-webkit-scrollbar {
    width: 10px;
  }

  .omni-message-list::-webkit-scrollbar-track {
    @apply bg-purple-200;
  }

  .omni-message-list::-webkit-scrollbar-thumb {
    @apply rounded-sm border-solid border-purple-900 bg-purple-900;
  }

  .omni-message-items {
    @apply px-4;
  }
</style>
