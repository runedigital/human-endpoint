export const metadata = {
  title: 'Human Endpoint | You Are The API',
  description: 'Universal AI identity. One link, every AI knows you instantly. Stop repeating yourself to ChatGPT, Claude, and Gemini.',
  openGraph: {
    title: 'Human Endpoint | You Are The API',
    description: 'Universal AI identity. One link, every AI knows you instantly.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Human Endpoint | You Are The API',
    description: 'Universal AI identity. One link, every AI knows you instantly.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0,
        background: '#0a0e14', 
        minHeight: '100vh',
      }}>
        {children}
      </body>
    </html>
  )
}
