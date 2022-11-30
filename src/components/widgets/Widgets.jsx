import "./widgets.scss"
import LeftWidget from "./left/LeftWidget"
import RightWidget from "./right/RightWidget"

const Widgets = () => {
  return (
    <div className="widgets">
      <LeftWidget /> 
      <RightWidget /> 
    </div>
  )
}

export default Widgets