'use client';
import useSWR from 'swr';
import { useState } from 'react';

import { ItemsList } from './ItemsList';
import { Button } from '@/app/components/Button';

import { fetcher } from '@/utils';
import { CreateTodo } from './CreateTodo';

export const TodoList = () => {
	const [isAddNewOpen, setIsAddNewOpen] = useState<boolean>(false);
	const { data, isLoading } = useSWR('/database/todos.json', fetcher);

	const openAddNewForm = () => setIsAddNewOpen(true);
	const closeAddNewForm = () => setIsAddNewOpen(false);

	return (
		<div className='flex flex-col justify-center items-center'>
			<p data-cy='title' className='text-2xl font-semibold'>
				List of TODOs
			</p>
			{isLoading ? (
				<p className='mt-4'>Loading...</p>
			) : (
				<div className='mt-4'>
					<ItemsList items={data} />
				</div>
			)}
			{!isAddNewOpen && <Button onClick={openAddNewForm}>Add new</Button>}
			{isAddNewOpen && <CreateTodo cancel={closeAddNewForm} />}
		</div>
	);
};
