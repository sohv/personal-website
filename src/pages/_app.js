import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto py-10">
        <Component {...pageProps} />
      </main>
      <footer className="w-full bg-gray-600 text-white py-3 mt-auto">
        <div className="container mx-auto text-center">
          &copy; 2024 Sohan Venkatesh. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default MyApp