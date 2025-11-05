export function capitalize(str) {
  return str[0].toUpperCase() + str.toLowerCase().slice(1)
}
export function format(str) {
  if (!str.includes("_")) return capitalize(str)
  let a = str.split("_")
  return capitalize(a[0]).concat(" ", a[1])
}

function Label({ name, content }) {
  return <label htmlFor={name}>{capitalize(content)}</label>
}
export function Input(props) {
  const data = props.data
  return(
     <textarea
        id={props.id}
        pattern={props.pattern}
        value={props.value}
        data-parent={props.dataparent}
        data-index={props.dataindex}
        data-name={props.dataname}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />) 
}


export function ElasticFieldset(props) {
  const { counter, className, data, onChangeHandler, onAddHandler, onRemoveHandler } = props
  const fieldsets = Array.from(Array(counter)).map((c, i) => {
    return <>
      <Fieldset counter={counter} key={i.toString()} className={className} data={data[i]} onChangeHandler={onChangeHandler}/>
      </>
    })
  
  return(<div className="container">
    {fieldsets}
    <div className="f-actions">
       <button id={className} className="f-button add" type="button" onClick={onAddHandler}>Add</button>
    {counter > 1 &&  <button id={className} className="f-button rm" type="button" onClick={onRemoveHandler}>Remove</button> }
    </div>
   
  </div>)
}
function Info() {
  return <p style={{fontSize: "12px"}}>If you want a list separate the sentences by semicolons</p>
}
export function Fieldset(props) {
  const { data, className, onChangeHandler} = props
  return <fieldset className={className}>{
    Object.entries(data).filter(([k, v]) => k !== "id").map(([k, v], i) => {
      let id = data.id
      let name = className + '_' + k + "_" + id
      return <div className="field" key={name}>
        <Label name={name} content={format(k) }/>
        <Input
          id={name}
          value={v}
          pattern={k === "level" ? "[0-9]*" : ""}
          dataparent={className}
          dataindex={id}
          dataname={k}
          placeholder={v}
          onChange={onChangeHandler}/>
        {k === "responsibilities" && <Info/>}    
      </div>
    })
   }</fieldset>
}
