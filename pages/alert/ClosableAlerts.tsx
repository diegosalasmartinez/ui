import { cn } from '@/utils/style'
import BasicAlert from '@/components/alert/BasicAlert'

export default function ClosableAlerts() {
  return (
    <div id='closable-alerts' className='mb-6'>
      <h1 className='mb-4 text-xl font-bold'>Closable Alerts</h1>
      <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-2')}>
        <BasicAlert type='success' closable>
          This is a success alert.
        </BasicAlert>
        <BasicAlert icon type='warning' message='This is a warning alert.' closable />
        <BasicAlert type='info' title='Look here!' closable>
          This is an info alert.
        </BasicAlert>
        <BasicAlert icon type='error' title='Look here!' message='This is an error alert.' closable />
      </div>
    </div>
  )
}