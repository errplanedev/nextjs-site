import Head from 'next/head'
import Link from 'next/link';
import { getSortedPostsData } from '../../../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }: any) {
  return (
    <>
      <Head>
        <title>errplane's blog</title>
        <meta name="description" content="errplane's blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div id="posts">
        <h1>errplane's blog</h1>
        <br />
        {allPostsData.map(({ id, date, title }: any) => (
          <div key={id}>
            <Link href={`/posts/${id}`} className="postTitle"><h2>{title}</h2></Link>
            <div className="date">{date}</div>
          </div>
        ))}
      </div>
    </>
  )
}
