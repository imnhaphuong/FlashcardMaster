
import * as Yup from 'yup';

//Sign Up
export const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, ({ min }) => `Mật khẩu ít nhất ${min} ký tự!`)
    .max(32, ({ max }) => `Mật khẩu không được dài quá ${max} ký tự!`)
    .required('Vui lòng nhập mật khẩu!'),
  rePassword: Yup.string()
    .min(6, ({ min }) => `Mật khẩu ít nhất ${min} ký tự!`)
    .max(32, ({ max }) => `Mật khẩu không được dài quá ${max} ký tự!`)
    .required('Vui lòng nhập lại mật khẩu!'),
  email: Yup.string().email('Email chưa đúng định dạng!').required('Vui lòng nhập Email!'),
});
//Sign In
export const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, ({ min }) => `Mật khẩu ít nhất ${min} ký tự!`)
    .max(32, ({ max }) => `Mật khẩu không được dài quá ${max} ký tự!`)
    .required('Vui lòng nhập mật khẩu!'),
  email: Yup.string().email('Email chưa đúng định dạng!').required('Vui lòng nhập Email!'),
});
export const OTPSchema = Yup.object().shape({
  otp: Yup.string().max(4),

});
//UnitSchema
export const UnitSchema = Yup.object().shape({
  unitName: Yup.string().required('Tên học phần không được để trống'),
  flashCard: Yup.array().of(
    Yup.object().shape({
      term: Yup.string()
        .min(2, ({ min }) => `Thuật ngữ ít nhất ${min} ký tự!`)
        .max(32, ({ max }) => `Thuật ngữ không được dài quá ${max} ký tự!`),
      define: Yup.string()
        .min(2, ({ min }) => `Định nghĩa ít nhất ${min} ký tự!`)
        .max(32, ({ max }) => `Định nghĩa không được dài quá ${max} ký tự!`),
      example:Yup.string()
      .min(2, ({ min }) => `Câu ví dụ ít nhất ${min} ký tự!`)
      .max(100, ({ max }) => `Câu ví dụ không được dài quá ${max} ký tự!`),
    })

  )

});