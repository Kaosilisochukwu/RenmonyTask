import * as yup from "yup";

export const EligibilityValidation = yup.object().shape({
  state: yup.string().required("Required"),
  lga: yup.string().required("Required"),
  monthlyIncome: yup.string().required("Required"),
  BVN: yup
    .string()
    .matches(/\d{11}/, "BVN must contain 11 digits")
    .required("Required"),
  DOB: yup.string().required("Required"),
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  middleName: yup.string().required("Required"),
  email: yup.string().email("Enter a valid Email").required("Required"),
  phoneNumber: yup
    .string()
    .matches(/\d{11}/, "Phone Number must contain 11 digits")
    .required("Required"),
  gender: yup.string().required("required"),
  employmentStatus: yup.string().required("Required"),
});

export const PersonalDetailsValidation = yup.object().shape({
  residentialStatus: yup.string().required("required"),
  residentialAddress: yup.string().required("Required"),
  dateMoved: yup.string().required("required"),
  maritalStatus: yup.string().required("required"),
  educationLevel: yup.string().required("required"),
});

export const EmploymentValidation = yup.object().shape({
  employer: yup.string().required("required"),
  employerSector: yup.string().required("required"),
  employmentStartDate: yup.string().required("required"),
  officeAddress: yup.string().required("required"),
  workEmail: yup.string().email("Must be a valid Email").required("required"),
});
