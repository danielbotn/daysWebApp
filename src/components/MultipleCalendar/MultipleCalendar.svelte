<script context="module">
  export async function preload(page, session) {
    const { id } = page.query;
    return { id };
  }
</script>

<script lang="ts">
  import FullCalendar from "svelte-fullcalendar";
  import { onMount } from "svelte";

  let locales = [];
  let locale: string = "en";

  export let listId: string;
  export let language: string;

  const setLang = (lang: string) => {
    let result: string = "";
    if (lang === "Íslenska") {
      result = "is";
    } else if (lang === "English") {
      result = "en";
    } else {
      result = "sv";
    }
    return result;
  };

  onMount(async () => {
    locales.push((await import("@fullcalendar/core/locales/sv")).default);
    locales.push((await import("@fullcalendar/core/locales/is")).default);
    options = {
      ...options,
      plugins: [
        (await import("@fullcalendar/daygrid")).default,
        (await import("@fullcalendar/interaction")).default,
      ],
      locales,
      locale: setLang(language),
    };
  });

  const returnEvents = () => {
    return null;
  };

  const clickOnDate = (date: string) => {};

  let options = {
    initialView: "dayGridMonth",
    plugins: [],
    height: "500px",
    contentHeight: 100,
    events: returnEvents(),
    dateClick: (event: any) => clickOnDate(event.dateStr),
    weekends: true,
    // eventClick: (event: any) => eventClick(event.event._def),
    locale: locale,
    locales: locales,
  };
</script>

<FullCalendar options="{options}" />
