'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogMui from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { SecondStep } from './components/SecondStep';
import { ThirdStep } from './components/ThirdStep';
import { FirstStep } from './components/FirstStep';

export const Dialog = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
	const [step, setStep] = useState(1);
	console.log(step);

	const changeStep = (stepNumber: number) => setStep(stepNumber);

	const submitDialog = () => {
		//TODO get correct DTO from data: FieldValues
		close();
	};

	const getNecessaryStep = (stepNumber: number) => {
		switch (stepNumber) {
			case 2:
				return <SecondStep />;
			case 3:
				return <ThirdStep />;
			default:
				return <FirstStep />;
		}
	};

	const getNecessaryButtons = (stepNumber: number) => {
		switch (stepNumber) {
			case 2:
				return (
					<>
						<Button onClick={() => changeStep(1)}>Back</Button>
						<Button onClick={() => changeStep(3)}>Next</Button>
					</>
				);
			case 3:
				return (
					<>
						<Button onClick={() => changeStep(2)}>Back</Button>
						<Button onClick={submitDialog}>Submit</Button>
					</>
				);
			default:
				return (
					<>
						<Button onClick={close}>Close</Button>
						<Button onClick={() => changeStep(2)}>Next</Button>
					</>
				);
		}
	};

	return (
		<DialogMui fullWidth maxWidth='xl' open={isOpen} onClose={close}>
			<DialogTitle>Test form dialog</DialogTitle>
			<DialogContent>
				<Box
					noValidate
					component='form'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						m: 'auto',
						width: 'fit-content',
					}}
				>
					{getNecessaryStep(step)}
				</Box>
			</DialogContent>
			<DialogActions sx={{ justifyContent: 'space-between' }}>
				{getNecessaryButtons(step)}
			</DialogActions>
		</DialogMui>
	);
};
