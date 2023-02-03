import Head from 'next/head'
import { Sidebar } from './Sidebar'

interface DefaultLayoutProps {
  title?: string
  loading?: boolean
  children: React.ReactNode
}

export function DefaultLayout({ title = 'My Planner', loading = false, children }: DefaultLayoutProps) {
  return (
    <div className='flex min-h-screen min-w-full flex-col items-center'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex h-screen w-screen'>
        <Sidebar />
        <div className='w-full overflow-y-auto bg-gray-200'>
          {loading && <div>Loading...</div>}
          <div className='p-4'>{children}</div>
        </div>
      </div>
    </div>
  )
}
