export type ProfileProps = {
  name: string
}

export const Profile = ({name}:ProfileProps) => {
  return <div>Name is {name}</div>
}