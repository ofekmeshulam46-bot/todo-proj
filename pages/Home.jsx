import { ToggleButton } from "../cmps/ToggleButton.jsx"

const { useState } = React
const { useSelector, useDispatch } = ReactRedux

export function Home() {
  const [isOn, setIsOn] = useState(false)

  const count = useSelector((storeState) => storeState.count)

  return (
    <section className="home">
      <h1>Todo's R Us!</h1>
      <ToggleButton val={isOn} setVal={setIsOn} />
      {isOn && <img src="../assets/img/todo.png" alt="" />}
    </section>
  )
}
