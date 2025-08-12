import './globals.css'

export const metadata = {
  title: 'MR LED EC - Pantallas LED de gran formato',
  description: 'Diseño, alquiler e instalación de pantallas LED para eventos, retail y publicidad.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
