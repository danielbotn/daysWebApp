<script context="module">
  export async function preload(page, session) {
    const { id } = page.query;
    return { id }
  }

</script>

<script lang="ts">
  import SingleCalendar from '../../components/SingleCalendar/SingleCalendar.svelte';
  import { userID } from '../../../store';

  export let id: string;
  let uId: string = '';
 
  userID.subscribe((value: string) => {
    if (value !== null) {
      uId = value;
    }
  });
  
</script>

<SingleCalendar uId={uId} listId={id} />