<script context="module">
  export async function preload(page) {
    const { id } = page.query;
    return { id };
  }
</script>

<script lang="ts">
  import FullCalendar from "svelte-fullcalendar";
  import MultiModal from "../MultiModal/MultiModal.svelte";
  import InfoModal from "../InfoModal/InfoModal.svelte";
  import firebase from "firebase/app";
  import randomColor from "randomcolor";
  import "firebase/database";
  import { onMount, beforeUpdate } from "svelte";
  import type {
    IFireFieldObject,
    IFireName,
    IFireMultiDay,
  } from "../../interfaces/IFirebase";
  import type { IEventObject, IInfo } from "../../interfaces/IOther";

  export let listId: string;
  export let language: string;
  export let uId: string;
  export let boardName: string;

  let locales = [];
  let locale: string = "en";
  let fields: IFireName[] = [];
  let boardData: IFireMultiDay[] = [];
  let eventArray: IFireMultiDay[] = [];
  let modalOpen: boolean = false;
  let selectedDay: string = "";
  let infoModalObject: IInfo = null;
  let infoModalOpen: boolean = false;

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

  const makeEventArray = (boardsData: any) => {
    let result = [];
    boardsData.forEach((element: IFireMultiDay) => {
      result.push({
        title: element.NameOfField + "✔️",
        date: element.Day,
        color: randomColor({ luminosity: "light" }),
        textColor: "black",
        day: element.Day,
        dayTrueOrFalse: element.DayTrueOrFalse,
        email: element.EmailWhoChecked,
        fieldId: element.FieldId,
        firstName: element.FirstNameWhoChecked,
        lastName: element.LastNameWhoChecked,
        listId: element.ListId,
        nameOfField: element.NameOfField,
        nameOfList: element.NameOfList,
        time: element.Time,
        typeOfList: element.TypeOfList,
        userId: element.UserId,
      });
    });
    eventArray = result;
    options.events = eventArray;
    options = { ...options };
  };

  beforeUpdate(() => {
    if (uId && listId) {
      let days: IFireMultiDay[] = [];
      const db = firebase.database();
      const lc = db.ref(`/multipleBoardsData/${uId}/${listId}`);
      const fs = db.ref(`/multipleBoards/${uId}/${listId}`);
      lc.on("value", (snapshot) => {
        const boardValue = snapshot.val();
        const boardArr = Object.values(boardValue);
        boardArr.forEach((item) => {
          const objects = Object.values(item);
          objects.forEach((obj) => {
            const ob: IFireMultiDay[] = Object.values(obj);
            days.push(ob[0]);
          });
        });
        boardData = days;
        makeEventArray(boardData);
      });
      fs.on("value", (snapshot) => {
        const fieldsValue: IFireFieldObject = snapshot.val();
        const fieldsArr: IFireName[] = Object.values(fieldsValue);
        const objectKeys = Object.keys(fieldsValue);
        fieldsArr.forEach((item, index) => {
          item["KeyId"] = objectKeys[index];
        });
        fields = fieldsArr;
        makeEventArray(boardData);
      });
    }
  });

  const clickOnDate = (date: string) => {
    modalOpen = true;
    selectedDay = date;
  };

  const eventClick = (event: IEventObject) => {
    infoModalOpen = true;
    infoModalObject = event.extendedProps;
  };

  let options = {
    initialView: "dayGridMonth",
    plugins: [],
    height: "500px",
    contentHeight: 100,
    events: eventArray,
    dateClick: (event: any) => clickOnDate(event.dateStr),
    weekends: true,
    eventClick: (event: any) => eventClick(event.event._def),
    locale: locale,
    locales: locales,
  };
</script>

<div class="justify-self-center">
  {#if boardName}
    <h1 class="font-semibold tracking-wide uppercase text-4xl text-center">
      {boardName}
    </h1>
  {/if}
  <FullCalendar options="{options}" />
</div>

{#if modalOpen}
  <MultiModal
    on:closeModal="{() => (modalOpen = !modalOpen)}"
    fields="{fields}"
    boardName="{boardName}"
    boardData="{boardData}"
    selectedDay="{selectedDay}"
    listId="{listId}"
  />
{/if}

{#if infoModalOpen}
  <InfoModal
    infoModalObject="{infoModalObject}"
    on:closeModal="{() => (infoModalOpen = !infoModalOpen)}"
  />
{/if}
