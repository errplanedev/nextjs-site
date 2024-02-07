import Head from "next/head"

export default function Home() {
    return (
      <>
        <Head>
          <title>errplane's site</title>
        </Head>
        <h1>hi, i'm <span className="highlight">errplane</span>.</h1>
        <br />
        <h2>an <span className="highlight">elon musk hater</span>.</h2>
        <br />
        <h3 style={{ fontStyle: "italic" }}>there's currently not that much here, but you can <a href="/posts">check out my blog</a>.</h3>
      </>
    )
}