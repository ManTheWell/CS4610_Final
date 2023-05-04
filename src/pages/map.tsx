import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import { Loader } from '@googlemaps/js-api-loader';
import './pages.css'
import { auth, db } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { collection, addDoc, getDocs, query, where, doc, deleteDoc } from "firebase/firestore";

export const Map = () => {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [newA, setNewA] = useState("Cedar City, UT");
  const [locations, setLocations] = useState<Location[]>([]);
  const [ERROR, setError] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);

  type Location = {
    location: string;
    createrId: string;
  }

  var map: google.maps.Map;
  // default: LOGAN, UT
  var deflt = { lat: 41.7369803, lng: -111.8338359 };

  function addMarker(add : string) {
  if (loading) return;

  const geocoder = new window.google.maps.Geocoder();
    var a = newA;
    if (add != "") a = add;

    console.log(a);

    geocoder.geocode({ address: a }, (results, status) => {
      if (status === 'OK' && results != null) {
        // Create a marker with the converted lat/lng coordinates
        let lat = results[0].geometry.location.lat()
        let lng = results[0].geometry.location.lng()
        deflt = { lat: lat, lng: lng };
        loadMap();
      }
      else {
        console.error('Geocode was not successful for the following reason: ' + status);
        setError(status);
        setIsDisplayed(true);
      }
    });
    
    loadLocations();
  }

  // error toast
  useEffect(() => {
    if (isDisplayed) {
      const timeout = setTimeout(() => {
        setIsDisplayed(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      }
    }
    return () => {};
  }, [isDisplayed]);

  // load a map from google
  function loadMap() {
    const loader = new Loader({
      apiKey: 'AIzaSyCnk9jGoixRBF1-KaOB44czP9l8T-re1CY',
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      map = new window.google.maps.Map(document.getElementById("map")!, {
        center: deflt,
        zoom: 12,
      });

      const marker = new window.google.maps.Marker({
        position: deflt,
        map: map,
        title: 'DEFAULT'
      });
    });

    setLoading(false);
  }

  // get all of the saved locations for this user
  async function loadLocations() {
    const uid = user!.uid;

    const querySnapshot = await getDocs(
      query(
        collection(db, "savedlocations"),
        where("createrId", "==", uid)
      )
    );
      
    const myLoc: Location[] = [];
    querySnapshot.forEach((doc) => {
      myLoc.push({ ...doc.data() } as Location);
    });
    setLocations(myLoc);
  }

  async function save() {
    const docRef = await addDoc(collection(db, "savedlocations"), {
      location: newA,
      createrId: user!.uid,
    });
    loadLocations();
  }

  async function del(location: string) {
    const docRef = await doc(db, "savedlocations", location);
    const delDoc = deleteDoc(docRef);
    console.log(docRef)
    console.log(location);
    loadLocations();
  }

  useEffect(() => {
    const successCallback = (position: GeolocationPosition) => {
      console.log(position);
      deflt = { lat: position.coords.latitude, lng: position.coords.longitude };
      loadMap();
    };
    
    const errorCallback = (error: GeolocationPositionError) => {
      console.log(error);
    };
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


    loadMap();
    loadLocations();
  }, [loading]);

  return (
    <div className="LR">
      {/* LEFT */}
      <div>
        {/* MAP */}
        <div id="map" style={{ height: '100vh', width: '50vw' }} />
      </div>
        

      {/* RIGHT */}
      <div className="middle">
        <div className="scroll">
          {locations.map(loc => (
            <div className="sidetoside">
              <button onClick={() => del(loc.location)} className="trashcanbutton"><svg width="20" height="16" viewBox="0 0 1024 1024">
                    <path d="M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z"></path>
                    </svg></button>
              <div className="location" onClick={() => addMarker(loc.location)}>{loc.location}</div>
            </div>
          ))}
        </div>

        {/* new address bar */}
        <input type="text" onChange={e => setNewA(e.target.value)} placeholder="New Address" />
        {/* buttons */}
        <div>
          <button onClick={() => addMarker("")}>Search</button>
          <button onClick={() => save()}>Save</button>
          <button onClick={() => signOut(auth)}>Logout</button>
          <div className={`warning ${isDisplayed ? '' : 'hidden'}`}>{ ERROR }</div>
        </div>
      </div>
    </div>
  );
}
