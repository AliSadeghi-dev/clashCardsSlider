import React,{useEffect,useState} from 'react'
import Arrow from './Arrow'
import Card from './Card'

export default function Slider() {
const [heros,setheroes] = useState([]);
const [current,setCurrent] = useState(0);

function next(){
    const index = current+1 > heros.length-1 ? 0 : current+1;
    setCurrent(index);
}

function prev(){
    const index = current-1 < 0  ? heros.length-1 : current-1;
    setCurrent(index);
}


useEffect(() => {
 fetch(" http://localhost:3001/heroes").then(respones=>respones.json()).then(res=>setheroes(res))
}, []);


  return (
    <div className="slide-container">
    <div className="wrapper">
        {!heros.length ? <div>is loading ...</div>
        :
        <>
         <Arrow direction="prev" handleClick={prev}/>
        <Card heros={heros[current]}/>
       <Arrow direction="next" handleClick={next}/>
        </>

        }
    </div> 
</div>

  )
}
