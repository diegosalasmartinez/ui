import { cn } from '@/utils/style'
import BasicCard from '@/components/card/BasicCard'
import DefaultLayout from '@/components/layout/DefaultLayout'

const nav = [
  { title: 'Installation', children: [] },
  { title: 'Usage', children: [] },
  {
    title: 'Examples',
    children: [
      { title: 'With text', href: 'basic-cards', children: [] },
      { title: 'Disabled', children: [] },
    ],
  },
]

export default function Card() {
  return (
    <DefaultLayout title='UI Design System' nav={nav}>
      <div className='mb-4'>
        <h1 id='a-cards'>Complex Cards</h1>
        <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-2')}>
          <BasicCard
            title='Velit et ullamco nisi elit voluptate'
            body='Veniam proident in anim ea velit minim laborum voluptate ullamco mollit exercitation qui reprehenderit excepteur. Pariatur irure cillum incididunt veniam ea adipisicing veniam sint anim ut. Quis labore reprehenderit minim dolor non et consectetur elit ea ea.'
          />
          <BasicCard title='Deserunt consectetur labore exercitation'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae suscipit iste aperiam labore?
            <span className='font-bold'> Lorem ipsum dolor sit amet consectet? </span>
            Magni error perferendis rerum corrupti accusamus cum itaque ducimus asperiores, sequi doloribus fuga nam
            earum nisi.
          </BasicCard>
        </div>
      </div>
      <div className='mb-4'>
        <h1 id='b-cards'>Complex Cards</h1>
        <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-2')}>
          <BasicCard
            title='Velit et ullamco nisi elit voluptate'
            body='Veniam proident in anim ea velit minim laborum voluptate ullamco mollit exercitation qui reprehenderit excepteur. Pariatur irure cillum incididunt veniam ea adipisicing veniam sint anim ut. Quis labore reprehenderit minim dolor non et consectetur elit ea ea.'
          />
          <BasicCard title='Deserunt consectetur labore exercitation'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae suscipit iste aperiam labore?
            <span className='font-bold'> Lorem ipsum dolor sit amet consectet? </span>
            Magni error perferendis rerum corrupti accusamus cum itaque ducimus asperiores, sequi doloribus fuga nam
            earum nisi.
          </BasicCard>
        </div>
      </div>

      <div className='mb-4'>
        <h1 id='basic-cards'>Basic Cards</h1>
        <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-2')}>
          <BasicCard
            title='Velit et ullamco nisi elit voluptate'
            body='Veniam proident in anim ea velit minim laborum voluptate ullamco mollit exercitation qui reprehenderit excepteur. Pariatur irure cillum incididunt veniam ea adipisicing veniam sint anim ut. Quis labore reprehenderit minim dolor non et consectetur elit ea ea.'
          />
          <BasicCard title='Deserunt consectetur labore exercitation'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae suscipit iste aperiam labore?
            <span className='font-bold'> Lorem ipsum dolor sit amet consectet? </span>
            Magni error perferendis rerum corrupti accusamus cum itaque ducimus asperiores, sequi doloribus fuga nam
            earum nisi.
          </BasicCard>
        </div>
      </div>
      <div className='mb-4'>
        <h1 id='c-cards'>Complex Cards</h1>
        <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-2')}>
          <BasicCard
            title='Velit et ullamco nisi elit voluptate'
            body='Veniam proident in anim ea velit minim laborum voluptate ullamco mollit exercitation qui reprehenderit excepteur. Pariatur irure cillum incididunt veniam ea adipisicing veniam sint anim ut. Quis labore reprehenderit minim dolor non et consectetur elit ea ea.'
          />
          <BasicCard title='Deserunt consectetur labore exercitation'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae suscipit iste aperiam labore?
            <span className='font-bold'> Lorem ipsum dolor sit amet consectet? </span>
            Magni error perferendis rerum corrupti accusamus cum itaque ducimus asperiores, sequi doloribus fuga nam
            earum nisi.
          </BasicCard>
        </div>
      </div>
    </DefaultLayout>
  )
}
