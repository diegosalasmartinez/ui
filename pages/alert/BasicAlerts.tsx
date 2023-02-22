import { cn } from '@/utils/style'
import BasicAlert from '@/components/alert/BasicAlert'

export default function BasicAlerts() {
  return (
    <div id='basic-alerts' className='mb-6'>
      <h1 className='mb-4 text-xl font-bold'>Basic Alerts</h1>
      <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-2')}>
        <BasicAlert type='success'>
          Magni error perferendis rerum corrupti accusamus cum itaque ducimus asperiores, sequi doloribus fuga nam
          earum nisi.
        </BasicAlert>
        <BasicAlert type='info'>
          Magni error perferendis rerum corrupti accusamus cum itaque ducimus asperiores, sequi doloribus fuga nam
          earum nisi.
        </BasicAlert>
        <BasicAlert type='warning'>
          Magni error perferendis rerum corrupti accusamus cum itaque ducimus asperiores, sequi doloribus fuga nam
          earum nisi.
        </BasicAlert>
        <BasicAlert type='error'>
          Magni error perferendis rerum corrupti accusamus cum itaque ducimus asperiores, sequi doloribus fuga nam
          earum nisi.
        </BasicAlert>
      </div>
    </div>
  )
}


