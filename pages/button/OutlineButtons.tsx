import OutlineButton from '@/components/button/OutlineButton'
import { cn } from '@/utils/style'

export default function OutlineButtons() {
  return (
    <div id='basic-buttons' className='mb-6'>
      <h1 className='mb-4 text-xl font-bold'>Outline Buttons</h1>
      <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-4')}>
        <OutlineButton text='Primary' />
        <OutlineButton text='Secondary' category='secondary' />
        <OutlineButton text='Success' category='success' />
        <OutlineButton text='Error' category='error' />
      </div>
    </div>
  )
}
