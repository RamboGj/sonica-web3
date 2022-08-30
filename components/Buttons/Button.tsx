import React, { ReactElement } from 'react'

interface ButtonProps {
  type?: 'danger' | 'attention' | 'success' | 'continue' | 'ghost'
  disabled?: boolean
  label?: string
  action?: () => void
  hasIcon?: boolean
  icon?: ReactElement
}

export default function Button({
  type,
  disabled,
  label,
  action,
  hasIcon,
  icon,
}: ButtonProps) {
  const styles = {
    default: 'bg-purple100 hover:bg-purple300',
    danger: 'bg-danger hover:opacity-75',
    attention: 'bg-attention hover:opacity-75',
    success: 'bg-success hover:opacity-75',
    continue: 'bg-continue hover:opacity-75',
    ghost:
      'bg-white text-purple300 border border-purple300 hover:bg-gray300 hover:border-transparent',
  }

  if (type === 'ghost') {
    return (
      <button
        onClick={action}
        disabled={disabled}
        className={`${styles.ghost} w-fit px-4 rounded-md py-[12px] h-12 font-medium disabled:bg-gray300 disabled:text-gray500 transition duration-500 shadow-xl`}
      >
        {hasIcon ? (
          <div className="flex items-center gap-x-3">
            <div>{icon}</div>
            <p className="hidden md:block">{label || 'Button'}</p>
          </div>
        ) : (
          <p>{label || 'Button'}</p>
        )}
      </button>
    )
  } else {
    return (
      <button
        onClick={action}
        disabled={disabled}
        className={`${
          type === 'danger'
            ? `${styles.danger}`
            : type === 'attention'
            ? `${styles.attention}`
            : type === 'success'
            ? `${styles.success}`
            : type === 'continue'
            ? `${styles.continue}`
            : `${styles.default}`
        } w-[135px] rounded-md py-3 h-12 text-white text-button disabled:bg-gray300 disabled:text-gray500 transition duration-500 shadow-xl`}
      >
        {hasIcon ? (
          <div className="flex items-center gap-x-3">
            <div>{icon}</div>
            <p className="hidden md:block">{label || 'Button'}</p>
          </div>
        ) : (
          <p>{label || 'Button'}</p>
        )}
      </button>
    )
  }
}
