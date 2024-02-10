import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://umami.dour.com/script.js" data-website-id="eee90a09-6514-487c-95ce-61eb5711be54"></script>
      </Head>
      <body>
        <div id="trailer"></div>
        <Main />
        <br />
        <a className='badge' href="https://8bitosc.net/" target="_blank">
          <img
            src="https://8bitosc.net/88x31/8bitosc.png"
            alt='A blue button with the text "8BitOSC (dot net)" on it.'
            width="88"
            height="31"
            style={{ imageRendering: 'pixelated' }}
            title="where the most mediocre stuff resides"
          />
        </a>
        <a href="https://tauon.dev" className="badge" target='_blank'>
          <img 
            src="https://tauon.dev/images/88x31/lily.png"
            alt="lily :3" 
            width='88'
            height='31'
            style={{ imageRendering: 'pixelated' }}
            title='a good programmer 👍'
          />
        </a>
        <img
          src='https://tauon.dev/images/88x31/anythingbutwindows.gif'
          alt='STOP THE BLOATWARE'
          width='88'
          height='31'
          style={{ imageRendering: 'pixelated' }}
          title='FRICK BLOATWARE'
        />
        <img
          src='https://tauon.dev/images/88x31/anythingbutchrome.gif'
          alt='STOP THE BLOATWARE'
          width='88'
          height='31'
          style={{ imageRendering: 'pixelated' }}
          title='FRICK BLOATWARE'
        />
        <a href='https://www.mozilla.org/en-US/firefox/new/' className='badge'>
          <img
            src='https://tauon.dev/images/88x31/firefox.gif'
            alt='best browser'
            width='88'
            height='31'
            style={{ imageRendering: 'pixelated' }}
            title='yes'
          />
        </a>
  
        <NextScript />
      </body>
    </Html>
  )
}
