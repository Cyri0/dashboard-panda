import { useState } from "react"
import FollowerCard from "./components/FollowerCard"

const App = () => {
  const [isLightMode, setLightMode] = useState(true)

  return (
    <main className={isLightMode ? "light" : "dark"}>
      <div onClick={() => setLightMode(prev => !prev)}
           className={"toggleSwitch " + (isLightMode ? "light" : "dark")}>
        <div></div>
      </div>

      <FollowerCard 
        platform="instagram"
        icon="/images/icons/icon-instagram.svg"
        handle="@realnathanf"
        count={11000}
        deltaToday={1099}
        metric="followers"
      />

    </main>
  )
}

export default App