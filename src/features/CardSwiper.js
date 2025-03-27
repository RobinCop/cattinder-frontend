import { useState } from 'react';
import CatCard from '../components/CatCard';
import './CardSwiper.css';

function CatSwiper({cats}){
    const [currentCardIndex,setCurrentCardIndex] = useState(0);
    const [likedCards,setLikedCards] = useState([]);
    const [swipeClass,setSwipeClass] = useState('');

    const [activeCard, setActiveCard] = useState(cats[0]); // The card currently shown
    const [nextCardIndex, setNextCardIndex] = useState(1); // Tracks who comes next

    function handleLike(){
        setSwipeClass('swipe-right'); // trigger CSS animation
        setLikedCards([...likedCards,activeCard]); // add to liked cards


        setTimeout(() => {
            setActiveCard(cats[nextCardIndex]);    // update to next card
            setNextCardIndex(nextCardIndex + 1);       // move index forward
            setSwipeClass('');                 // reset animation class
        }, 400); // matches your CSS transition time
    }


    function handleDislike(){
        setCurrentCardIndex(currentCardIndex + 1);
    }
    
    if(currentCardIndex >= cats.length){
        return <h2>No more to swipe!</h2>;
    }

    return (
        <div className="card-swiper">
            <div className="card-stack">
                {cats[nextCardIndex] && (
                    <CatCard {...cats[nextCardIndex]} isBehind={true} />
                )}

                {activeCard && (
                    <CatCard {...activeCard} swipeClass={swipeClass} />
                )}
            </div>

            <div className="card-swiper-buttons">
                <button className="card-swiper-button" onClick={handleDislike}>Dislike</button>
                <button className="card-swiper-button" onClick={handleLike}>Like</button>
            </div>
        </div>
    );
};

export default CatSwiper;