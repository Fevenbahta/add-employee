import React from 'react';
export const SelectInput = ({ 
  label, 
  name, 
  value, 
  onChange, 
  options = [],
  required = false,
  error,
  className = '',
  placeholder = 'Select an option'
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
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`
          w-full 
          p-2 
          bg-[#ffffff]
          border border-1 border-[#949494]
          rounded-md 
          text-[#2B3674] 
          placeholder-[#8F9BBA]
          focus:outline-none 
          focus:ring-1 
          focus:ring-[#1D3752] 
          focus:border-transparent
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default SelectInput;