import Head from "next/head"

export default function Home() {
    return (
      <>
        <Head>
          <title>errplane's site</title>
        </Head>
        <h1>hi, i'm <span className="highlight">errplane</span>.</h1>

        <iframe frameBorder="0" width="510" height="140" src="https://yc.besties.house/embed/last/errplane?mini=false&force-theme=dark"></iframe>
        <br />
        <h3>hey! look at <a href="/posts">my blog</a>!</h3>
        <br />
        <br />
        <br />
        <p>this website uses umami for analytics (doesnt require cookies), if you want to see them go <a href="https://umami.dour.com/share/I6sQ8qyv8xpwMBJi/personal">here</a>.</p>
      </>
    )
}