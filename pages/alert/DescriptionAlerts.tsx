import { cn } from '@/utils/style'
import BasicAlert from '@/components/alert/BasicAlert'

export default function DescriptionAlerts() {
  return (
    <div id='description-alerts' className='mb-6'>
      <h1 className='mb-4 text-xl font-bold'>Description Alerts</h1>
        <div className={cn('grid grid-cols-1 gap-4', 'md:grid-cols-2')}>
          <BasicAlert
            title='Excelente!'
            message='El usuario ha sido agregado correctamente.'
            type='success'
          />
          <BasicAlert
            title='Excelente!'
            message='Este es un alert de info.'
            type='info'
          />
          <BasicAlert
            title='Excelente!'
            message='Este es un alert de warning.'
            type='warning'
          />
          <BasicAlert
            title='Excelente!'
            message='Este es un alert de error.'
            type='error'
          />
        </div>
    </div>
  )
}


