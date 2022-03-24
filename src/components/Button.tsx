type ButtonPrpos = {
  name: string
  clickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}


export const Button = (props: ButtonPrpos) => {
  return (
    <div>
      <button onClick={(event) => props.clickHandler(event)} >
        {props.name}
      </button>
    </div>
  )
}