<script context="module">
  export async function preload(page) {
    const { id } = page.params;
    const res = await this.fetch(`single/${id}.json`);
    const job = await res.json();
    return { job }
  }

</script>

<script lang="ts">
  export let job;
</script>
<div>
  <p>single list</p>
</div>