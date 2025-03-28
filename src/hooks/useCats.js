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


    async function submitSwipeResults(liked, disliked) {
        try {
          const res = await fetch('https://localhost:7290/api/swipe-results', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ liked, disliked }),
          });
    
          if (!res.ok) throw new Error('Failed to submit swipe results');
          const result = await res.json();
          return result;
        } catch (err) {
          console.error('Error submitting swipe results:', err);
        }
      }

    return {cats, submitSwipeResults};
}

export default useCats;