import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync } from './counterSlice'
import {RootState } from '../../app/store'

export function Counter() {
  const count = useSelector((state:RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Increment value late"
          onClick={() => dispatch(incrementAsync(2))}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span>{count}</span>
      </div>
    </div>
  )
}