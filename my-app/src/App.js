
import './App.css';
import './stylee.css';
import myWonderfulImage from "./img2/myImage.jpg";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
   <header className="App-header">
   <div style={{maxWidth:'100vw', border:'solid 1px black'}}> 
 <h1 className="title red">Your name here</h1>
{"\n"}
<img style={{height: '450px',border: '1px solid white',borderRadius: '6px' ,marginRight: '15px' }} src="./img1/firstphoto.jpg" alt="myfirstimage" />
{"\n"}
 <img style={{height: '450px',border: '1px solid white',borderRadius: '6px'}} src={myWonderfulImage} alt ='myImage' />
  
 <h3 className="red" >And this is our  YouTube video - <a href="https://www.google.com/">Click</a></h3>
     
      <ReactPlayer 
        url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
      />

      </div>

      </header>
    </div>
  );
}

export default App;
