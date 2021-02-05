<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { userID, hardcodedStrings } from "../../../store";
  import type { IHardcodedStrings } from "../../interfaces/IDatoCms";
  import type { IInfo } from "../../interfaces/IOther";
  const dispatch = createEventDispatcher();

  export let infoModalObject: IInfo;
  let firebaseUID: string = null;
  let datoHardcodedStrings: IHardcodedStrings = null;

  userID.subscribe((value) => {
    if (value !== null) {
      firebaseUID = value;
    }
  });

  hardcodedStrings.subscribe((value: IHardcodedStrings) => {
    if (value !== null) {
      datoHardcodedStrings = value;
    }
  });

  const closeModal = () => {
    dispatch("closeModal");
  };
</script>

<div
  class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
  style="background: rgba(0, 0, 0, 0.7);"
>
  <div
    class="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
  >
    <div class="modal-content py-4 text-left px-6">
      <!--Title-->
      <div class="flex justify-end">
        <div class="modal-close cursor-pointer z-50" on:click="{closeModal}">
          <svg
            class="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            ></path>
          </svg>
        </div>
      </div>
      <!--Body-->
      <div class="my-5">
        <h3 class="text-xl text-gray-700 mb-2 font-bold">
          {datoHardcodedStrings.information}
        </h3>

        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="border-t border-gray-200">
            <dl>
              <div
                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm font-medium text-gray-500">
                  {datoHardcodedStrings.day}
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {infoModalObject.day}
                </dd>
              </div>
              <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  {datoHardcodedStrings.time}
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {infoModalObject.time}
                </dd>
              </div>
              <div
                class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm font-medium text-gray-500">
                  {datoHardcodedStrings.checkedBy}
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {infoModalObject.firstName}
                  {infoModalObject.lastName}
                </dd>
              </div>
              <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  {datoHardcodedStrings.email}
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {infoModalObject.email}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <!--Footer-->
      <div class="flex justify-end pt-2">
        <button
          type="button"
          class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
          on:click="{closeModal}"
        >
          {datoHardcodedStrings.cancel}
        </button>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .animated.faster {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>
