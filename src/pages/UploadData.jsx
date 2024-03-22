import React, { useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import firebase from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import firebase1 from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "../components/uploaddata.css";
// import sliderimage from "../images/sliderimage.png";
import loadingImage from '../assets/hotelbookingreloader.gif';
import prasadamgalleryimage from '../assets/prasadamgalleryimage.png';
import popularchefimage from '../assets/prasadamimage.png';
import popularpackagesimage from '../assets/popularpackagesimage.png';
import visitingspotimage from '../assets/visitingspotimage.png';
import exploreplacesimage from '../assets/exploreplacesimage.png';
import bestroomsimage from '../assets/bestroomsimage.png';
import taxirateimage from '../assets/taxirateimage.png';
import heritageimage from '../assets/heritageimage.png';
import activityimage from '../assets/activityimage.png';

const ImageUpload = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [file, setFile] = useState(null);

  const [location, setlocation] = useState("");
  const [price, setprice] = useState("");
  const [startdate,setstartdate] = useState("");
  const [enddate,setenddate] = useState("");
  const [availableseats,setavailableseats] = useState("");
  const [day1,setday1] = useState("");
  const [day2,setday2] = useState("");
  const [day3,setday3] = useState("");
  const [day4,setday4] = useState("");
  
  const [prasadname, setprasadname] = useState("");
  const [prasadprice, setprasadprice] = useState("");
  
  const [spotname,setspotname] = useState("");
  
  const [placename,setplacename] = useState("");

  const [roomtype,setroomtype] = useState("");
  const [roomcapacityadults,setroomcapacityadults] = useState("");
  const [roomcapacitychildrens,setroomcapacitychildrens] = useState("");
  const [roomdescription,setroomdescription] = useState("");
  const [roomprice,setroomprice] = useState("");

  const [taxiname,settaxiname] = useState("");
  const [taxinumofseats,settaxinumofseats] = useState("");
  // const [taxilocation,settaxilocation] = useState("");
  // const [taxiinitialcharge,settaxiinitialcharge] = useState("");

  const[heritagename,setheritagename] = useState("");
  const [heritagedescription,setheritagedescription] =useState("");

  const [activityname,setactivityname] = useState("");
  const [startingprice,setstartingprice] = useState("");

  const navigate = useNavigate();

  const handleUploadPopularPackages = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        alert("Please select an image.");
        return;
      }

      setLoading(true);
      setMessage({text:"Please wait until your data is submitted!..."});

      const firestore = firebase1.firestore();
      const storage = firebase1.storage();
      
      const storageRef = storage.ref(`images/${file.name}`);
      const uploadTask = storageRef.put(file);

      const snapshot = await uploadTask;
      const downloadURL = await snapshot.ref.getDownloadURL();

      const timestamp = firebase1.firestore.FieldValue.serverTimestamp();
      const submissionData = {
        imageUrl: downloadURL,
        location:location,
        price:price,
        startdate:startdate,
        enddate:enddate,
        availableseats:availableseats,
        day1:day1,
        day2:day2,
        day3:day2,
        day4:day4,
        submittedAt: timestamp,
      };
      await firestore.collection("PopularPackagesData").add(submissionData);

      setMessage({ type: 'success', text: 'Data submitted successfully!' });
      setTimeout(() => {
        setLoading(false);
      }, 5000);

     setFile(null);
     setlocation("");
     setprice("");
     setavailableseats("");
     setstartdate("");
     setenddate("");
     setday1("");
     setday2("");
     setday3("");
     setday4("");
    } catch (error) {
         setMessage({ type: 'error', text: 'Failed to submit data. Please try again.' });
         setTimeout(() => {
          setLoading(false);
        }, 5000);
    }
  };


  const handleUploadPrasadamGallery = async (e) => {
    e.preventDefault();
    if (file) {
      const storage = getStorage(firebase);
      const storageRef = ref(
        storage,`Prasadam-Gallery/${file.name}`);

      setLoading(true);
      setMessage({text:"Please wait until your data is submitted!..."});

      try {
        await uploadBytes(storageRef, file);
        
        setMessage({ type: 'success', text: 'Data submitted successfully!' });
        setTimeout(() => {
          setLoading(false);
        }, 5000);
        setFile(null);
      } catch (error) {
        setMessage({ type: 'error', text: 'Failed to submit data. Please try again.' });
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      }
    } else {
      alert("Please select an image.");
    }
  };


  const handleUploadPrasadam = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        alert("Please select an image.");
        return;
      }

      setLoading(true);
      setMessage({text:"Please wait until your data is submitted!..."});

      const firestore = firebase1.firestore();
      const storage = firebase1.storage();
      
      const storageRef = storage.ref(`images/${file.name}`);
      const uploadTask = storageRef.put(file);

      const snapshot = await uploadTask;
      const downloadURL = await snapshot.ref.getDownloadURL();

      const timestamp = firebase1.firestore.FieldValue.serverTimestamp();
      const submissionData = {
        imageUrl: downloadURL,
        prasadname:prasadname,
        prasadprice:prasadprice,
        submittedAt: timestamp,
      };
      await firestore.collection("PrasadamData").add(submissionData);

      setMessage({ type: 'success', text: 'Data submitted successfully!' });
      setTimeout(() => {
        setLoading(false);
      }, 5000);

     setFile(null);
     setprasadname("");
     setprasadprice("");
    } catch (error) {
         setMessage({ type: 'error', text: 'Failed to submit data. Please try again.' });
         setTimeout(() => {
          setLoading(false);
        }, 5000);
    }
  };


  const handleUploadVisitingSpot = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        alert("Please select an image.");
        return;
      }

      setLoading(true);
      setMessage({text:"Please wait until your data is submitted!..."});

      const firestore = firebase1.firestore();
      const storage = firebase1.storage();
      
      const storageRef = storage.ref(`images/${file.name}`);
      const uploadTask = storageRef.put(file);

      const snapshot = await uploadTask;
      const downloadURL = await snapshot.ref.getDownloadURL();

      const timestamp = firebase1.firestore.FieldValue.serverTimestamp();
      const submissionData = {
        imageUrl: downloadURL,
        spotname:spotname,
        submittedAt: timestamp,
      };
      await firestore.collection("VisitingSpotData").add(submissionData);

      setMessage({ type: 'success', text: 'Data submitted successfully!' });
      setTimeout(() => {
        setLoading(false);
      }, 5000);

     setFile(null);
     setspotname("");
    } catch (error) {
         setMessage({ type: 'error', text: 'Failed to submit data. Please try again.' });
         setTimeout(() => {
          setLoading(false);
        }, 5000);
    }
  };


  const handleUploadExplorePlaces = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        alert("Please select an image.");
        return;
      }

      setLoading(true);
      setMessage({text:"Please wait until your data is submitted!..."});

      const firestore = firebase1.firestore();
      const storage = firebase1.storage();
      
      const storageRef = storage.ref(`images/${file.name}`);
      const uploadTask = storageRef.put(file);

      const snapshot = await uploadTask;
      const downloadURL = await snapshot.ref.getDownloadURL();

      const timestamp = firebase1.firestore.FieldValue.serverTimestamp();
      const submissionData = {
        imageUrl: downloadURL,
        placename:placename,
        submittedAt: timestamp,
      };
      await firestore.collection("ExplorePlaceData").add(submissionData);

      setMessage({ type: 'success', text: 'Data submitted successfully!' });
      setTimeout(() => {
        setLoading(false);
      }, 5000);

     setFile(null);
     setplacename("");
    } catch (error) {
         setMessage({ type: 'error', text: 'Failed to submit data. Please try again.' });
         setTimeout(() => {
          setLoading(false);
        }, 5000);
    }
  };


  const handleUploadBestRooms = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        alert("Please select an image.");
        return;
      }

      setLoading(true);
      setMessage({text:"Please wait until your data is submitted!..."});

      const firestore = firebase1.firestore();
      const storage = firebase1.storage();
      
      const storageRef = storage.ref(`images/${file.name}`);
      const uploadTask = storageRef.put(file);

      const snapshot = await uploadTask;
      const downloadURL = await snapshot.ref.getDownloadURL();

      const timestamp = firebase1.firestore.FieldValue.serverTimestamp();
      const submissionData = {
        imageUrl: downloadURL,
        roomtype:roomtype,
        roomcapacityadults:roomcapacityadults,
        roomcapacitychildrens:roomcapacitychildrens,
        roomdescription:roomdescription,
        roomprice:roomprice,
        submittedAt: timestamp,
      };
      await firestore.collection("BestRoomsData").add(submissionData);

      setMessage({ type: 'success', text: 'Data submitted successfully!' });
      setTimeout(() => {
        setLoading(false);
      }, 5000);

     setFile(null);
     setroomtype("");
     setroomcapacityadults("");
     setroomcapacitychildrens("");
     setroomdescription("");
     setroomprice("");
    } catch (error) {
         setMessage({ type: 'error', text: 'Failed to submit data. Please try again.' });
         setTimeout(() => {
          setLoading(false);
        }, 5000);
    }
  };


  const handleUploadTaxiRate = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        alert("Please select an image.");
        return;
      }

      setLoading(true);
      setMessage({text:"Please wait until your data is submitted!..."});

      const firestore = firebase1.firestore();
      const storage = firebase1.storage();
      
      const storageRef = storage.ref(`images/${file.name}`);
      const uploadTask = storageRef.put(file);

      const snapshot = await uploadTask;
      const downloadURL = await snapshot.ref.getDownloadURL();

      const timestamp = firebase1.firestore.FieldValue.serverTimestamp();
      const submissionData = {
        imageUrl: downloadURL,
        taxiname:taxiname,
        numOfSeats:taxinumofseats,
        // taxilocation:taxilocation,
        // taxiinitialcharge:taxiinitialcharge,
        submittedAt: timestamp,
      };
      await firestore.collection("TaxiRateData").add(submissionData);

      setMessage({ type: 'success', text: 'Data submitted successfully!' });
      setTimeout(() => {
        setLoading(false);
      }, 5000);

     setFile(null);
    settaxiname("");
    settaxinumofseats("");
    // settaxilocation("");
    // settaxiinitialcharge("");
    } catch (error) {
         setMessage({ type: 'error', text: 'Failed to submit data. Please try again.' });
         setTimeout(() => {
          setLoading(false);
        }, 5000);
    }
  };


  const handleUploadHeritageInfo = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        alert("Please select an image.");
        return;
      }

      setLoading(true);
      setMessage({text:"Please wait until your data is submitted!..."});

      const firestore = firebase1.firestore();
      const storage = firebase1.storage();
      
      const storageRef = storage.ref(`images/${file.name}`);
      const uploadTask = storageRef.put(file);

      const snapshot = await uploadTask;
      const downloadURL = await snapshot.ref.getDownloadURL();

      const timestamp = firebase1.firestore.FieldValue.serverTimestamp();
      const submissionData = {
        imageUrl: downloadURL,
        heritagename:heritagename,
        heritagedescription:heritagedescription,
        submittedAt: timestamp,
      };
      await firestore.collection("HeritageData").add(submissionData);

      setMessage({ type: 'success', text: 'Data submitted successfully!' });
      setTimeout(() => {
        setLoading(false);
      }, 5000);

     setFile(null);
    setheritagename("");
    setheritagedescription("");
    } catch (error) {
         setMessage({ type: 'error', text: 'Failed to submit data. Please try again.' });
         setTimeout(() => {
          setLoading(false);
        }, 5000);
    }
  };


  const handleUploadExploreActivity = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        alert("Please select an image.");
        return;
      }

      setLoading(true);
      setMessage({text:"Please wait until your data is submitted!..."});

      const firestore = firebase1.firestore();
      const storage = firebase1.storage();
      
      const storageRef = storage.ref(`images/${file.name}`);
      const uploadTask = storageRef.put(file);

      const snapshot = await uploadTask;
      const downloadURL = await snapshot.ref.getDownloadURL();

      const timestamp = firebase1.firestore.FieldValue.serverTimestamp();
      const submissionData = {
        imageUrl: downloadURL,
        activityname:activityname,
        startingprice:startingprice,
        submittedAt: timestamp,
      };
      await firestore.collection("ExploreActivityData").add(submissionData);

      setMessage({ type: 'success', text: 'Data submitted successfully!' });
      setTimeout(() => {
        setLoading(false);
      }, 5000);

     setFile(null);
    setactivityname("");
    setstartingprice("");
    } catch (error) {
         setMessage({ type: 'error', text: 'Failed to submit data. Please try again.' });
         setTimeout(() => {
          setLoading(false);
        }, 5000);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <>
    {
      loading ?
      <section className="loadingimagediv">
        <div className="loadingimageinnerdiv">
        <div className="loadingimageimagediv">
        <img className="loadingimage" src={loadingImage} alt="Loading"/>
        </div>
        <div className="loadingimagemessage">
          <h2 className="text-4xl" style={{ color: message.type === 'success' ? 'green' : message.type === 'error' ? 'red' :'yellow'}}>{message.text}</h2>
          </div>
        </div>
      </section>
      :
      <div className="uploadimagediv pt-28">
        <div className="logoutbtndiv">
          <div className="logoutbtninnerdiv">
            <button className="logoutbtn" onClick={handleLogout} style={{ marginTop: "5px", borderRadius: "5px" }}>
              Logout
            </button>
          </div>
        </div>

        
        <div className="uploadimagerow">

          <div className="uploadimagecolumn">
            <div className="uploadimagecolumninnerdiv">
              <h3 className="mb-8 text-center font-bold text-2xl">Prasadam Gallery Section: </h3>
              <input type="file" className="mb-4" onChange={handleFileChange} />

              <button className="uploadimagebtn" onClick={handleUploadPrasadamGallery} style={{ marginTop: "5px", borderRadius: "5px" }}>Upload</button>
            </div>
          </div>

          <div className="uploadimagecolumn">
            <img className="uploadimageimage" src={prasadamgalleryimage} alt="prasadamgalleryimage"></img>
          </div>

        </div>


        <div className="uploadimagerow">

          <div className="uploadimagecolumn">
            <div className="uploadimagecolumninnerdiv">
              <h3 className="mb-8 text-center font-bold text-2xl">Dham Tour Section: </h3>
              <input className="mb-4" type="file" onChange={handleFileChange} />

              <div className="flex mb-4 gap-4">
                <div className="w-full flex flex-col">
                <label htmlFor="" className="mb-2">Enter Location</label>
                <input type="text" className="px-4 py-4 mb-2 border" value={location} onChange={(e) => setlocation(e.target.value)}/>
                </div>

                <div className="w-full flex flex-col">
                <label htmlFor="" className="mb-2">Enter Price</label>
                <input type="text" className="px-4 py-4 mb-2 border" placeholder="In Dollers" value={price} onChange={(e) => setprice(e.target.value)}/>
                </div>
              </div>

              <div className="flex mb-4 gap-4">
                <div className="w-full flex flex-col">
                <label htmlFor="" className="mb-2">Enter Starting Date</label>
                <input type="date" className="px-4 py-4 mb-2 border" value={startdate} onChange={(e) => setstartdate(e.target.value)}/>
                </div>

                <div className="w-full flex flex-col">
                <label htmlFor="" className="mb-2">Enter Ending Date</label>
                <input type="date" className="px-4 py-4 mb-2 border" value={enddate} onChange={(e) => setenddate(e.target.value)}/>
                </div>
              </div>

              <label htmlFor="" className="mb-2">Enter Available Seats</label>
              <input type="number" className="px-4 py-4 mb-2 border" value={availableseats} onChange={(e) => setavailableseats(e.target.value)}/>

              <label htmlFor="" className="mb-2">Enter Day 1 Description</label>
              <input type="text" className="px-4 py-4 mb-2 border" value={day1} onChange={(e) => setday1(e.target.value)}/>

              <label htmlFor="" className="mb-2">Enter Day 2 Description</label>
              <input type="text" className="px-4 py-4 mb-2 border" value={day2} onChange={(e) => setday2(e.target.value)}/>

              <label htmlFor="" className="mb-2">Enter Day 3 Description</label>
              <input type="text" className="px-4 py-4 mb-2 border" value={day3} onChange={(e) => setday3(e.target.value)}/>

              <label htmlFor="" className="mb-2">Enter Day 4 Description</label>
              <input type="text" className="px-4 py-4 mb-2 border" value={day4} onChange={(e) => setday4(e.target.value)}/>
            
              

              <button className="uploadimagebtn" onClick={handleUploadPopularPackages} style={{ marginTop: "5px", borderRadius: "5px" }}>Upload</button>
            </div>
          </div>

          <div className="uploadimagecolumn">
            <img className="uploadimageimage" src={popularpackagesimage} alt="popularpackagesimage"></img>
          </div>

        </div>

        <div className="uploadimagerow">

          <div className="uploadimagecolumn">
            <div className="uploadimagecolumninnerdiv">
              <h3 className="mb-8 text-center font-bold text-2xl">Prasadam Section: </h3>
              <input className="mb-4" type="file" onChange={handleFileChange} />

              <label htmlFor="" className="mb-2">Enter Prasad Name</label>
              <input type="text" className="px-4 py-4 mb-2 border" value={prasadname} onChange={(e) => setprasadname(e.target.value)}/>

              <label htmlFor="" className="mb-2">Enter Prasad Price</label>
              <input type="text" className="px-4 py-4 mb-2 border" value={prasadprice} onChange={(e) => setprasadprice(e.target.value)}/>

              <button className="uploadimagebtn" onClick={handleUploadPrasadam} style={{ marginTop: "5px", borderRadius: "5px" }}>Upload</button>
            </div>
          </div>

          <div className="uploadimagecolumn">
            <img className="uploadimageimage" src={popularchefimage} alt="sliderimage"></img>
          </div>

        </div>


        <div className="uploadimagerow">

          <div className="uploadimagecolumn">
            <div className="uploadimagecolumninnerdiv">
              <h3 className="mb-8 text-center font-bold text-2xl">Visiting Spot Section: </h3>
              <input className="mb-4" type="file" onChange={handleFileChange} />

              <label htmlFor="" className="mb-2">Enter Spot Name</label>
              <input type="text" className="px-4 py-4 mb-2 border" value={spotname} onChange={(e) => setspotname(e.target.value)}/>

              <button className="uploadimagebtn" onClick={handleUploadVisitingSpot} style={{ marginTop: "5px", borderRadius: "5px" }}>Upload</button>
            </div>
          </div>

          <div className="uploadimagecolumn">
            <img className="uploadimageimage" src={visitingspotimage} alt="visitingspotimage"></img>
          </div>

        </div>


         <div className="uploadimagerow">

          <div className="uploadimagecolumn">
            <div className="uploadimagecolumninnerdiv">
              <h3 className="mb-8 text-center font-bold text-2xl">Best Rooms Section: </h3>
              <input className="mb-4" type="file" onChange={handleFileChange} />

              <label htmlFor="" className="mb-2">Enter Room Type</label>
              <input type="text" className="px-4 py-4 mb-2 border" value={roomtype} onChange={(e) => setroomtype(e.target.value)}/>

              <label htmlFor="" className="mb-2">Enter Room Capacity </label>
              <input type="number" className="px-4 py-4 mb-2 border" placeholder="Adults" value={roomcapacityadults} onChange={(e) => setroomcapacityadults(e.target.value)}/>

              <label htmlFor="" className="mb-2">Enter Room Capacity </label>
              <input type="number" className="px-4 py-4 mb-2 border" placeholder="Childrens" value={roomcapacitychildrens} onChange={(e) => setroomcapacitychildrens(e.target.value)}/>

              <label htmlFor="" className="mb-2">Enter Room Description</label>
              <input type="text" className="px-4 py-4 mb-2 border" value={roomdescription} onChange={(e) => setroomdescription(e.target.value)}/>

              <label htmlFor="" className="mb-2">Enter Room Price</label>
              <input type="text" className="px-4 py-4 mb-2 border" value={roomprice} onChange={(e) => setroomprice(e.target.value)}/>

              <button className="uploadimagebtn" onClick={handleUploadBestRooms} style={{ marginTop: "5px", borderRadius: "5px" }}>Upload</button>
            </div>
          </div>

          <div className="uploadimagecolumn">
            <img className="uploadimageimage" src={bestroomsimage} alt="bestroomsimage"></img>
          </div>

        </div>


        <div className="uploadimagerow">

          <div className="uploadimagecolumn">
            <div className="uploadimagecolumninnerdiv">
              <h3 className="mb-8 text-center font-bold text-2xl">Taxi Rate Section: </h3>
              <input className="mb-4" type="file" onChange={handleFileChange} />

              <label htmlFor="" className="mb-2">Enter Taxi Name</label>
              <input type="text" className="px-4 py-4 mb-2 border" value={taxiname} onChange={(e) => settaxiname(e.target.value)}/>

              {/* <label htmlFor="" className="mb-2">Enter Taxi Location </label>
              <input type="text" className="px-4 py-4 mb-2 border" value={taxilocation} onChange={(e) => settaxilocation(e.target.value)}/> */}

              <label htmlFor="" className="mb-2">Enter Number of Seats</label>
              <input type="number" className="px-4 py-4 mb-2 border" value={taxinumofseats} onChange={(e) => settaxinumofseats(e.target.value)}/>

              <button className="uploadimagebtn" onClick={handleUploadTaxiRate} style={{ marginTop: "5px", borderRadius: "5px" }}>Upload</button>
            </div>
          </div>

          <div className="uploadimagecolumn">
            <img className="uploadimageimage" src={taxirateimage} alt="taxirateimage"></img>
          </div>

        </div>


         <div className="uploadimagerow">

          <div className="uploadimagecolumn">
            <div className="uploadimagecolumninnerdiv">
              <h3 className="mb-8 text-center font-bold text-2xl">Explore Heritage Section: </h3>
              <input className="mb-4" type="file" onChange={handleFileChange} />

              <label htmlFor="" className="mb-2">Enter Heritage Name</label>
              <input type="text" className="px-4 py-4 mb-2 border" value={heritagename} onChange={(e) => setheritagename(e.target.value)}/>

              <label htmlFor="" className="mb-2">Enter Heritage Description </label>
              <input type="text" className="px-4 py-4 mb-2 border" value={heritagedescription} onChange={(e) => setheritagedescription(e.target.value)}/>

              <button className="uploadimagebtn" onClick={handleUploadHeritageInfo} style={{ marginTop: "5px", borderRadius: "5px" }}>Upload</button>
            </div>
          </div>

          <div className="uploadimagecolumn">
            <img className="uploadimageimage" src={heritageimage} alt="heritageimage"></img>
          </div>

        </div>


         <div className="uploadimagerow">

          <div className="uploadimagecolumn">
            <div className="uploadimagecolumninnerdiv">
              <h3 className="mb-8 text-center font-bold text-2xl">Explore Activity Section: </h3>
              <input className="mb-4" type="file" onChange={handleFileChange} />

              <label htmlFor="" className="mb-2">Enter Activity Name</label>
              <input type="text" className="px-4 py-4 mb-2 border" value={activityname} onChange={(e) => setactivityname(e.target.value)}/>

              <label htmlFor="" className="mb-2">Enter Starting Price </label>
              <input type="text" className="px-4 py-4 mb-2 border" value={startingprice} onChange={(e) => setstartingprice(e.target.value)}/>

              <button className="uploadimagebtn" onClick={handleUploadExploreActivity} style={{ marginTop: "5px", borderRadius: "5px" }}>Upload</button>
            </div>
          </div>

          <div className="uploadimagecolumn">
            <img className="uploadimageimage" src={activityimage} alt="activityimage"></img>
          </div>

        </div>

        </div>
    }
    </>
  );
};

export default ImageUpload;
