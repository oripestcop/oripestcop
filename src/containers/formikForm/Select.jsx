import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const Select = (props) => {
    const { label, name, options, ...rest} = props

  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} as='select'>
            {
                options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.key}
                    </option>
                ))
            }
        </Field>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select