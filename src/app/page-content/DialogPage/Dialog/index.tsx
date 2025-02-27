'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogMui from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const Dialog = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
	return (
		<DialogMui fullWidth maxWidth='xl' open={isOpen} onClose={close}>
			<DialogTitle>Test form dialog</DialogTitle>
			<DialogContent>
				<DialogContentText>
					You can fill in whatever you want under the form rules. This dialog only for cypress
					component testing.
				</DialogContentText>
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
					Content
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={close}>Close</Button>
			</DialogActions>
		</DialogMui>
	);
};
