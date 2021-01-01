<style>
  i {
    font-size: 100px;
    line-height: 200px;
    margin-left:-15px;
    padding-left: 60px;
    @apply text-green-500
  }
  .card {
    background: white;
    padding: 60px;
    border-radius: 4px;
    box-shadow: 0 2px 3px #C8D0D8;
    display: inline-block;
    margin: 0 auto;
  }
</style>

<script lang="ts">
  export let email: string;
</script>

<div class="bg-grey-lighter min-h-screen flex flex-col">
  <div class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center text-green-500">Success</h1>
          <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
            <i class="checkmark">✓</i>
          </div>
          <div class="text-center text-sm text-blue-500 mt-4">
            <p>Thank you for signing up with Days</p>
            <p class="no-underline border-b border-grey-dark text-grey-dark">
                Please check your email to confirm registration <br />
            </p>
            {#if email}
             @ {email}
            {/if}
        </div>
      </div>
  </div>
</div>
