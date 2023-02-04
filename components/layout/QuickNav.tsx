import Link from 'next/link'

export default function QuickNav() {
  return (
    <div className='w-48 bg-gray-200 py-4 px-3'>
      <h3 className='text-xl font-semibold dark:text-white'>Quick Nav</h3>
      <ul className='pt-2'>
        <li>
          <Link href='/'>Basic card</Link>
        </li>
      </ul>
    </div>
  )
}
