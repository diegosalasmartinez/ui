import { cn } from '@/utils/style'

interface TabCardProps {
  tabSelected: string
  tabs: { value: string; label: string }[]
  body?: string
  children?: React.ReactNode
  onClick: (value: string) => void
}

export default function TabCard({ tabSelected, tabs, body, children, onClick }: TabCardProps) {
  return (
    <div className={cn('flex flex-col', 'rounded-lg bg-white shadow-md border-gray-200 border-[0.5px]', 'dark:bg-gray-800')}>
      <div className='flex'>
        {tabs.map((item) => (
          <TabCardItem
            key={item.value}
            value={item.value}
            text={item.label}
            active={tabSelected === item.value}
            onClick={onClick}
          />
        ))}
      </div>
      <p className='my-2 p-4 text-sm text-gray-600 dark:text-gray-300'>{children ?? body}</p>
    </div>
  )
}

export function TabVerticalCard({ tabSelected, tabs, body, children, onClick }: TabCardProps) {
  return (
    <div className={cn('flex', 'rounded-lg bg-white shadow-md border-gray-200 border-[0.5px]', 'dark:bg-gray-800')}>
      <div className='flex shrink-0 grow-0 basis-1/4 flex-col'>
        {tabs.map((item) => (
          <TabCardItem
            key={item.value}
            vertical={true}
            value={item.value}
            text={item.label}
            active={tabSelected === item.value}
            onClick={onClick}
          />
        ))}
      </div>
      <p className='my-2 p-4 text-sm text-gray-600 dark:text-gray-300'>{children ?? body}</p>
    </div>
  )
}

interface TabCardItemProps {
  value: string
  text: string
  active: boolean
  vertical?: boolean
  onClick: (value: string) => void
}

function TabCardItem({ value, text, vertical = false, active, onClick }: TabCardItemProps) {
  const handleClickTab = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    onClick(value)
  }

  return (
    <div
      className={cn(
        'px-5 pt-3 pb-2 text-sm text-gray-900 hover:cursor-pointer ',
        vertical
          ? 'border-l-2 border-l-transparent hover:border-l-2 hover:border-l-indigo-300'
          : 'border-b-2 border-b-transparent hover:border-b-2 hover:border-b-indigo-300',
        active ? ' font-medium bg-indigo-50' : '',
        active && vertical ? 'border-l-2 border-l-indigo-700 hover:border-l-indigo-700' : '',
        active && !vertical ? 'border-b-2 border-b-indigo-700 hover:border-b-indigo-700' : '',
      )}
      onClick={handleClickTab}
    >
      {text}
    </div>
  )
}

interface TabCardContentProps {
  value: string
  tab: string
  children: React.ReactNode
}

export function TabCardContent({ value, tab, children }: TabCardContentProps) {
  return <>{value === tab && children}</>
}
