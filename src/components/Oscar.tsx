import { render } from "@testing-library/react"

type OscarPrpos = {
  children: React.ReactNode
}

export const Oscar = (props:OscarPrpos) => {

  return (
    <div>
      {props.children}
    </div>
  )

}