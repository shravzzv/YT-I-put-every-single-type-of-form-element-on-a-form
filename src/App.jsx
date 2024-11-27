import { useState } from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

function App() {
  0
  const [level, setLevel] = useState(0)
  const [data, setData] = useState({
    text: '',
    number: '',
    email: '',
    password: '',

    search: '',
    textarea: '',
    tel: '',
    url: '',

    date: '',
    time: '',
    select: '',

    checkbox: false,
    range: 60,
    radio: 'option1',
    file: '',
  })

  const incLevel = () => setLevel((level) => level + 1)
  const decLevel = () => setLevel((level) => level - 1)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setData((prevState) => ({
        ...prevState,
        [name]: checked,
      }))
    } else {
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }
  }

  const handleMultiStepFormSubmit = (e) => {
    e.preventDefault()
    alert('Form has been submitted')
    console.info(data)
  }

  return (
    <>
      {level === 0 && (
        <Section1 data={data} handleChange={handleChange} incLevel={incLevel} />
      )}

      {level === 1 && (
        <Section2
          data={data}
          handleChange={handleChange}
          incLevel={incLevel}
          decLevel={decLevel}
        />
      )}

      {level === 2 && (
        <Section3
          data={data}
          handleChange={handleChange}
          incLevel={incLevel}
          decLevel={decLevel}
        />
      )}

      {level === 3 && (
        <Section4
          data={data}
          handleChange={handleChange}
          decLevel={decLevel}
          handleMultiStepFormSubmit={handleMultiStepFormSubmit}
        />
      )}
    </>
  )
}

export default App
