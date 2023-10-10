// const API_KEY = "2fa73a608fbd381cb2525e7f62c2c85c";

// async function renderInfoWeather(data){
//     let para=document.createElement("p");
//     para.textContent = `${data?.main?.temp.toFixed(2)} °C`;
//     document.body.appendChild(para);
// }


// // // async function weatherget(){
// // //     try{
// // //         let city= prompt();
// // //         const result=await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
// // //         const data=await result.json();
// // //         console.log(data);
// // //         renderInfoWeather(data);
// // //     }
// // //     catch(err){
// // //         console.error("Error", err);
// // //     }
    

// // // }


// // // 26.8925026,85.8012314

// async function getCustomWeather() {
//     try {
//       let latitude = 26.8468224;
//       let longitude =85.8423296;

  
//       let result =
//         await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}
//         `);
  
//       let data = await result.json();
//       console.log("Weather -> ", data);
//       renderInfoWeather(data);
//     } catch (err) {
//       console.log(err);
//     }
//  }


// // FIND YOUR LOCATION
// // function getlocation(){
// //   if(navigator.geolocation){
// //     navigator.geolocation.getCurrentPosition(showPosition);
// //   }
// //   else{
// //     console.log('geolocation is not avialable');
// //   }

// // }
// // function showPosition(position){
// //   let lat=position.coords.latitude;
// //   let long=position.coords.longitude;
// //   console.log(lat);
// //   console.log(long);
// // }

