import { useState } from 'react';
import CatCard from '../components/CatCard';
import './CardSwiper.css';

function CatSwiper({cats}){
    const [currentCardIndex,setCurrentCardIndex] = useState(0);
    const [likedCards,setLikedCards] = useState([]);
    const [swipeClass,setSwipeClass] = useState('');

    function handleLike() {
        setSwipeClass('swipe-right');
        setLikedCards([...likedCards, cats[currentCardIndex]]); 

        setTimeout(() => {
            setCurrentCardIndex(currentCardIndex + 1); 
        }, 400); 
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
                {cats[currentCardIndex + 1] && (
                    <CatCard
                    key={cats[currentCardIndex + 1].id}
                    name={cats[currentCardIndex + 1].name}
                    imageBase64={cats[currentCardIndex + 1].imageBase64}
                    description={cats[currentCardIndex + 1].description}
                    isBehind={true}
                    />
                )}

                {cats[currentCardIndex] && (
                    <CatCard
                    key={cats[currentCardIndex].id}
                    name={cats[currentCardIndex].name}
                    imageBase64={cats[currentCardIndex].imageBase64}
                    description={cats[currentCardIndex].description}
                    swipeClass={swipeClass}
                    />
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