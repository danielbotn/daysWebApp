<script lang="ts">
  import type { IHardcodedStrings } from "../../interfaces/IDatoCms";

  export let datoHardcodedStrings: IHardcodedStrings;
</script>

<div class="flex items-center lg:px-24 px-6">
  <div class="flex-auto">
    <input
      type="text"
      name="create new list"
      placeholder="{datoHardcodedStrings.addNewItem}"
    />
  </div>
  <div>
    <button
      type="button"
      class="border border-blue-500 bg-blue-500 hover:border-blue-300 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline mb-6"
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
