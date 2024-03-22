import * as yup from "yup";
import { CONTACT_TYPE } from "~/constants/common";

export const contactSearchValidationSchema = yup.object({
  title: yup.string(),
  location: yup.array().of(yup.string()).nullable(),
  seniorty: yup.array().of(yup.string()).nullable(),
  department: yup.array().of(yup.string()).nullable(),
  industry: yup.array().of(yup.string()).nullable(),
  subIndustry: yup.array().of(yup.string()).nullable(),
});

export type ContactSearchFields = keyof yup.Asserts<
  typeof contactSearchValidationSchema
>;

export const addCustomContactValidationSchema = yup.object({
  type: yup.number().required(),
  value: yup.string().when("type", (_type) => {
    if (_type && (_type as unknown as CONTACT_TYPE) == CONTACT_TYPE.EMAIL) {
      return yup
        .string()
        .required("This field is required")
        .email("Email is invalid");
    }
    return yup
      .string()
      .required("This field is required")
      .test("len", `Invalid phone number`, (val) => {
        const formats = [/^\d{8,10}$/];
        return formats.some((format) => format.test(val || ""));
      });
  }),
});
