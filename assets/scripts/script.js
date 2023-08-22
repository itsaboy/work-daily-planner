$().ready(() => {
  // Displays the current date
  $("#currentDay").text(dayjs().format("dddd MMMM D, YYYY"));

  const time = () => {
    // Determines the current hour
    let activeHour = dayjs().subtract(8, "hours").hour();

    /* Determines the style for each time block based on whether 
    it is in the past, present, or future */
    $(".time-block").each(function () {
      let blockID = parseInt($(this).attr("id").split("-")[1]);

      if (blockID < activeHour) {
        $(this).addClass("past");
      } else if (blockID === activeHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else if (blockID > activeHour) {
        $(this).removeClass("present");
        $(this).addClass("future");
      };
    });
  };

  // Loads data from local storage
  const loadData = () => {
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));
    $("#hour-6 .description").val(localStorage.getItem("hour-6"));
    $("#hour-7 .description").val(localStorage.getItem("hour-7"));
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  };

  // Saves data to local storage on save button click
  const saveData = () => {
    $(".saveBtn").on("click", function () {
      let hour = $(this).parent().attr("id");
      let item = $(this).siblings(".description").val();
      
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

  // Function calls
  time();
  loadData();
  saveData();

});