import './App.css';
import {useEffect, useState} from "react"




function App() {

  let [imageUrls, setImageUrls] = useState(null)
  let [loading, setLoading] = useState(false)
  let [topText, setTopText] = useState()
  let [value1, setValue1] = useState()
  let [value2, setValue2] = useState()
  let [bottomText, setBottomText] = useState()

   //useEffect(()=>{generate()}, [])


  async function getImage(){
    
    //Making the loading icon appear
    setLoading(true)

    // Fetching
    let url = "https://api.imgflip.com/get_memes"
    const response = await fetch(url)
    let data = await response.json()
    
    //Mapping through the data to get the image Urls
    let Urls = data.data.memes.map((item)=> {
      return <img alt = "abc"  key = {item.id} src= {item.url} /> 
    })

    // Ask  the question about this
    //await new Promise(resolve => setTimeout(resolve, 1000))

    setImageUrls(Urls[Math.floor(Math.random()*99)])
    
    //Make the loading icon disappear after the fetch is done
    setLoading(false)
  }
  
  
    function handleTopText(){
      if(imageUrls){
      setTopText(value1)
      }
      
    }

    function handleBottomText(){
      if(imageUrls){
      setBottomText(value2)
      }
    }


  return (
    <div className="App">
      <h1> Meme Generator</h1>

      <div>
      <br/>
      <div><button onClick = {getImage}> Choose Your meme Image </button> </div>
      <br/>
      </div>

      <input value={value1} onChange={(event)=> setValue1(event.target.value) }/>
      <button onClick = {handleTopText} >  Set Header </button>


      <input value={value2} onChange={(event)=> setValue2(event.target.value) }/>
      <button onClick = {handleBottomText} > Set Footer </button>

      

      
      <br/>
      { loading ? 
      <img src="https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/cog-settings-512.png" className="App-logo" alt="logo" /> : <> </>}
      <div className = "Loading">
      </div>
      <div style={{ position: "relative" }} >
      {imageUrls}

      <div style={{ position: "absolute",  top: "8px", left: "16px", fontSize: "60px" }} > {topText} </div>

      <div style={{ position: "absolute",  bottom: "8px", left: "16px", fontSize: "60px" }} > {bottomText} </div>
      
      </div>
    </div>
  );
}

export default App;
