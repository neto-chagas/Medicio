function InitControl() {
  const controlInputs = $(".control input");

  controlInputs.on("focus", (e) => {
    const input = $(e.target);
    const label = input.siblings("label");

    label.addClass("text-primary");
  });

  controlInputs.on("blur", (e) => {
    const input = $(e.target);
    const label = input.siblings("label");

    label.removeClass("text-primary");
  });
}

$(() => {
  InitControl();
});
