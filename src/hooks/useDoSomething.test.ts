import { renderHook, act } from '@testing-library/react';
import { expect } from '@jest/globals';
import { useDoSomething } from './useDoSomething';

describe('test useDoSomething custom hook logic', () => {
	let result: any;

	beforeEach(() => {
		({ result } = renderHook(() => useDoSomething()));
	});

	test('should toggle boolean parameter', () => {
		act(() => result.current.toggleParamThree());
		expect(result.current.hookState.paramThree).toBe(true);

		act(() => result.current.toggleParamThree());
		expect(result.current.hookState.paramThree).toBe(false);
	});

	test('should properly set new value to paramOne', () => {
		act(() => result.current.paramOneHandler('test'));
		expect(result.current.hookState.paramOne).toBe('test');

		act(() => result.current.toggleParamThree());
		act(() => result.current.paramOneHandler('mirror'));
		expect(result.current.hookState.paramOne).toBe('mirrorrorrim');
	});

	test('should accumulate 2 string items', () => {
		act(() => result.current.paramOneHandler('test'));
		act(() => result.current.toggleParamThree());
		act(() => result.current.paramOneHandler('mirror'));

		expect(result.current.hookState.paramTwo).toStrictEqual(['test', 'mirrorrorrim']);
	});
});
