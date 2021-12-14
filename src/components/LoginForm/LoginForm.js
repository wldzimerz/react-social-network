import { ErrorMessage, Field, Form, Formik } from "formik";
import request from "../../database/request";

import s from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <>
      <h3>Login</h3>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            request.loginUser(values);
            console.log(values);
            setSubmitting(false);
            resetForm({ email: "", password: "", rememberMe: false });
          }, 200);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.loginForm}>
            <label>E-mail</label>
            <Field type="email" name="email" className={s.textInput} />
            <ErrorMessage name="email" component="div" />
            <label>Password</label>
            <Field type="password" name="password" className={s.textInput} />
            <ErrorMessage name="password" component="div" />
            <label>
              <Field type="checkbox" name="rememberMe" className={s.checkInput} />
              remember me
            </label>
            <button type="submit" disabled={isSubmitting} className={s.loginBtn}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
