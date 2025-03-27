'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogMui from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { FormProvider, useForm } from 'react-hook-form';

import { SecondStep } from './components/SecondStep';
import { ThirdStep } from './components/ThirdStep';
import { FirstStep } from './components/FirstStep';

const STEPS = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const STEP_TRIGGERS: Record<number, string[]> = {
	0: ['campaignName', 'budget'],
	1: [],
	2: [],
};

export const Dialog = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
	const [step, setStep] = useState(0);
	const methods = useForm();

	const changeStep = (stepNumber: number) => setStep(stepNumber);

	const closeDialog = () => {
		changeStep(0);
		methods.reset();
		close();
	};

	const submitDialog = () => {
		//TODO get correct DTO from data: FieldValues
		changeStep(0);
		close();
	};

	const handleNextStep = async () => {
		const fieldsToValidate = STEP_TRIGGERS[step] || [];
		const isValid = await methods.trigger(fieldsToValidate);
		if (isValid) {
			changeStep(step + 1);
		}
	};

	const getNecessaryStep = (stepNumber: number) => {
		switch (stepNumber) {
			case 1:
				return <SecondStep />;
			case 2:
				return <ThirdStep />;
			default:
				return <FirstStep submitStep={handleNextStep} />;
		}
	};

	const getNecessaryButtons = (stepNumber: number) => {
		switch (stepNumber) {
			case 1:
				return (
					<>
						<Button onClick={() => changeStep(stepNumber - 1)}>Back</Button>
						<Button onClick={handleNextStep}>Next</Button>
					</>
				);
			case 2:
				return (
					<>
						<Button onClick={() => changeStep(stepNumber - 1)}>Back</Button>
						<Button onClick={submitDialog}>Submit</Button>
					</>
				);
			default:
				return (
					<>
						<Button onClick={closeDialog}>Close</Button>
						<Button onClick={handleNextStep}>Next</Button>
					</>
				);
		}
	};

	return (
		<DialogMui fullWidth maxWidth='xl' open={isOpen} onClose={closeDialog}>
			<DialogTitle>Test form dialog</DialogTitle>
			<DialogContent>
				<Box width='60%' sx={{ margin: '0 auto' }}>
					<Stepper activeStep={step}>
						{STEPS.map((label, index) => {
							const stepProps: { completed?: boolean } = {};
							return (
								<Step key={index} {...stepProps}>
									<StepLabel>{label}</StepLabel>
								</Step>
							);
						})}
					</Stepper>
				</Box>
				<FormProvider {...methods}>{getNecessaryStep(step)}</FormProvider>
			</DialogContent>
			<DialogActions sx={{ justifyContent: 'space-between' }}>
				{getNecessaryButtons(step)}
			</DialogActions>
		</DialogMui>
	);
};
