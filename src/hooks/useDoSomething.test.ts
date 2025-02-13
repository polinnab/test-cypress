import { renderHook, act} from '@testing-library/react'
import {useDoSomething} from './useDoSomething';
import { expect } from "@jest/globals";
 
test("should toggle boolean parameter",  () => {
    const {result} = renderHook(() => useDoSomething());

    act(() => {
        result.current.toggleParamThree()
    })
    expect(result.current.hookState.paramThree).toBe(true)

    act(() => {
        result.current.toggleParamThree()
    })
    expect(result.current.hookState.paramThree).toBe(false)
})
