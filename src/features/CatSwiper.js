import { useState } from 'react';
import CatCard from '../components/CatCard';
import './CatSwiper.css';

function CatSwiper({cats}){
    const [currentCatIndex,setCurrentCatIndex] = useState(0);
    const [likedCats,setLikedCats] = useState([]);
    const [swipeClass,setSwipeClass] = useState('');

    function handleLike(){
        setSwipeClass('swipe-right');

        setTimeout(() => {
            setLikedCats([...likedCats, cats[currentCatIndex]]);
            setCurrentCatIndex(currentCatIndex + 1);
            setSwipeClass(''); //reset swipeClass
          }, 300); // match the CSS transition duration (ms)
    }


    function handleDislike(){
        setCurrentCatIndex(currentCatIndex + 1);
    }
    
    if(currentCatIndex >= cats.length){
        return <h2>No more cats to swipe!</h2>;
    }

    return (
        <div className="cat-swiper">
            <CatCard {...cats[currentCatIndex]} swipeClass={swipeClass} />
            <div className="cat-swiper-buttons">
                <button className="cat-swiper-button" onClick={handleDislike}>Dislike</button>
                <button className="cat-swiper-button" onClick={handleLike}>Like</button>
            </div>
        </div>
    );
};

export default CatSwiper;