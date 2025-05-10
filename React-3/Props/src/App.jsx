import './App.css';
function App() {
  return(
    <div className="parent">
      <div><h2>Hello User! How its going?</h2></div>
      <div className="card">
        <div>
          <PostComponent
             name={"Vinayak"}
             subtitle={"1500 followers"}
            image={"https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"}             
             time={"2m ago"}
             description={"Want to create beautiful UIs"}
          />
        </div>
        <div>
          <PostComponent
            name={"Jakes"}
            subtitle={"456 followers"}
            time={"3 min ago"}
            image={"https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"}
            description={"How to get hired in 2025"}
          />
        </div>
        <div>
           <PostComponent
            name={"Jakes"}
            subtitle={"promoted"}
            
            image={"https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"}
            description={"Here is the best intern openiongs so far, comment your email id and password to get the access"}
          />
        </div>
      </div>
    </div>
  )
}

const style = {
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10,
};

function PostComponent({name,subtitle,time,image,description}) {
  return(
    <div style={style}>
      <div style={{display: "flex"}}>
        <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
        <div className="value">
          <b> {name} </b>
        <div> {subtitle} </div>

        {time !== undefined && <div style={{display: 'flex'}}>
            <div>{time} </div>
            <img src={"https://static.vecteezy.com/system/resources/previews/000/587/408/original/vector-clock-icon.jpg"} style={{width: 12,height: 12}} />
        </div>}
         
         <div style={{fontSize: 21}}>{description} </div>
        </div>
        
        
        
      </div>

    </div>
  )
}

export default App;