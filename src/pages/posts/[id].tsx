import { getAllPostIds, getPostData } from '../../../lib/posts';
import Link from 'next/link';
import Head from 'next/head';

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }: any) {
  return (
    <>
      <Head>
        <title>{postData.title} :: errplane's blog</title>
      </Head>
      <h1>{postData.title}</h1>
      <p className="date">{postData.date}</p>
      <br />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <br />
      <Link href="/">← Back to home</Link>
    </>
  )
}