import { CircleNotch } from 'phosphor-react'
import React, { ReactElement } from 'react'

interface ButtonProps {
  type?: 'danger' | 'attention' | 'success' | 'continue' | 'ghost'
  disabled?: boolean
  label?: string
  action?: () => void
  hasIcon?: boolean
  icon?: ReactElement
  isLoading?: boolean
}

export default function Button({
  type,
  disabled,
  label,
  action,
  hasIcon,
  icon,
  isLoading,
}: ButtonProps) {
  const styles = {
    default:
      'bg-purple100 hover:bg-purple300  disabled:bg-gray300 disabled:text-gray500',
    danger: 'bg-danger hover:opacity-75 disabled:bg-disabledDanger',
    attention: 'bg-attention hover:opacity-75 disabled:bg-disabledAttention',
    success: 'bg-success hover:opacity-75 disabled:bg-disabledSuccess',
    continue: 'bg-continue hover:opacity-75 disabled:bg-disabledContinue',
    ghost:
      'bg-white text-purple300 border border-purple300 hover:bg-gray300 hover:border-transparent',
  }

  if (type === 'ghost') {
    return (
      <button
        onClick={action}
        disabled={disabled || isLoading}
        className={`${styles.ghost} w-fit px-4 rounded-md py-[12px] h-12 font-medium disabled:bg-gray300 disabled:text-gray500 transition duration-500 shadow-xl`}
      >
        {hasIcon ? (
          <div className="flex items-center gap-x-3">
            <div>{icon}</div>
            {isLoading ? (
              <CircleNotch
                className="animate-spin text-white mx-auto h-full"
                width={32}
              />
            ) : (
              <p className="hidden md:block">{label || 'Button'}</p>
            )}
          </div>
        ) : (
          <>
            {isLoading ? (
              <CircleNotch
                className="animate-spin text-white mx-auto h-full"
                width={32}
              />
            ) : (
              <p>{label || 'Button'}</p>
            )}
          </>
        )}
      </button>
    )
  } else {
    return (
      <button
        onClick={action}
        disabled={disabled || isLoading}
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
        } w-[135px] rounded-md py-3 px-4 h-12 font-medium text-white text-button transition duration-500 shadow-xl`}
      >
        {hasIcon ? (
          <div className="flex items-center gap-x-3 justify-center">
            <div>{icon}</div>
            <p className="hidden md:block">{label || 'Button'}</p>
          </div>
        ) : (
          <>
            {isLoading ? (
              <CircleNotch
                width={32}
                className="animate-spin text-white mx-auto h-full"
              />
            ) : (
              <p>{label || 'Button'}</p>
            )}
          </>
        )}
      </button>
    )
  }
}
