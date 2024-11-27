import PropTypes from 'prop-types'

Section4.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
  decLevel: PropTypes.func,
  handleMultiStepFormSubmit: PropTypes.func,
}

export default function Section4({
  data,
  handleChange,
  decLevel,
  handleMultiStepFormSubmit,
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    handleMultiStepFormSubmit(e)
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Advanced input types</legend>

        <div className='formControl'>
          <label htmlFor='checkbox'>Checkbox</label>
          <input
            type='checkbox'
            name='checkbox'
            id='checkbox'
            checked={data.checkbox}
            onChange={handleChange}
            required
          />
        </div>

        <div className='formControl'>
          <label htmlFor='range'>Range</label>
          <input
            type='range'
            name='range'
            id='range'
            value={data.range}
            onChange={handleChange}
            min={0}
            max={100}
            required
          />
        </div>

        <div className='formControl'>
          <label htmlFor='radio1'>Option1</label>
          <input
            type='radio'
            name='radio'
            id='radio1'
            defaultChecked
            value={'option1'}
            onChange={handleChange}
            checked={data.radio === 'option1'}
          />

          <label htmlFor='radio2'>Option2</label>
          <input
            type='radio'
            name='radio'
            id='radio2'
            value={'option2'}
            onChange={handleChange}
            checked={data.radio === 'option2'}
          />

          <label htmlFor='radio3'>Option3</label>
          <input
            type='radio'
            name='radio'
            id='radio3'
            value={'option3'}
            onChange={handleChange}
            checked={data.radio === 'option3'}
          />
        </div>

        <div className='formControl'>
          <label htmlFor='file'>File</label>
          <input type='file' name='file' id='file' />
        </div>

        <button type='button' onClick={decLevel}>
          Previous
        </button>
        <button type='submit'>Submit</button>
      </fieldset>
    </form>
  )
}
