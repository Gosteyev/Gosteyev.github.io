const array = [33, 444, 2, 90, 55, 343];

const makeChunks = (arr, size) => {
  const result = []
  if (size > arr.length) return result.push(arr);
  let begin = 0;
  let end = size;
  while(end <arr.length){
   
    let subArr = arr.slice(begin, end);

    result.push(subArr);

    begin += size;
    end += size;

  }
  let last = arr.slice(end - size, arr.length);

  result.push(last);

return result


}

window.makeChunks = makeChunks;


// <script type="text/javascript">

// (function() {

//     var checkExist = setInterval(function() {
//    	if (document.querySelector('.bizzabo-web-agenda')) {
//         var div = document.querySelector('.bizzabo-web-agenda');
//         var eventId = '216542'
//         div.setAttribute('data-unique-name', eventId);
//         var bz = document.createElement('script');
//         bz.type = 'text/javascript';
//         bz.async = true;
//         bz.src = 'https://organizer.bizzabo.com/widgets/agenda/agenda.js';
//         var s = document.getElementsByTagName('script')[0];
//         s.parentNode.insertBefore(bz, s);
//         clearInterval(checkExist);
//     }
// }, 200);
// })();
//   </script>


// //////////////////second///////////////

// <script type="text/javascript">(function() {

// 	function create(){
//       var div = document.querySelector('[name="bizzabo-web-agenda"]');
//       var eventId = '210567'
//       div.setAttribute('data-unique-name', eventId);
//       var bz = document.createElement('script');
//       bz.type = 'text/javascript';
//       bz.async = true;
//       bz.src = 'https://organizer.bizzabo.com/widgets/agenda/agenda.js';
//       var s = document.getElementsByTagName('script')[0];
//       document.head.appendChild(bz);
// 	}    

//     var waitForEl = function(selector, callback) {
// 	if (!jQuery(selector).size()) {
// 		setTimeout(function() {
// 			window.requestAnimationFrame(function(){ waitForEl(selector, callback) });
// 		}, 100);
// 	}else {
// 		callback();
// 	}
// };
//     waitForEl('.bizzabo-web-agenda', create);
// })();</script>


// ////customers code////
// <script type="text/javascript">
  

// (function() {
//     var div = document.querySelector('.bizzabo-web-agenda');
//     var eventId = '216542'
//     div.setAttribute('data-unique-name', eventId);
//     var bz = document.createElement('script');
//     bz.type = 'text/javascript';
//     bz.async = true;
//     bz.src = 'https://organizer.bizzabo.com/widgets/agenda/agenda.js';
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(bz, s);
// })();

// </script>

// /////////////////third solution//////

// <script type="text/javascript">

// (function() {
   
//   function handleCanvas(element) { 
//   var div = element;
//         var eventId = '216542'
//         div.setAttribute('data-unique-name', eventId);
//         var bz = document.createElement('script');
//         bz.type = 'text/javascript';
//         bz.async = true;
//         bz.src = 'https://organizer.bizzabo.com/widgets/agenda/agenda.js';
//         var s = document.getElementsByTagName('script')[0];
//         s.parentNode.insertBefore(bz, s);
//       	console.log(1)

//   }

// var observer = new MutationObserver(function (mutations, me) {

//   var element = document.querySelector('.bizzabo-web-agenda');
//   if (element) {
//     handleCanvas(element);
//     me.disconnect(); 
//     return;
//   }
// });

// observer.observe(document, {
//   childList: true,
//   subtree: true
// });
  
  
// })();
//   </script>