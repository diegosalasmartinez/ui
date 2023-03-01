import { cn } from '@/utils/style'
import BasicAlert from '@/components/alert/BasicAlert'

export default function DescriptionAlerts() {
  return (
    <div id='description-alerts' className='mb-6'>
      <h1 className='mb-4 text-xl font-bold'>Description Alerts</h1>
      <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-2')}>
        <BasicAlert title='Look here!' type='success'>
          This is a success alert.
        </BasicAlert>
        <BasicAlert title='Look here!' type='info'>
          This is an info alert.
        </BasicAlert>
        <BasicAlert title='Look here!' message='This is a warning alert.' type='warning' />
        <BasicAlert title='Look here!' message='This is an error alert.' type='error' />
        <BasicAlert title='Look here!' message='This is a no type alert.' />
      </div>
    </div>
  )
}
