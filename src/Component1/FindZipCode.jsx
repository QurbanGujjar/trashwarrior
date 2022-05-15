import React,{useState} from 'react'

const FindZipCode = () => {
   const[postal,Setpostal] =useState('');
//    var options = {
//     types: ['(regions)'],
//     componentRestrictions: {
//         country: 'us'
//     }
// }
// var autocomplete = new google.maps.places.Autocomplete(postal, options);
//                      google.maps.event.addListener(autocomplete, 'place_changed', function() {
//                             var location = autocomplete.getPlace();
//                         let    geocoder = new google.maps.Geocoder();
//                             console.log(location['geometry'])
//                         let    lat = location['geometry']['location'].lat();
//                         let    lng = location['geometry']['location'].lng();
//                             var latlng = new google.maps.LatLng(lat, lng);
//                             geocoder.geocode({
//                                 'latLng': latlng
//                             }, function(results) {
//                                 for (let i = 0; i < results.length; i++) {
//                                     for (var j = 0; j < results[i].address_components.length; j++) {
//                                         for (var k = 0; k < results[i].address_components[j].types.length; k++) {
//                                             if (results[i].address_components[j].types[k] == "postal_code") {
//                                               let  zipcode = results[i].address_components[j].short_name;
//                                                 postal.value = zipcode;
//                                             }
//                                         }
//                                     }
//                                 }
//                             });
//                         });

    const getText=(e)=>{
        Setpostal(e.target.value)


    }

  return (
    <div>
<input placeholder="enter area" onChange={getText} id="txtPostalCode" type="search" />
    </div>
  )
}

export default FindZipCode
