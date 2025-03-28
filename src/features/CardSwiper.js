import { useState } from 'react';
import CatCard from '../components/CatCard';
import './CardSwiper.css';

function CatSwiper({cats,submitSwipeResults}) {
    const [currentCardIndex,setCurrentCardIndex] = useState(0);
    const [likedCards,setLikedCards] = useState([]);
    const [dislikedCards,setDislikedCards] = useState([]);
    const [swipeClass,setSwipeClass] = useState('');

    function handleLike() {
        handleSwipe('swipe-right', setLikedCards);
    }
      
    function handleDislike() {
        handleSwipe('swipe-left', setDislikedCards);
    }
      
    function handleSwipe(direction, setCards) {
        setSwipeClass(direction);
        setCards((cards) => [...cards, cats[currentCardIndex]]); 

        setTimeout(() => {
            setCurrentCardIndex((index) => index + 1); 
            setSwipeClass('');
        }, 400);
    }
    
    if(currentCardIndex >= cats.length){
        submitSwipeResults(likedCards, dislikedCards);
        setLikedCards([]);
        setDislikedCards([]);
        setCurrentCardIndex(0);
        return <h2>No more to swipe!</h2>;
    }

    return (
        <div className="card-swiper">
           <div className="card-stack">
                {cats[currentCardIndex + 1] && (
                    <CatCard key={currentCardIndex + 1} {...cats[currentCardIndex + 1]} isBehind={true}/>
                )}
                {cats[currentCardIndex] && (
                    <CatCard key={currentCardIndex} {...cats[currentCardIndex]} swipeClass={swipeClass}/>
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