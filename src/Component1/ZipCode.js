// import React,{useState} from 'react'

// const ZipCode = () => {
//     const[postal,Setpostal] =useState('');
//     const getText=(e)=>{
//         Setpostal(e.target.value)
//         initialize()


//     }


//     function initialize() {

//         var input = document.getElementById('id_address');
//         var options = {
//           types: ['address'],
//           componentRestrictions: {
//             country: 'us'
//           }
//         };
//     const autocomplete = new google.maps.places.Autocomplete(postal, options);
//         google.maps.event.addListener(autocomplete, 'place_changed', function() {
//           var place = autocomplete.getPlace();
//           for (var i = 0; i < place.address_components.length; i++) {
//             for (var j = 0; j < place.address_components[i].types.length; j++) {
//               if (place.address_components[i].types[j] == "postal_code") {
//                 document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;

//               }
//             }
//           }
//         })
//       }
//       google.maps.event.addDomListener(window, "load", initialize);

//     return (
//     <div>
// <input placeholder="enter area"  id="id_address" onChange={initialize} type="search" />
//     </div>
//   )
// }

// export default ZipCode
