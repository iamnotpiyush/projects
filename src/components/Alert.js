import React from 'react'

export default function Alert(props) {
    const capitilized=(word)=>{
        const lower=word.toLowerCase();
        return  lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    props.alert &&  <div>
        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>  {capitilized(props.alert.type)}: </strong>{props.alert.mess}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>
    </div>
  )
}