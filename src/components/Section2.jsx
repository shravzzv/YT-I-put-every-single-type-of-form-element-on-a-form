import PropTypes from 'prop-types'

Section2.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
  incLevel: PropTypes.func,
  decLevel: PropTypes.func,
}

export default function Section2({ data, handleChange, incLevel, decLevel }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    incLevel()
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>More basic input types</legend>

        <div className='formControl'>
          <label htmlFor='search'>Search</label>
          <input
            type='search'
            name='search'
            id='search'
            value={data.search}
            onChange={handleChange}
            required
            placeholder='search term'
          />
        </div>

        <div className='formControl'>
          <label htmlFor='tel'>Telephone</label>
          <input
            type='tel'
            name='tel'
            id='tel'
            value={data.tel}
            onChange={handleChange}
            required
            placeholder='9076823574'
          />
        </div>

        <div className='formControl'>
          <label htmlFor='url'>Url</label>
          <input
            type='url'
            name='url'
            id='url'
            value={data.url}
            onChange={handleChange}
            required
            placeholder='https://something.com'
          />
        </div>

        <div className='formControl'>
          <label htmlFor='textarea'>Textarea</label>
          <textarea
            name='textarea'
            id='textarea'
            value={data.textarea}
            onChange={handleChange}
            required
            placeholder='enter some text'
          ></textarea>
        </div>

        <button type='button' onClick={decLevel}>
          Previous
        </button>
        <button type='submit'>Next</button>
      </fieldset>
    </form>
  )
}
