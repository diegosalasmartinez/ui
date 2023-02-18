import Link from 'next/link'
import { QuickNavSectionInterface } from '@/interfaces/QuickNav'

interface QuickNavProps {
  nav?: QuickNavSectionInterface[]
}

export default function QuickNav({ nav }: QuickNavProps) {
  return (
    <div className='hidden w-40 py-4 xl:flex xl:flex-col'>
      <h3 className='text-xl font-semibold dark:text-white'>On this page</h3>
      {nav?.map((item) => (
        <ul className='pt-2' key={item.title}>
          <li>
            <Link href={`#${item.href}`} className='text-gray-600'>
              {item.title}
            </Link>
            <ul className='pl-4'>
              {item.children?.map((subItem) => (
                <li key={subItem.title}>
                  <Link href={`#${subItem.href}`} className='text-gray-600'>
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  )
}
