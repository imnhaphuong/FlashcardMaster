import * as yup from "yup";

export const createClassSchema = yup.object({
    name: yup.string()
    .required("Tên lớp là bắt buộc")
    .min(3, "Tên quá ngắn")
    .max(40, "Tên quá dài"),
  });