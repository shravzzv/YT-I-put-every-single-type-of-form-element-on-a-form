import PropTypes from 'prop-types'

Section1.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
  incLevel: PropTypes.func,
}

export default function Section1({ data, handleChange, incLevel }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    incLevel()
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Basic input types</legend>

        <div className='formControl'>
          <label htmlFor='email'>Text</label>
          <input
            type='text'
            name='text'
            id='text'
            value={data.text}
            onChange={handleChange}
            required
            placeholder='text is the most common input'
          />
        </div>

        <div className='formControl'>
          <label htmlFor='number'>Number</label>
          <input
            type='number'
            name='number'
            id='number'
            value={data.number}
            onChange={handleChange}
            required
            placeholder='any number'
          />
        </div>

        <div className='formControl'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={data.email}
            onChange={handleChange}
            required
            placeholder='johndoe@mail.com'
          />
        </div>

        <div className='formControl'>
          <label htmlFor='email'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={data.password}
            onChange={handleChange}
            required
            minLength={8}
            placeholder='8 character password'
          />
        </div>

        <button type='submit'>Next</button>
      </fieldset>
    </form>
  )
}
