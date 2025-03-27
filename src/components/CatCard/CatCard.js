import './CatCard.css';

function CatCard({name,imageBase64,description, swipeClass, isBehind = false}){
    return(
    <div className={`cat-card ${swipeClass} ${isBehind ? 'card-behind' : ''}`}>
        <img src={`data:image/jpeg;base64,${imageBase64}`} alt={name} className="cat-card-img"></img>
        <h2 className="cat-card-name">{name}</h2>
        <p className="cat-card-description">{description}</p>
    </div>
    );
}
export default CatCard;