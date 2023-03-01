import DefaultLayout from '@/components/layout/DefaultLayout'
import BasicAlerts from './BasicAlerts'
import ClosableAlerts from './ClosableAlerts'
import DescriptionAlerts from './DescriptionAlerts'
import IconAlerts from './IconAlerts'

const nav = [
  { title: 'Basic Alerts', href: 'basic-alerts' },
  { title: 'Description Alerts', href: 'description-alerts' },
  { title: 'Icon Alerts', href: 'icon-alerts' },
  { title: 'Closable Alerts', href: 'closable-alerts' },
]

export default function Alert() {
  return (
    <DefaultLayout title='UI Design System' nav={nav}>
      <BasicAlerts />
      <DescriptionAlerts />
      <IconAlerts />
      <ClosableAlerts />
    </DefaultLayout>
  )
}
