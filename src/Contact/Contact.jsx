import React from 'react'
import { useFormik } from 'formik'
import { singupSchema } from './schema'

const initialValues = {
  name:"",
  email:"",
  pass:"",
  cPass:""
}
const Contact = () => {
  document.title="Contact";
  
  let {values , errors , handleBlur ,touched, handleChange , handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema:singupSchema,
    onSubmit : (values , action) =>{
      console.log(values)
     action.resetForm();
    }  , 
  })
  
  return (
    <>
        <h1>Contact Page </h1>
      <form className='col-6 offset-3 my-5' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} className="form-control" name='name' id="exampleInputName1" aria-describedby="nameHelp" />
    {errors.name && touched.name ?(
    <div id="emailHelp" className="text-danger">{errors.name}</div>
    ): null}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
    {errors.email && touched.email ?(
    <div id="emailHelp1" className="text-danger">{errors.email}</div>
    ): null}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={values.pass} onChange={handleChange} onBlur={handleBlur} className="form-control" name='pass' id="exampleInputPassword1" />
    {errors.pass && touched.pass ?(
    <div id="emailHelp2" className="text-danger">{errors.pass}</div>
    ): null}
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" value={values.cPass} onChange={handleChange} onBlur={handleBlur} className="form-control" name='cPass' id="aexampleInputPassword1" />
    {errors.cPass && touched.cPass ?(
    <div id="emailHel2p" className="text-danger">{errors.cPass}</div>
    ): null}
  </div>
  

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default Contact