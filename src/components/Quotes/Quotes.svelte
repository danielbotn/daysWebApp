<script lang="ts">
  import axios from 'axios';
  import { onMount } from 'svelte';
  import type { IQuote } from '../../interfaces/IQuote';

  let quote: IQuote = {
    author: '',
    content: '',
  };

  onMount(async () => {
    try {
      const res = await axios.get('https://api.quotable.io/random', 
      { params: 
        { 
          tags: 'inspirational', 
          maxLength: 80 
        } 
      });
      quote.author = res.data.author;
      quote.content = res.data.content;
    } catch (err) {
      quote.author = '';
      quote.content = '';
    }
  });
</script>

<div class="lg:text-center">
  <h2 class="font-semibold tracking-wide uppercase text-4xl">Your Boards</h2>
  <q class="mt-4 max-w-2xl text-sm text-gray-500 lg:mx-auto">
    {quote.content}
  </q>
  <span class="mt-4 max-w-2xl text-sm text-blue-500 lg:mx-auto">
    - {quote.author}
  </span>
</div>

