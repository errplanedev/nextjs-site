import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404: Not found.</title>
      </Head>
      <h1>404</h1>
      <p>This page could not be found.</p>
      <Link href="/">← Go home</Link>
    </>
  )
}