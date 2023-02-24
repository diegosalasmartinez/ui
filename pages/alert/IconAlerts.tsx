import { cn } from '@/utils/style'
import BasicAlert from '@/components/alert/BasicAlert'

export default function IconAlerts() {
  return (
    <div id='icon-alerts' className='mb-6'>
      <h1 className='mb-4 text-xl font-bold'>Icon Alerts</h1>
      <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-2')}>
          <BasicAlert
            icon
            title='Look here!'
            type='success'
          >
            This is a success alert.
          </BasicAlert>
          <BasicAlert
            icon
            title='Look here!'
            type='info'
            closable
          >
            This is an info alert.
          </BasicAlert>
          <BasicAlert
            icon
            title='Look here!'
            message='This is a warning alert.'
            type='warning'
          />
          <BasicAlert
            icon
            title='Look here!'
            message='This is an error alert.'
            type='error'
          />
          <BasicAlert
            icon
            type='warning'
            message='This is a no type alert.'
          />
          <BasicAlert
            icon
            type='warning'
            title='Look here!'
          />
        </div>
    </div>
  )
}