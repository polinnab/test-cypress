import Link from 'next/link';
import { TodoList } from './page-content/TodoList';

export default function Home() {
	return (
		<main>
			<Link href='/dialog-page'>Go to Dialog page</Link>
			<div className='flex min-h-screen flex-col items-center justify-between p-24'>
				<TodoList />
			</div>
		</main>
	);
}
