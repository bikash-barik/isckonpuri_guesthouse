import React,{useState,useEffect} from 'react'
import './adventureidea.css';
// import homeadventureidea from '../assets/home-adventure-idea-01.jpg';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function AdventureIdeas() {
    const [HeritageData, setHeritageData] = useState([]);
    useEffect(() => {
        const firestore = firebase.firestore();
        const contentDataRef = firestore.collection("HeritageData");
        const unsubscribe = contentDataRef.onSnapshot((snapshot) => {
          const newContentData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log(newContentData);
          setHeritageData(newContentData);
        });
        return () => unsubscribe();
      }, []);

  return (
    <section className='adideassection'>
        <div className="adidearow">
            <h3 className='adideah3 text-3xl text-center'>Take Yourself</h3>
            <h1 className='adideah1 text-5xl text-center font-bold'>Explore the Dham's rich heritage</h1>
        </div>
        <div className="adidearow1">
        {
            HeritageData.map((item,index)=>(
                <>
                <div className="adideacolumn1 mb-6" key={index}>
                <div className="adiimagediv">
                    <img src={item.imageUrl} alt="" />
                </div>

                <div className="adideaparadiv">
                    <h3 className='heritagename'>{item.heritagename}</h3>
                    <p className='heritagedescription'>{item.heritagedescription}</p>
                </div>

                <div className="adideabtndiv">
                    <button>Book Now</button>
                </div>
            </div>
            </>
            ))
        }
        </div>
       
           
            {/* <div className="adideacolumn1">
                 <div className="adiimagediv">
                    <img src={homeadventureidea} alt="" />
                </div>

                <div className="adideaparadiv">
                    <h3>Zip Lines</h3>
                    <p>Add some adrenalin to your travel senses by zipline travel.</p>
                </div>

                <div className="adideabtndiv">
                    <button>Enquire</button>
                </div>
            </div>
            <div className="adideacolumn1">
                 <div className="adiimagediv">
                    <img src={homeadventureidea} alt="" />
                </div>

                <div className="adideaparadiv">
                    <h3>Zip Lines</h3>
                    <p>Add some adrenalin to your travel senses by zipline travel.</p>
                </div>

                <div className="adideabtndiv">
                    <button>Enquire</button>
                </div>
            </div>
            <div className="adideacolumn1">
                <div className="adiimagediv">
                    <img src={homeadventureidea} alt="" />
                </div>

                <div className="adideaparadiv">
                    <h3>Zip Lines</h3>
                    <p>Add some adrenalin to your travel senses by zipline travel.</p>
                </div>

                <div className="adideabtndiv">
                    <button>Enquire</button>
                </div>
            </div> */}
     
        
    </section>
  )
}
