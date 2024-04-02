import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Provider from './Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Foodie App',
	description: 'Foodie App is a recipe sharing platform',
}

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={inter.className}>
					<Provider>{children}</Provider>
				</body>
			</html>
		</ClerkProvider>
	)
}
