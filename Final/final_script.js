tabs = [
    "#childhood", 
    "#young-teen",
    "#older-teen",
    "#young-adult",
    "#now",
]

music = [
  "#bep", 
  "#wings", 
  "#vogue", 
  "#rr", 
  "#max", 
]

function returnHome(){
  window.location.href = "final_index.html";
}

function goTo(page){
  window.location.href = page; 
}

$(function() {
    $('#childhood').hover(function() {
        hoverChange("#bep"); 
        changeTheRest('#childhood', 'font-size', '24px', tabs)
    }, function() {
      // on mouseout, reset the background colour
        removeHoverChange("#bep"); 
        changeTheRest('#childhood', 'font-size', '40px', tabs)
    });
    $('#young-teen').hover(function() {
        hoverChange("#wings"); 
        changeTheRest('#young-teen', 'font-size', '24px', tabs)
    }, function() {
      // on mouseout, reset the background colour
        removeHoverChange("#wings"); 
        changeTheRest('#young-teen', 'font-size', '40px', tabs)
      });
      $('#older-teen').hover(function() {
        hoverChange("#vogue"); 
        changeTheRest('#older-teen', 'font-size', '24px', tabs)
    }, function() {
      // on mouseout, reset the background colour
        removeHoverChange("#vogue");
        changeTheRest('#older-teen', 'font-size', '40px', tabs)
      });
      $('#young-adult').hover(function() {
        hoverChange("#rr"); 
        changeTheRest('#young-adult', 'font-size', '24px', tabs)
    }, function() {
      // on mouseout, reset the background colour
        removeHoverChange("#rr");
        changeTheRest('#young-adult', 'font-size', '40px', tabs)
      });
      $('#now').hover(function() {
        hoverChange("#max"); 
        changeTheRest('#now', 'font-size', '24px', tabs)
    }, function() {
      // on mouseout, reset the background colour
        removeHoverChange("#max");
        changeTheRest('#now', 'font-size', '40px', tabs)
      });
  });

function changeTheRest(currName, attribute, value, list){
  for (i = 0; i < list.length; i++){
    if (tabs[i] != currName){
      $(tabs[i]).css(attribute, value);
    }
  }

}

function hoverChange(currName){
  $(currName).css("width", "500px");
  $(currName).css("height", "500px");
  $(currName).css("filter", "saturate(1)");
  $(currName + "-content").css("display", "block");

  //FIGURE THIS OUT!!
  // var song = $(currName + "-song"); 
  // song.play(); 
}

function removeHoverChange(currName){
  if (currName == "#bep" || currName == "#max"){
    $(currName).css("width", "425px");
    $(currName).css("height", "425px");
  }
  else if(currName == "#wings" || currName == "#rr"){
    $(currName).css("width", "550px");
    $(currName).css("height", "550px");
  }
  else{
    $(currName).css("width", "450px");
    $(currName).css("height", "650px");
  }
  $(currName).css("filter", "saturate(0)");
  $(currName+"-content").css("display", "none");
}

