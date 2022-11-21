import React, {useState} from 'react'

function Hook1() {

    const [city, setstate] = useState("Lahore");
  return (
    <div>
    <h3>
        city : {city}  <br />

        <button onClick={()=>setstate("Karachi")}>Change Value</button>
    </h3>
    </div>
  )
}

export default Hook1