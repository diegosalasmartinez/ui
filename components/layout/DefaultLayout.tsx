import Head from 'next/head'
import { QuickNavSectionInterface } from '@/interfaces/QuickNav'
import QuickNav from './QuickNav'
import Sidebar from './Sidebar'
import Header from './Header'

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
      <Header />
      <div className='flex h-[calc(100vh-61px)] w-full px-3'>
        <Sidebar />
        <div className='my-0 mx-auto flex w-[calc(100%-200px)] flex-col overflow-y-auto p-4 xl:w-[calc(100%-400px)]'>
          {children}
        </div>
        <QuickNav nav={nav} />
      </div>
    </div>
  )
}
