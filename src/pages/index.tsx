import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Desing System</title>
        <meta name='description' content='Beautifully designed components' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className='text-3xl font-bold text-blue-300 underline'>UI Design System</h1>
        <p className='pt-2'>Here we go</p>
      </main>
    </>
  )
}
