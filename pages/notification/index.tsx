import BasicButton from '@/components/button/BasicButton'
import DefaultLayout from '@/components/layout/DefaultLayout'
import BasicNotification from '@/components/notification/BasicNotification'
import { cn } from '@/utils/style'
import { useState } from 'react'

const nav = [
  { title: 'Basic Notifications', href: 'basic-notifications' }
]

export default function Notification() {
  const [isActive, setIsActive] = useState(false)

  return (
    <DefaultLayout title='UI Design System' nav={nav}>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
        <button className='border' onClick={() => setIsActive(true)}>
          Success 
        </button>
      </div>
      { isActive && <BasicNotification icon title='Success' message='This is a success notification.' type='success'/>}
    </DefaultLayout>
  )
}
