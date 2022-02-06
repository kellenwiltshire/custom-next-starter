import Document, { Html, Main, NextScript } from 'next/document';
const isProd = process.env.NODE_ENV === 'production';

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html>
				<body>
					<Main />
					<NextScript />
					{/* Cloudflare Web Analytics */}
					{isProd && (
						<>
							<script
								defer
								src='https://static.cloudflareinsights.com/beacon.min.js'
								data-cf-beacon='{"token": "your_token", "spa": true}'
							/>
						</>
					)}
				</body>
			</Html>
		);
	}
}
