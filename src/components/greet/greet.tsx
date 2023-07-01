type GreetProps = {
    name?: string
}
const greet = ({name}:GreetProps) => {
  return (
    <div>Hello {name}</div>
  )
}

export default greet