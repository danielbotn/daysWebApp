<script lang="ts">
  import { createLoggerField } from "../../helpers/api/firebase";
  import type { IHardcodedStrings } from "../../interfaces/IDatoCms";

  export let datoHardcodedStrings: IHardcodedStrings;
  export let userId: string;
  export let listId: string;

  let item: string = '';

  const addNewItem = () => {
    if (item) {
      createLoggerField(userId, listId, item);
      item = '';
    }
  }
</script>

<div class="flex items-center lg:px-24 px-6">
  <div class="flex-auto">
    <input
      type="text"
      name="add new item"
      placeholder="{datoHardcodedStrings.addNewItem}"
      bind:value="{item}"
    />
  </div>
  <div>
    <button
      type="button"
      class={`border border-blue-500 bg-blue-500 
      hover:border-blue-300 text-white rounded-md
      px-4 py-2 m-2 transition duration-500 ease select-none 
      hover:bg-blue-300 focus:outline-none focus:shadow-outline mb-6`}
      on:click={() => addNewItem()}
    >
      {datoHardcodedStrings.add}
    </button>
  </div>
</div>

<style lang="postcss">
  input {
    @apply block border border-gray-200 w-full p-3 rounded mb-4;
  }
</style>
