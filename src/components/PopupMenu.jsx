import React, { useState, useEffect } from 'react';
import './popupMenu.css';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const PopupMenu = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const[PopUpData,setPopUpData]=useState([]);

  useEffect(() => {
    const firestore = firebase.firestore();
    const popupDataRef = firestore.collection("PopUpData");
    const unsubscribe = popupDataRef.onSnapshot((snapshot) => {
      const newPopUpData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("popupdata",newPopUpData);
      setPopUpData(newPopUpData);
    });
    return () => unsubscribe();
  }, []);

  return (
    isVisible && (
      <div className='popupmenudiv'>
        <button className='closeButton' onClick={handleClose}>
          &times;
        </button>
        {
          PopUpData ?

          PopUpData && <img src={PopUpData[0].imageUrl} alt="popupimage" />
          :
          props.data && <img src={props.data[0].imageUrl} alt="popupimage" />
        }
       
      </div>
    )
  );
};

export default PopupMenu;
