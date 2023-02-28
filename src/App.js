import './App.css';
import {useEffect, useState} from "react"




function App() {

  let [imageUrls, setImageUrls] = useState(0)
  let [loading, setLoading] = useState(false)
  let [text, setText] = useState()

   //useEffect(()=>{generate()}, [])


  let array1 = ["A", "B", "C", "D"]
  //let array2 = ["Hey", "Yo"]
  //let array3 = ["WhatsUp", "Man"]
  //let url = `https://apimeme.com/meme?meme=${array1[Math.floor(Math.random()*2)]}&top=${array2[Math.floor(Math.random()*2)]}&bottom=${array3[Math.floor(Math.random()*2)]}`


  async function generate(){
    setLoading(true)
    let url = "https://api.imgflip.com/get_memes"
    const response = await fetch(url)
    let data = await response.json()
    
    console.log(data)

    let Urls = data.data.memes.map((item)=> {
      return <img alt = "abc"  key = {item.id} className= {array1[Math.random() * 3 ]} src= {item.url} /> 
    })
    console.log(Urls)


    await new Promise(resolve => setTimeout(resolve, 1000))

    setImageUrls(Urls)
    setLoading(false)
  }
  
  console.log(imageUrls)
  
  


  return (
    <div className="App">
      <h1>Click on the button to <br/> generate a meme</h1>
      <div><button onClick = {generate}> Generate Meme</button> </div>
      <br/>
      { loading ? 
      <img src="https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/cog-settings-512.png" className="App-logo" alt="logo" /> : <> </>}
      <div className = "Loading">
      </div>
      <div style={{ position: "relative" }} >
      {imageUrls[4]}
      <div style={{ position: "absolute",  bottom: "8px", left: "16px", fontSize: "80px" }} > abc {text} </div>
      </div>
    </div>
  );
}

export default App;
