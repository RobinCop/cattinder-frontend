import { useState } from 'react';
import CatCard from '../components/CatCard';
import './CardSwiper.css';

function CatSwiper({cats}){
    const [currentCardIndex,setCurrentCardIndex] = useState(0);
    const [likedCards,setLikedCards] = useState([]);
    const [swipeClass,setSwipeClass] = useState('');

    function handleLike(){
        setSwipeClass('swipe-right');

        setTimeout(() => {
            setLikedCards([...likedCards, cats[currentCardIndex]]);
            setCurrentCardIndex(currentCardIndex + 1);
            setSwipeClass(''); //reset swipeClass
          }, 300); // match the CSS transition duration (ms)
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

            <CatCard {...cats[currentCardIndex]} swipeClass={swipeClass} />
            </div>

            <div className="card-swiper-buttons">
                <button className="card-swiper-button" onClick={handleDislike}>Dislike</button>
                <button className="card-swiper-button" onClick={handleLike}>Like</button>
            </div>
        </div>
    );
};

export default CatSwiper;