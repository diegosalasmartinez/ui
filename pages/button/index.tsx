import DefaultLayout from '@/components/layout/DefaultLayout'
import BasicButtons from './BasicButtons'
import OutlineButtons from './OutlineButtons'

const nav = [
  { title: 'Basic Buttons', href: 'basic-buttons' },
  { title: 'Outline Buttons', href: 'outline-buttons' },
]

export default function Button() {
  return (
    <DefaultLayout title='UI Design System' nav={nav}>
      <BasicButtons />
      <OutlineButtons />
      {/* <OutlineButtons />
      <TextButtons />
      <IconButtons />
      <FloatingButtons />
      <ButtonGroups />
      <ButtonSizes /> */}
    </DefaultLayout>
  )
}
