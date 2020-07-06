let textbox;
let slider;
let paragraph;

function setup() {
  noCanvas();
  paragraph = createP('Your Text');
  textbox = createInput('Enter Text');
  slider = createSlider(0,50,25);

  paragraph.style('color', 'red');
  textbox.input(() => {
      paragraph.html(textbox.value());
  });
  slider.input(() => {
      paragraph.style("font-size",slider.value() + "px")
  })
}
