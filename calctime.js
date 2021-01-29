export function createEvent(input, TimeDate, list) {
  let eventDate = new Date(document.querySelector("#eventtime").value),
    submitDate = new Date();

  if (eventDate < submitDate) {
    alert("Please put a valid date");
  } else if (input.value != "" && TimeDate.value) {

    let newTask = document.createElement("span"),
      title = document.createElement("span"),
      deleteElement = document.createElement("span"),
      deleteText = document.createTextNode("Delete"),
      dateElement = document.createElement("span");

    dateElement.className = "myDate";
    deleteElement.appendChild(deleteText);
    deleteElement.className = "delete";

    title.textContent = input.value;
    newTask.classList.add("taskBox");

    newTask.appendChild(title);

    newTask.appendChild(deleteElement);

    let x = setInterval(function () {
      let sub = new Date();
      let diffInSeconds = (eventDate.getTime() - sub.getTime()) / 1000;

      const eventObj = {
        EventTitle: title.textContent,
        RemainingDays: Math.floor(diffInSeconds / (60 * 60 * 24)),
        RemainingHours: Math.floor((diffInSeconds / (60 * 60)) % 24),
        RemainingMinutes: Math.floor((diffInSeconds / 60) % 60),
      };

      const {
        EventTitle,
        RemainingDays,
        RemainingHours,
        RemainingMinutes,
      } = eventObj;

      dateElement.innerHTML = `
        ${RemainingDays < 10 ? `0` + RemainingDays : RemainingDays} 
        <span> Days</span> :
        ${RemainingHours < 10 ? `0` + RemainingHours : RemainingHours} 
         <span> Hours</span> :
        ${RemainingMinutes < 10 ? `0` + RemainingMinutes : RemainingMinutes} 
         <span> Minutes</span>  `;


      if (diffInSeconds * 1000 < 0) {
        clearInterval(x);
        dateElement.innerHTML = `
        00 
        <span> Days</span> :
        00 
         <span> Hours</span> :
        00
         <span> Minutes</span> `;
      }
    }, 1000);

    newTask.appendChild(dateElement);

    const tasks = document.querySelectorAll(".tasks-list .taskBox");
    let tasksName = [];

    [...tasks].forEach((item) => {
      tasksName.push(item.childNodes[0].textContent);
    });

    if (!tasksName.includes(input.value)) {
      list.appendChild(newTask);

      input.value = " ";
      TimeDate.value = " ";
    } else {
      alert(
        `Event "${title.textContent}" already exist, change the event name`
      );
    }
  } 
    else {
    alert("Event Title or Date is missing!!");
  }
}