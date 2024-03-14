import React, { useState } from 'react';
import Navbar from "./component/Navbar"
import NewsBoard from "./component/NewsBoard"
const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App
