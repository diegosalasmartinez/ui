import DefaultLayout from '@/components/layout/DefaultLayout'
import BasicAlerts from './BasicAlerts'
import DescriptionAlerts from './DescriptionAlerts'

const nav = [
  { title: 'Basic Alerts', href: 'basic-alerts' },
  { title: 'Description Alerts', href: 'description-alerts' },
]

export default function Alert() {
  return (
    <DefaultLayout title='UI Design System' nav={nav}>
      <BasicAlerts />
      <DescriptionAlerts />
    </DefaultLayout>
  )
}
