import { cn } from "@/utils/style"

interface ModalProps {
  title: string
  text?: string
  children?: React.ReactNode
  active: boolean
  onAccept?: (data: any) => void
  onClose: () => void
}

interface ModalWrapperProps {
  active: boolean
  children: React.ReactNode
}

export function ModalWrapper({ active, children }: ModalWrapperProps) {
  return (
    <>
      {/* <Overlay active={active} /> */}
      <div
        tabIndex={-1}
        aria-hidden={active.valueOf()}
        className={cn(
          'fixed inset-x-0 z-50 w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full',
          active ? 'top-0 flex animate-show_popup md:top-0' : 'hidden',
        )}
      >
        <div className='relative my-0 mx-auto h-full w-full max-w-2xl md:h-auto'>
          <div className='relative rounded-lg bg-white shadow dark:bg-gray-700'>{children}</div>
        </div>
      </div>
    </>
  )
}