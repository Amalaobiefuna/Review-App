//functional components using hooks
import {useState} from 'react'

function Reviewitem() {
    const [rating, setRating] = useState(6)
    const [text, setText] = useState('This is a review text')

    const mdyState = () => {
         setRating (5)
            setText ("They are taking me to where i no know");
    }

  return (
    <div className='card'>
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
        <button onClick={mdyState}>click me</button>
              
    </div>
  )
}

export default Reviewitem
