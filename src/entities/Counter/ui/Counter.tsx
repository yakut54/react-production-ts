import { memo, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/CounterSlice'

export const Counter = memo(() => {
  const dispatch = useAppDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = useCallback(() => {
    dispatch(counterActions.increment())
  }, [dispatch])

  const decrement = useCallback(() => {
    dispatch(counterActions.decrement())
  }, [dispatch])

  return (
    <div data-testid="value-title">
      <h1>{counterValue}</h1>
      <br />
      <Button data-testid="increment-btn" onClick={increment} theme={ButtonTheme.OUTLINE}>
        ++1
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement} theme={ButtonTheme.OUTLINE}>
        --1
      </Button>
    </div>
  )
})