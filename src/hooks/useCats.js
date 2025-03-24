import {useEffect,useState} from 'react';
function useCats(){
    const[cats,setCats] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7290/api/cats').then((res) => {
            if(!res.ok) throw new Error("Failed to fetch cats");
            return res.json()
        })
        .then((data) => setCats(data))
        .catch((err) => console.error('Error fetching cats', err));
    },[]);

    return cats;
}

export default useCats;