function InitControl() {
  const controlInputs = $(".control input");

  controlInputs.on("focus", (e) => {
    const control = $(e.target.parentElement);
    
    control.addClass("focused");
  });

  controlInputs.on("blur", (e) => {
    const control = $(e.target.parentElement);
    
    control.removeClass("focused");
  });
}

$(InitControl);
