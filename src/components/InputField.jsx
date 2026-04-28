import { useState } from 'react'

/**
 * InputField — Reusable form input component
 *
 * Props:
 * - id: string — input id and label htmlFor
 * - type: string — input type (email, password, text)
 * - label: string — accessible label text
 * - placeholder: string — input placeholder
 * - value: string — controlled value
 * - onChange: fn — change handler
 * - required?: boolean — HTML5 required attribute
 */
function InputField({
  id,
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  required = false,
}) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword && showPassword ? 'text' : type

  return (
    <div className="flex flex-col gap-1.5">
      {/* Accessible label — visually hidden but available to screen readers */}
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          aria-required={required}
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 ease-out
            hover:border-gray-300 hover:bg-white
            focus:border-violet-600 focus:bg-white focus:ring-2 focus:ring-violet-600/20
            active:scale-[0.995]"
        />

        {/* Password visibility toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-violet-600 transition-colors hover:text-violet-700 focus:text-violet-700"
            tabIndex={-1}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
    </div>
  )
}

export default InputField

