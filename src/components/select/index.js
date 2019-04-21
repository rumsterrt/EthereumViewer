import React from 'react'
import Select, { Async } from 'react-select'

const errorColor = '#d0469f'

const getStyles = (error, noIndicate, textColor, color, isDisabled) => ({
  container: (base, state) => ({
    ...base,
    width: '100%',
  }),
  control: (base, state) => ({
    ...base,
    borderRadius: '2px',
    border: `1px solid ${!isDisabled ? (error ? errorColor : color || '#6da4f2') : '9DA0A5'}`,
    backgroundColor: 'transparent',
    minHeight: '36px',
    ':hover': {
      borderColor: error ? `1px solid ${errorColor}` : '#4473b7',
    },
    width: '100%',
    flexWrap: 'nowrap',
  }),
  placeholder: base => ({
    ...base,
    color: color || '#818080',
    fontSize: '14px',
    fontWeight: '400',
  }),
  option: base => ({
    ...base,
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.87)',
  }),
  valueContainer: base => ({
    ...base,
    fontSize: '14px',
    fontWeight: '400',
    minWidth: '50px',
    flexWrap: 'nowrap',
    overflow: 'hidden',
  }),
  input: base => ({
    ...base,
    color: !isDisabled ? color || 'rgba(0, 0, 0, 0.87)' : '#9DA0A5',
  }),
  singleValue: base => ({
    color: !isDisabled ? textColor || '#222' : '#9DA0A5',
    whiteSpace: 'nowrap',
    flex: '1 1 100%',
  }),
  indicatorsContainer: base => ({
    ...base,
    display: noIndicate ? 'none' : base.display,
  }),
})

export default ({ async, error, textColor, placeholder = '', color, noIndicate = false, ...props }) =>
  async ? (
    <Async placeholder={placeholder} {...props} styles={getStyles(error, noIndicate)} noOptionsMessage={() => null} />
  ) : (
    <Select
      placeholder={placeholder}
      styles={getStyles(error, noIndicate, textColor, color, !props.options || props.options.length === 0)}
      {...props}
      isDisabled={!props.options || props.options.length === 0}
    />
  )
