import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { JetBrains_Mono } from 'next/font/google'

const jbmono = JetBrains_Mono({
  weight: ['400', '600'],
  style: ['italic', 'normal'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  if(typeof window !== 'undefined') {
    const pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let current = 0;

    const keyHandler = (e) => {

	    // If the key isn't in the pattern, or isn't the current key in the pattern, reset
	    if (pattern.indexOf(e.key) < 0 || e.key !== pattern[current]) {
		    current = 0;
		    return;
	    }

	    // Update how much of the pattern is complete
	    current++;

	    // If complete, alert and reset
	    if (pattern.length === current) {
		    current = 0;
		    location.href = '/r';
	    }
    };

    // Listen for keydown events
    document.addEventListener('keydown', keyHandler, false);
  }
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${jbmono.style.fontFamily}, monospace;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
