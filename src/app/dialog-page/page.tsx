import Link from 'next/link';

import { DialogPage } from '../page-content/DialogPage';

export default function Page() {
	return (
		<main>
			<Link href='/'>Go to Home page</Link>
			<DialogPage />
		</main>
	);
}
