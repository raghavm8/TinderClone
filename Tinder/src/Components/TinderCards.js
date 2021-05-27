import React,{ useState, useEffect } from 'react';
import './style/TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from './axios.js'

function TinderCards() {

    const [People, SetPeople]  = useState([]);
        
    useEffect(() => {
        async function fetchCards(){
            const req = await axios.get("tinder/card");
            SetPeople(req.data);
        }
        fetchCards();
    }, [])

    const swiped = (direction,nameToDelete) =>{
        console.log("removing" + nameToDelete);
        //SetLastDirection(direction);
    };
      
    const outOfFrame = (name) =>{
        console.log(name + "has left the screen");
    };

    return (
        <div className="TinderCards">
            <div className="tinderCards__cardContainer">
                {
                    People.map((person)=>(
                        <TinderCard className="swipe" 
                            key={person.name}
                            preventSwipe={["up","down"]}
                            onSwipe={(dir) => swiped(dir,person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                        <div className="card"
                        style={{backgroundImage: `url(${person.ImgUrl})` }}
                        > 
                        <h3>{person.name}</h3>
                        </div>                            
                        </TinderCard>    
                    ))
                }
            </div>
        </div>
    )
}

export default TinderCards