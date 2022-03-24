type PersonProps = {
  name:{
    first: string,
    last: string
  }
}

export const Person = (props: PersonProps) => {
  return <div>Bruce Wayne</div>
}