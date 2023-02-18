import Head from 'next/head'
import { QuickNavSectionInterface } from '@/interfaces/QuickNav'
import QuickNav from './QuickNav'
import Sidebar from './Sidebar'

interface DefaultLayoutProps {
  title?: string
  nav?: QuickNavSectionInterface[]
  children: React.ReactNode
}

export default function DefaultLayout({ title = 'My Planner', nav, children }: DefaultLayoutProps) {
  return (
    <div className='flex min-h-screen min-w-full flex-col items-center'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex h-screen w-screen'>
        <Sidebar />
        <div className='w-full overflow-y-auto bg-gray-200'>
          <div className='my-0 mx-auto flex w-11/12 max-w-7xl flex-col justify-center py-4'>{children}</div>
        </div>
        <QuickNav nav={nav} />
      </div>
    </div>
  )
}
