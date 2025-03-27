import { useFormContext } from 'react-hook-form';
import { Box, TextField } from '@mui/material';

export const FirstStep = ({ submitStep }: { submitStep: (data: any) => void }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useFormContext();

	return (
		<form onSubmit={handleSubmit(submitStep)}>
			<Box width='80%' margin='0 auto' mt={4}>
				<Box mt={1}>
					<TextField
						label='Campaign Name'
						size='small'
						fullWidth
						{...register('campaignName', {
							required: 'Campaign Name is required',
							minLength: { value: 3, message: 'Campaign Name must be at least 3 characters' },
						})}
						error={!!errors.campaignName}
						helperText={
							errors.campaignName?.message ? (errors.campaignName?.message as string) : ''
						}
					/>
				</Box>

				<Box mt={1}>
					<TextField
						label='Budget'
						size='small'
						fullWidth
						type='number'
						{...register('budget', {
							required: 'Budget is required',
							min: { value: 1, message: 'Budget must be at least 1' },
						})}
						error={!!errors.budget}
						helperText={errors.budget?.message ? (errors.budget?.message as string) : ''}
					/>
				</Box>
			</Box>
		</form>
	);
};
