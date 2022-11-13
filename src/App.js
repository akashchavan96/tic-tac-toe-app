import {useState,useEffect} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Board> </Board>
    </div>
  );
}

function Board() {
const [marks, setMarks] = useState ([0,0,0,0,0,0,0,0,0]);
const[player, setPlayer] = useState(1);

useEffect(() => {
  const posiblities = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

for (let p of posiblities ){
  if(marks[p[0]] ===1  && marks[p[1]] ===1  && marks[p[2]] ===1)
  {
    alert('player 1 Wins')
  } 
  if(marks[p[0]] ===2  && marks[p[1]] ===2  && marks[p[2]] ===2)
  {
    alert('player 2 Wins')
  } 
}

}, [marks])



  const markChange = (i)=>{
    const m = [...marks];

if (m[i]===0) {
 
  m[i] = player;
  setMarks(m);
  setPlayer(player===1 ? 2:1);
} else {
  alert ("please click on empty box")
}



  }

  return (
    <div className='board'>
      <div>
        <Block mark={marks[0]}  position={0}  markChange={ markChange}></Block>
        <Block  mark={marks[1]}  position={1}  markChange={ markChange}></Block>
        <Block  mark={marks[2]}  position={2}  markChange={ markChange}></Block>
      </div>

      <div>
        <Block mark={marks[3]}  position={3}  markChange={ markChange}></Block>
        <Block  mark={marks[4]}  position={4}  markChange={ markChange}></Block>
        <Block  mark={marks[5]}  position={5}  markChange={ markChange}></Block>
      </div>

      <div>
        <Block mark={marks[6]}  position={6}  markChange={ markChange}></Block>
        <Block  mark={marks[7]}  position={7}  markChange={ markChange}></Block>
        <Block  mark={marks[8]}  position={8}  markChange={ markChange}></Block>
      </div>

      
      
    </div>
  )

}


function Block({mark, markChange, position}) {
  return  <div className={`block mark${mark}`}
             onClick={e=>markChange( position)}>  
               </div>;


  
}

export default App;
