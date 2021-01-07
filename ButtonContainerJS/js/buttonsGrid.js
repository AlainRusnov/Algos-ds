let nums=[1,2,3,6,9,8,7,4];
const ids=[1,2,3,6,9,8,7,4];

let btn5=document.getElementById("btn5");

btn5.onclick=function() {
  nums.unshift(nums.pop());
  for (i=0; i<=7; i++) {
      document.getElementById("btn"+ids[i]).innerHTML=nums[i];
  }
}

// create nine buttons enclosed in a div, laid out so they form a 3x3 grid. Each button has a distinct label from 1 to 9, and the labels on the outer buttons must rotate in the clockwise direction each time we click the middle button.