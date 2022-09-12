import React from 'react'
import { useFormik } from "formik";

const initialValues = {
    name: "",
    email: "",
    phone: "",
    profile: "",
    brand: "",
  };

const Form = () => {
    const onSubmit = (values) => {
        console.log(values);
      };
      const formik = useFormik({
        initialValues,
        onSubmit,
      });
    
  return (
    <div>
      <div>Request For Quote</div>
      <div>
            <form
              className="flex flex-col space-y-4 w-80"
              onSubmit={formik.handleSubmit}
            >
                <input 
                id="name"
                name="name"
                label="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text" placeholder="Search" />              
              <button
                type="submit">
                Continue
              </button>
            </form>
          </div>
    </div>
  )
}

export default Form
