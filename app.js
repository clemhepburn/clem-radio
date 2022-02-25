// ;(() => {
//   "use strict";
//   //defining variables
//   const TRIES_PER_BOX = 50;
//   const randUint = range => Math.random() * range | 0;
//   const placing  = [...document.querySelectorAll(".box")].map(el => Bounds(el, 5));
//   const fitted = [];
//   const areaToFit = Bounds();
//   var maxTries = TRIES_PER_BOX * placing.length;
//   // while loop to place the divs
//   while (placing.length && maxTries > 0) {
//       let i = 0;
//       while (i < placing.length) {
//           const box = placing[i];
//           box.moveTo(randUint(areaToFit.w - box.w), randUint(areaToFit.h - box.h));
//           if (fitted.every(placed => !placed.overlaps(box))) {
//               fitted.push(placing.splice(i--, 1)[0].placeElement());
//           } else { maxTries-- }
//           i++;
//       }
//   } 
//   //function to define the boundaries of the divs
//   function Bounds(el, pad = 0) {   
//       const box = el?.getBoundingClientRect() ?? {
//           left: 40, top: 40, 
//           right: innerWidth, bottom: innerHeight, 
//           width: innerWidth, height: innerHeight
//       };
//       return {
//           l: box.left - pad, 
//           t: box.top - pad, 
//           r: box.right + pad, 
//           b: box.bottom + pad,
//           w: box.width + pad * 2,
//           h: box.height + pad * 2,
//           // if it overlaps...
//           overlaps(bounds) { 
//               return !(
//                   this.l > bounds.r || 
//                   this.r < bounds.l || 
//                   this.t > bounds.b || 
//                   this.b < bounds.t
//               ); 
//           },
//           // move it somewhere else
//           moveTo(x, y) {
//               this.r = (this.l = x) + this.w;
//               this.b = (this.t = y) + this.h;
//               return this;
//           },
//           // place the element and give it a class of placed
//           placeElement() {
//               if (el) {
//                   el.style.top = (this.t + pad) + "px";
//                   el.style.left = (this.l + pad) + "px";
//                   el.classList.add("placed");
//               }
//               return this;
//           }
//       };
//   }
//   })();

// //randomly place 27 stars on the page, one for each of my years on earth
// const stars = () => {
//     // define variables
//     const numStars = 27;
//     const star = document.createElement('div');
//     star.classList.add('star');
//     const container = document.body;
//     // for loop to create 27 stars
//     for (let i = 0; i < numStars; i++) {
//         const starClone = star.cloneNode(true);
//         container.appendChild(starClone);
//     }
//     const stars = document.querySelectorAll('.star');
//     stars.forEach(star => {
//         star.style.left = Math.floor(Math.random() * 100) + 'vw';
//         star.style.top = Math.floor(Math.random() * 100) + 'vh';
//         star.innerText = '*';
//     });
// }
// // call the function
// stars();

// var colors = ["#D3A7A7", "#D7D988", "#BA8350", "#A7C2E1", "#BEB1C2", "#E7D0D9"];
// var colorPlanets = document.querySelectorAll(".link");
// for (var i = 0; i < colorPlanets.length; i++) {
//   colorPlanets[i].style.backgroundColor = colors[i];
// }

