import { useState } from 'react'
import { cn } from '@/utils/style'
import TabCard, { TabCardContent, TabVerticalCard } from '@/components/card/TabCard'
import BasicButton from '@/components/button/BasicButton'

const tabs = [
  { value: '1', label: 'Page 1' },
  { value: '2', label: 'Page 2' },
  { value: '3', label: 'Page too large' },
]

export default function TabCards() {
  const [tab, setTab] = useState('1')

  return (
    <div id='tab-cards' className='mb-6'>
      <h1 className='mb-4 text-xl font-bold'>Tab Cards</h1>
      <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-2')}>
        <TabCard tabSelected={tab} tabs={tabs} onClick={(value) => setTab(value)}>
          <TabCardContent value='1' tab={tab}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae suscipit iste aperiam labore?
            <span className='font-bold'> Lorem ipsum dolor sit amet consectet? </span>
            Magni error perferendis rerum corrupti accusamus cum itaque ducimus asperiores, sequi doloribus fuga nam
            earum nisi.
          </TabCardContent>
          <TabCardContent value='2' tab={tab}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellendus, suscipit quos laborum nulla
            reprehenderit placeat, totam ipsum quas accusantium ipsam quasi obcaecati labore fugit animi, ab illum
            tempora commodi.
          </TabCardContent>
        </TabCard>
        <TabVerticalCard tabSelected={tab} tabs={tabs} onClick={(value) => setTab(value)}>
          <TabCardContent value='1' tab={tab}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae suscipit iste aperiam labore?
            <span className='font-bold'> Lorem ipsum dolor sit amet consectet? </span>
            Magni error perferendis rerum corrupti accusamus cum itaque ducimus asperiores, sequi doloribus fuga nam
            earum nisi.
          </TabCardContent>
          <TabCardContent value='2' tab={tab}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea unde eveniet aliquid voluptates facilis libero
            ex laborum dolores, minus impedit, illo, quibusdam fugit neque voluptatem voluptatum! Eaque velit voluptas
            ullam.
            <div className='mt-3 flex justify-end gap-2'>
              <BasicButton text='Cancel' category='secondary' />
              <BasicButton text='Accept' />
            </div>
          </TabCardContent>
        </TabVerticalCard>
      </div>
    </div>
  )
}
