import Link from 'next/link'
import { useRouter } from 'next/router'
import { useBoundStore } from '@/store'
import { cn } from '@/utils/style'

interface RouteLinkProps {
  path: string
  actualRoute: string
  handleClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void
  children: React.ReactNode
}

function RouteLink({ path, actualRoute, handleClick, children }: RouteLinkProps) {
  return (
    <Link
      href={path}
      onClick={(e) => handleClick(e, path)}
      className={cn(
        path === actualRoute ? 'bg-zinc-200 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-100',
        'flex items-center rounded-lg px-3 py-1.5 text-base font-normal transition duration-200',
        'dark:text-white dark:hover:bg-gray-700 dark:hover:text-white',
      )}
    >
      {children}
    </Link>
  )
}

export default function Sidebar() {
  const router = useRouter()
  const actualRoute = useBoundStore((state) => state.actualRoute)
  const saveRoute = useBoundStore((state) => state.setActualRoute)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    saveRoute(path)
    router.push(path)
  }

  return (
    <div aria-label='Sidebar' className='h-full w-40 bg-white'>
      <div className='flex flex-col justify-between overflow-y-auto py-4 dark:bg-gray-800'>
        <ul className='space-y-2'>
          <li>
            <RouteLink path='/accordion' actualRoute={actualRoute} handleClick={handleClick}>
              <p>Accordion</p>
            </RouteLink>
          </li>
          <li>
            <RouteLink path='/card' actualRoute={actualRoute} handleClick={handleClick}>
              <p>Card</p>
            </RouteLink>
          </li>
          <li>
            <RouteLink path='/modal' actualRoute={actualRoute} handleClick={handleClick}>
              <p>Modal</p>
            </RouteLink>
          </li>
          <li>
            <RouteLink path='/alert' actualRoute={actualRoute} handleClick={handleClick}>
              <p>Alert</p>
            </RouteLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
