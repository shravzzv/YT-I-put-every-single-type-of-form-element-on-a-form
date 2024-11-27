import PropTypes from 'prop-types'

Section3.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
  incLevel: PropTypes.func,
  decLevel: PropTypes.func,
}

export default function Section3({ data, handleChange, decLevel, incLevel }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    incLevel()
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Date, time and Select</legend>

        <div className='formControl'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            name='date'
            id='date'
            value={data.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className='formControl'>
          <label htmlFor='time'>Time</label>
          <input
            type='time'
            name='time'
            id='time'
            value={data.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className='formControl'>
          <label htmlFor='select'>Select</label>
          <select
            name='select'
            id='select'
            value={data.select}
            onChange={handleChange}
          >
            <option value='first'>First</option>
            <option value='second'>Second</option>
          </select>
        </div>

        <button type='button' onClick={decLevel}>
          Previous
        </button>
        <button type='submit'>Next</button>
      </fieldset>
    </form>
  )
}
