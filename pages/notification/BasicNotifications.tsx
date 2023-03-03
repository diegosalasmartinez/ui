import { cn } from '@/utils/style'
import BasicAlert from '@/components/alert/BasicAlert'

export default function BasicNotifications() {
  return (
    <div id='basic-notifications' className='mb-6'>
      <h1 className='mb-4 text-xl font-bold'>Basic Alerts</h1>
      <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-2')}>
        <BasicAlert type='success'>This is a success alert.</BasicAlert>
        <BasicAlert type='info'>This is an info alert.</BasicAlert>
        <BasicAlert type='warning' message='This is a warning alert.' />
        <BasicAlert type='error' message='This is an error alert.' />
      </div>
    </div>
  )
}
