(function () {

  let time = new Date();

  let second = (time.getSeconds() / 60) * 360;

  let minut = (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6;

  let hour = (time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30;

  let animation = [

    "@keyframes sec-hand{from{transform:rotate(" +
      second +
      "deg);}to{transform:rotate(" +
      (second + 360) +
      "deg)}}",

    "@keyframes min-hand{from{transform:rotate(" +
      minut +
      "deg);}to{transform:rotate(" +
      (minut + 360) +
      "deg);}}",

    "@keyframes hr-hand{from{transform:rotate(" +
      hour +
      "deg);}to{transform:rotate(" +
      (hour + 360) +
      "deg)}}",

  ].join("");

document
  .querySelector("#clock-animate")
  .innerHTML = animation;
  // adding animation array to style element
  
})();

document
.body
.style
.cssText =
  "  display: flex;justify-content: center;align-items: center;min-height: 100vh;background-color: #00a2ff;";



document
.querySelector(".clock")
.style
.cssText =
  "  position: relative;display: flex;align-items: center;justify-content: center;width: 250px;height: 250px;background-color: #e9fcfc;border: 16px solid #303030;border-radius: 50%;";

document
.querySelector(".center-nut")
.style
.cssText =
  " position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%); height: 15px;width: 15px;background-color: #262626;z-index: 2;border-radius: 50%;";

document

.querySelector(".center-nut2")
.style
.cssText =
  " position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%); height: 9px;width: 9px;background-color: #f00;z-index: 6;border-radius: 50%;";



const elements = document.
        querySelectorAll(".indicator div");

elements
.forEach((element, index) => {

  if ((index + 1) % 3 === 0) {
    
    element
    .style
    .cssText =
      "position: absolute; width: 2px; height: 5px; background-color: #F00;";
  } 
  else
   {
    element
    .style
    .cssText =
      "position: absolute; width: 2px; height: 5px; background-color: #404040;";
  }
});

document
.querySelector(".sec-hand")
.style
.cssText =
  "  position: absolute;height: 1px;width: 1px;z-index: 5;animation: sec-hand 60s linear infinite;";

document
.querySelector(".min-hand")
.style
.cssText =
  "    position: absolute;height: 1px;width: 1px;z-index: 4;animation: min-hand 3600s linear infinite;";

document
.querySelector(".hr-hand")
.style
.cssText =
  "  position: absolute;height: 1px;width: 1px;z-index: 3;animation: hr-hand 43200s linear infinite;";


