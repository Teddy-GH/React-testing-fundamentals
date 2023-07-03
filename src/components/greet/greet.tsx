import {GreetProps} from './greet.types'
const greet = ({name}:GreetProps) => {
  return (
    <div>Hello {name ? name : "Guest"}</div>
  )
}

export default greet