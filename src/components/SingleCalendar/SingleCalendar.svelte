<script lang="ts">
  import FullCalendar from 'svelte-fullcalendar';
  import { beforeUpdate, onMount } from 'svelte';
  import type { IFireBoard, IFireBoardObject } from "../../interfaces/IFirebase";
  import firebase from "firebase/app";
  import "firebase/database";

  export let uId: string;
  export let listId: string;

  let boardData: IFireBoard[];

  const returnEvents = () => {
    const result = [];
    if (boardData) {
      boardData.forEach(element => {
        result.push({title: '✔️', date: element.Day})
      });
    }
    return result;
  }

  let options = { 
    initialView: 'dayGridMonth', 
    plugins: [], 
    height: '500px', 
    contentHeight: 100,
    events: returnEvents(),
    eventColor: 'white',
    dateClick: (event) => alert('date click! ' + event.dateStr),
    weekends: true
  };

	onMount(async () => {
		options.plugins = [
			(await import('@fullcalendar/daygrid')).default,
			(await import('@fullcalendar/interaction')).default,
		];
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
          options = { ...options };
        }
      });
    }
  })

</script>
<div>
  <FullCalendar {options} />
</div>
