import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";


function LoginForm({ values, errors, touched }) {
     
    return (
        <div>
            <Form>
                <div>
                    {touched.name && errors.name && <p>{errors.name}</p>}
                    <Field type="text" name="name" placeholder="Name" />
                </div>
                <div>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field type="email" name="email" placeholder="Email Address" />
                </div>
                <div>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field type="password" name="password" placeholder="Password" />
                </div>
                <label>
                    <Field type="checkbox" name="tos" checked={values.tos} />
                    Accept Terms of Service
                </label>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(3, "Name must be 3 characters or longer")
            .required("Name is required"),
        
        email: Yup.string()
            .email("Email address not valid")
            .required("Email address is required"),
        password: Yup.string()
            .min(6, "Password must be 6 characters or longer")
            .required("Password is required")
        
    }),

    handleSubmit: (values, {props: { updateUsers } }) => {
        axios
        .post("https://reqres.in/api/users_", values)

        .then(res => {
            console.log(res);
            updateUsers(res.data);
            
            
        })

        .catch(error => {
            console.log("Error is ", error);
        });

        

        
        

    }
})(LoginForm);

export default FormikLoginForm;

