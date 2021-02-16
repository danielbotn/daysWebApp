<script lang="ts">
  export let boardName: string;
</script>

<div class="justify-self-center">
  {#if boardName}
    <h1 class="font-semibold tracking-wide uppercase text-4xl text-center">
      {boardName}
    </h1>
  {/if}
</div>
