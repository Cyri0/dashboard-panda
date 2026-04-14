import { useState } from "react"

const App = () => {
  const [isLightMode, setLightMode] = useState(true)

  return (
    <main className={isLightMode ? "light" : "dark"}>
      <div onClick={() => setLightMode(prev => !prev)}
           className={"toggleSwitch " + (isLightMode ? "light" : "dark")}>
        <div></div>
      </div>
    </main>
  )
}

export default App