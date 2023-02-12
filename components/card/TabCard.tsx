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
    <div className={cn('flex flex-col', 'rounded-lg bg-white shadow-md', 'dark:bg-gray-800')}>
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

interface TabCardItemProps {
  value: string
  text: string
  active: boolean
  onClick: (value: string) => void
}

function TabCardItem({ value, text, active, onClick }: TabCardItemProps) {
  const handleClickTab = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    onClick(value)
  }

  return (
    <div
      className={cn(
        'border-b-2 border-b-transparent px-5 pt-3 pb-2 text-base text-gray-900',
        'hover:cursor-pointer hover:border-b-2 hover:border-b-indigo-300',
        active ? 'border-b-2 border-b-indigo-700 hover:border-b-indigo-700 font-medium bg-indigo-50' : '',
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
