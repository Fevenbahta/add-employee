import React from 'react';
export const TextInput = ({ 
  label, 
  name, 
  placeholder, 
  value, 
  onChange, 
  type = 'text',
  required = false,
  error,
  className = ''
}) => {
  return (
    <div className="mb-3">
      {label && (
        <label 
          htmlFor={name} 
          className="block text-sm font-medium text-[#414141] mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          bg-[#ffffff]
          w-full px-2 py-2 
          border-1 border-[#949494] 
          rounded-sm 
          text-gray-900 
          placeholder-gray-400
          focus:outline-none 
          focus:ring-1 
          focus:ring-[#1D3752] 
          focus:border-transparent
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default TextInput;
