<script context="module">
  export async function preload(page) {
    const { id } = page.params;
    return { id }
  }

</script>

<script lang="ts">
  export let job;
</script>
<div>
  <p>single list</p>
</div>