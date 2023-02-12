import DefaultLayout from '@/components/layout/DefaultLayout'
import BasicCards from './BasicCards'
import TabCards from './TabCards'

const nav = [
  { title: 'Basic Cards', href: 'basic-cards' },
  { title: 'Tab Cards', href: 'tab-cards' },
]

export default function Card() {
  return (
    <DefaultLayout title='UI Design System' nav={nav}>
      <BasicCards />
      <TabCards />
    </DefaultLayout>
  )
}
