import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


interface CreateFormData{
  title:string,
  description:string
}
export const CreateForm =()=>{

 const schema = yup.object().shape({
    title:yup.string().required("You must add a title"),
    description:yup.string().required("You must add a Description")
})

  const {register,handleSubmit,formState:{errors}} =useForm<CreateFormData>({
    resolver:yupResolver(schema),
  })
  const onCreatePost=(data:CreateFormData)=>{
    console.log(data)
  
  }

  return  ( 
 <div>
  <form onSubmit={handleSubmit(onCreatePost)} > 
  <input placeholder="Title..."{...register("title")}/>
  <p style={{color:"red"}}>{errors.title}</p>
  <textarea placeholder="Description..."{...register("description")}/>
 <p style={{color:"red"}}>{errors.description}</p>
  <input type="submit"/>
</form>
</div>
  
  
  )
  
};