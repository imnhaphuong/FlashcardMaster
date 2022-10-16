import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 
 //Sign Up
 export const SignupSchema = Yup.object().shape({
   password: Yup.string()
     .min(6,({min})=> `Mật khẩu ít nhất ${min} ký tự!`)
     .max(32, ({max})=> `Mật khẩu không được dài quá ${max} ký tự!`)
     .required('Vui lòng nhập mật khẩu!'),
   rePassword: Yup.string()
     .min(6,({min})=> `Mật khẩu ít nhất ${min} ký tự!`)
     .max(32, ({max})=> `Mật khẩu không được dài quá ${max} ký tự!`)
     .required('Vui lòng nhập lại mật khẩu!'),
   email: Yup.string().email('Email chưa đúng định dạng!').required('Vui lòng nhập Email!'),
 });
 //Sign In
 export const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(6,({min})=> `Mật khẩu ít nhất ${min} ký tự!`)
    .max(32, ({max})=> `Mật khẩu không được dài quá ${max} ký tự!`)
    .required('Vui lòng nhập mật khẩu!'),
  email: Yup.string().email('Email chưa đúng định dạng!').required('Vui lòng nhập Email!'),
});