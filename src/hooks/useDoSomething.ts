import { useCallback, useEffect, useState } from 'react';

const DEFAULT_HOOK_STATE = {
	paramOne: '',
	paramTwo: [],
	paramThree: false,
};

type HookStateType = {
	paramOne: string;
	paramTwo: string[];
	paramThree: boolean;
};

export const useDoSomething = () => {
	const [hookState, setHookState] = useState<HookStateType>({ ...DEFAULT_HOOK_STATE });

	const accumulateParamTwo = useCallback(() => {
		setHookState(prev => ({ ...prev, paramTwo: [...prev.paramTwo, hookState.paramOne] }));
	}, [hookState.paramOne]);

	useEffect(() => {
		if (hookState.paramOne) {
			accumulateParamTwo();
		}
	}, [hookState.paramOne, accumulateParamTwo]);

	const paramOneHandler = (value: string) => {
		if (!hookState.paramThree) {
			setHookState(prev => ({ ...prev, paramOne: value }));
		} else {
			const modifiedParamOne = value + '' + value.split('').reverse().join('');
			setHookState(prev => ({ ...prev, paramOne: modifiedParamOne, paramThree: false }));
		}
	};

	const toggleParamThree = () => setHookState(prev => ({ ...prev, paramThree: !prev.paramThree }));

	return {
		hookState,
		paramOneHandler,
		toggleParamThree,
	};
};
