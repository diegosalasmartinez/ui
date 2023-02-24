import DefaultLayout from '@/components/layout/DefaultLayout'
import BasicAlerts from './BasicAlerts'
import DescriptionAlerts from './DescriptionAlerts'
import IconAlerts from './IconAlerts'

const nav = [
  { title: 'Basic Alerts', href: 'basic-alerts' },
  { title: 'Description Alerts', href: 'description-alerts' },
  { title: 'Icon Alerts', href: 'icon-alerts' },
]

export default function Alert() {
  return (
    <DefaultLayout title='UI Design System' nav={nav}>
      <BasicAlerts />
      <DescriptionAlerts />
      <IconAlerts />
    </DefaultLayout>
  )
}