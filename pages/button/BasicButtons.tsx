import BasicButton from '@/components/button/BasicButton'
import { cn } from '@/utils/style'

export default function BasicButtons() {
  return (
    <div id='basic-buttons' className='mb-6'>
      <h1 className='mb-4 text-xl font-bold'>Basic Buttons</h1>
      <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-4')}>
        <BasicButton text='Primary' />
        <BasicButton text='Secondary' category='secondary' />
        <BasicButton text='Success' category='success' />
        <BasicButton text='Error' category='error' />
      </div>
    </div>
  )
}
