import { QuickNavInterface, QuickNavSectionInterface } from '@/interfaces/QuickNav'
import Link from 'next/link'

interface QuickNavProps {
  nav?: QuickNavSectionInterface[]
}

export default function QuickNav({ nav }: QuickNavProps) {
  return (
    <div className='w-64 bg-gray-200 py-4 px-3'>
      <h3 className='text-xl font-semibold dark:text-white'>On this page</h3>
      {nav?.map((item) => (
        <ul className='pt-2' key={item.title}>
          <li>
            <Link href={`#${item.href}`}>{item.title}</Link>
            <ul className='pl-4'>
              {item.children?.map((subItem) => (
                <li key={subItem.title}>
                  <Link href={`#${subItem.href}`}>{subItem.title}</Link>
                  <ul></ul>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
      {/* <ul className='pt-2'>
        //{' '}
        <li>
          // <Link href='/'>Basic card</Link>
          //{' '}
        </li>
        //{' '}
      </ul> */}
    </div>
  )
}
