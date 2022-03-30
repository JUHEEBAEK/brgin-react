import { useEffect, useState } from "react"


export const Size = () => {
  const [width, setWidth] =  useState(window.innerWidth)
  const [type, setType] = useState('posts')

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(()=>{
    // watch
    console.log(type)
  }, [type])

  useEffect(()=> {
    // mounted
    window.addEventListener('resize', handleResize)

    //destroyed
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  //computed
  const computedType = `Type: ${type}`
  return (
    <>
      <div>
        <span>
        {width}
        </span>
        <span>
        {computedType}
        </span>
      </div>
      <div>
        <button onClick={() => {setType('posts')}}>Posts</button>
        <button onClick={() => {setType('blog')}}>Blog</button>
        <button onClick={() => {setType('user')}}>User</button>
      </div>
    </>
  )
}