<script lang="ts">
  import FullCalendar from "svelte-fullcalendar";
  import InfoModal from "../InfoModal/InfoModal.svelte";
  import { beforeUpdate, onMount } from "svelte";
  import {
    getNameOfUserThatChecked,
    getUserInfo,
    setBoardData,
    deleteBoardItem,
  } from "../../helpers/api/firebase";
  import { formatAMPM } from "../../helpers/helperFunctions/helperFunctions";
  import type {
    IFireBoard,
    IFireBoardObject,
    IFireNameObject,
  } from "../../interfaces/IFirebase";
  import type { IEventObject, IInfo } from "../../interfaces/IOther";
  import firebase from "firebase/app";
  import "firebase/database";
  import randomColor from "randomcolor";

  export let uId: string;
  export let listId: string;
  export let boardName: string;
  export let language: string;

  let boardData: IFireBoard[];
  let infoModalOpen: boolean = false;
  let infoModalObject: IInfo = null;
  let locales = [];
  let locale: string = "en";

  const findDay = (day: string) => {
    let result: IFireBoard = undefined;
    for (let i = 0; i < boardData.length; i++) {
      if (day === boardData[i].Day) {
        result = boardData[i];
        break;
      }
    }
    return result;
  };

  const clickOnDate = async (date: string) => {
    const ct = formatAMPM(new Date());
    const nameObject: IFireNameObject = await getNameOfUserThatChecked(uId);
    const userInfo = await getUserInfo(uId);
    const isDayChecked = findDay(date);
    if (isDayChecked === undefined) {
      // Put day into database
      setBoardData(uId, listId, date, nameObject, userInfo.Email, ct);
    } else {
      // We need to delete from database
      deleteBoardItem(uId, listId, isDayChecked.KeyId);
    }
  };

  const returnEvents = () => {
    const result = [];
    if (boardData) {
      boardData.forEach((element) => {
        result.push({
          title: "✔️",
          date: element.Day,
          id: element.KeyId,
          firstName: element.FirstNameWhoChecked,
          lastName: element.LastNameWhoChecked,
          time: element.Time,
          listId: element.ListId,
          email: element.EmailWhoChecked,
          color: randomColor(),
          day: element.Day,
        });
      });
    }
    return result;
  };

  const eventClick = (event: IEventObject) => {
    infoModalOpen = true;
    infoModalObject = event.extendedProps;
  };

  const closeModal = () => {
    infoModalOpen = !infoModalOpen;
  };

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

  let options = {
    initialView: "dayGridMonth",
    plugins: [],
    height: "500px",
    contentHeight: 100,
    events: returnEvents(),
    dateClick: (event: any) => clickOnDate(event.dateStr),
    weekends: true,
    eventClick: (event: any) => eventClick(event.event._def),
    locale: locale,
    locales: locales,
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

  beforeUpdate(() => {
    if (uId && listId) {
      const db = firebase.database();
      const lc = db.ref(`/boardsData/${uId}/${listId}`);
      lc.on("value", (snapshot) => {
        const boardsValue: IFireBoardObject = snapshot.val();
        const boardArr: IFireBoard[] = Object.values(boardsValue);
        const objectKeys = Object.keys(boardsValue);
        boardArr.forEach((item, index) => {
          item["KeyId"] = objectKeys[index];
        });
        if (boardArr) {
          boardData = boardArr;
          options.events = returnEvents();
          options.locale = setLang(language);
          options = { ...options };
        }
      });
    }
  });
</script>

<div class="justify-self-center">
  {#if boardName}
    <h1 class="font-semibold tracking-wide uppercase text-4xl text-center">
      {boardName}
    </h1>
  {/if}
  <FullCalendar options="{options}" />
</div>

{#if infoModalOpen}
  <InfoModal on:closeModal="{closeModal}" infoModalObject="{infoModalObject}" />
{/if}
