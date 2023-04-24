import '@/styles/globals.css'
import '../styles/spinner.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const LoadingSpinner = () => {
  return (
    <div className="simple-spinner">
      <span></span>
    </div>
  )
}

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", setLoading(false));

    router.events.on("routeChangeError", () => {
      setLoading(false);
    });
  }, [router])

  return (
    <>
      {
        loading
          ? <LoadingSpinner />
          : <Component {...pageProps} />
      }
    </>
  )
}
