export const Input = () =>{
  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {console.log('input',event)}
  return (
    <input type='text' onChange={handleInputChange}></input>
  )
}