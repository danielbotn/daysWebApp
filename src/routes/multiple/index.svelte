<script context="module">
  export function preload(page) {
    return { id: page.params.id };
  }
</script>

<script lang="ts">
  import MultipleCalendar from '../../components/MultipleCalendar/MultipleCalendar.svelte';
  import { userID, language } from "../../../store";

  export let id: string;

  let lang: string = '';

  language.subscribe((value: string) => {
    if (value !== null) {
      lang = value;
    }
  });
</script>

<MultipleCalendar listId={id} language={lang} />