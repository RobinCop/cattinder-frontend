import './CatCard.css';

function CatCard({name,imageBase64,description, swipeClass}){
    return(
    <div className={`cat-card ${swipeClass}`}>
        <img src={`data:image/jpeg;base64,${imageBase64}`} alt={name} className="cat-card-img"></img>
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
    );
}
export default CatCard;