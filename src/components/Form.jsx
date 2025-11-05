import { useState } from 'react'
import { PERSON_INFORMATION } from './person_information.js'
import { Fieldset, ElasticFieldset, Input } from "./Fieldset.jsx"
import '../styles/Form.css'
import Cv from "./Cv.jsx"

function duplicateFields(obj) {
  let newField = {}
   for (let [k, v] of Object.entries(obj)) {
      newField[k] = ""
  }
  return newField
}
 
export default function Form() {
  const [data, setData] = useState(PERSON_INFORMATION);
  const [counter, setCounter] = useState({
    education: 1,
    experience: 1
  });
  const [isSubmited, setIsSubmited] = useState(true);
  const [section, setSection] = useState(0)

  function onSubmitHandler(e) {
    e.preventDefault()
    e.stopPropagation()
    setIsSubmited(true)
  }

  if (isSubmited) {
    return <div>
      <Cv data={data}/>
      <div className="panel">
        <button className="back" onClick={() => setIsSubmited(false)}>Back</button>
      </div>
    </div>
  }

  const fns = {
    onChange: (data) => setData(data),
    onAdd: (e) => {
      let key = e.target.id
      if (counter[key] < 5) {
        setCounter({...counter, [key]: counter[key] + 1})
        let dup = {...data}
        const newField = duplicateFields(dup[key][0])
        newField.id = counter[key]
        dup[key].push(newField)
        setData(dup)
      }
    },
    onChange: (e) => {
      const target = e.target
      const {parent, index, name} = target.dataset
      let dup = {...data}
      dup[parent][Number(index)][name] = target.value
      setData(dup)
    },
    onRemove: (e) => {
      let key = e.target.id
      if (counter[key] > 1) {
        let dup = {...data}
        dup[key].pop()
        setData(dup)
        setCounter({...counter, [key]: counter[key] - 1})
      }
    }
  }
  const sections = [
  {
    title: "Profile",
    content: <Fieldset className="profile" data={data.profile[0]} onChangeHandler={fns.onChange}/>
    },   
  {
    title: "General",
    content: <Fieldset className="general" data={data.general[0]} onChangeHandler={fns.onChange}/>
    }, 
  {
    title: "Education",
    content: <ElasticFieldset counter={counter.education} className="education" data={data.education} 
      onChangeHandler={fns.onChange}
      onAddHandler={fns.onAdd}
      onRemoveHandler={fns.onRemove} />
  },
  {
    title: "Experience",
    content: <ElasticFieldset counter={counter.experience} className="experience" data={data.experience} 
      onChangeHandler={fns.onChange}
      onAddHandler={fns.onAdd}
      onRemoveHandler={fns.onRemove} />  
  }]
 
  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <h1>{sections[section].title}</h1>
      <h3>Step {section + 1} out of {sections.length}</h3>
      {sections[section].content}
      <div className="controls">
        {section > 0 && <button type="button" onClick={() => setSection(section - 1)}>Previous</button>}
          {section < sections.length-1 && <button type="button" onClick={() => setSection(section + 1)}>Next</button>}
      </div>
   
      {section == sections.length-1 && <button className="generate" type="submit">Generate</button>}
    </form>
  );
}




