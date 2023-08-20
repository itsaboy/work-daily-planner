$().ready(() => {
  // Displays the current date
  $("#currentDay").text(dayjs().format("dddd MMMM D, YYYY"));

  const time = () => {
    let activeHour = dayjs().hour();

    $(".time-block").each(() => {
      let blockID = $(".time-block").attr("id").split("-")[1];

      if (blockID < activeHour) {
        $(".time-block").addClass("past");
      } else if (blockID === activeHour) {
        $(".time-block").removeClass("past");
        $(".time-block").addClass("present");
      } else {
        $(".time-block").removeClass("past");
        $(".time-block").removeClass("present");
        $(".time-block").addClass("future");
      };
    });

    console.log(activeHour);

  };

  // Loads data from local storage
  const loadData = () => {
    $("hour-9 .description").val(localStorage.getItem("hour-9"));
    $("hour-10 .description").val(localStorage.getItem("hour-10"));
    $("hour-11 .description").val(localStorage.getItem("hour-11"));
    $("hour-12 .description").val(localStorage.getItem("hour-12"));
    $("hour-13 .description").val(localStorage.getItem("hour-13"));
    $("hour-14 .description").val(localStorage.getItem("hour-14"));
    $("hour-15 .description").val(localStorage.getItem("hour-15"));
    $("hour-16 .description").val(localStorage.getItem("hour-16"));
    $("hour-17 .description").val(localStorage.getItem("hour-17"));
  };

  // Saves data to local storage on save button click
  const saveData = () => {
    $(".saveBtn").on("click", () => {
      let hour = $(".saveBtn").parent().attr("id");
      let item = $(".saveBtn").siblings(".description").val();
      
      localStorage.setItem(hour, item);

      notification();
    });
  };

  // Shows the user an item was successfully saved 
  const notification = () => {
    $(".notification").removeClass("hide");
    $(".notification").addClass("show");
    setTimeout(() => {
      $(".notification").removeClass("show");
      $(".notification").addClass("hide");
    }, 3000);
  };

  time();
  loadData();
  saveData();

  
});