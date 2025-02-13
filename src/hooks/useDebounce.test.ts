import { renderHook, act } from "@testing-library/react-hooks";
import { useDebounce } from "./useDebounce";
import { jest, expect } from "@jest/globals";

jest.useFakeTimers();

test("should debounce callback function", async () => {
  const callbackFunc = jest.fn(); // Mock callback function
  const { rerender } = renderHook(
    ({ value }) => useDebounce(callbackFunc, [value], 3000),
    {
      initialProps: { value: 0 }, // Initial props to simulate state
    }
  );

  // Trigger the effect by changing dependency
  rerender({ value: 1 });

  // Verify the callback is not immediately called
  expect(callbackFunc).not.toHaveBeenCalled();

  // Fast-forward time
  act(() => {
    jest.advanceTimersByTime(3000);
  });

  // Verify the callback is called after the delay
  expect(callbackFunc).toBeCalledTimes(1);
});
