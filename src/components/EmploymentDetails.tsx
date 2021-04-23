import { EmploymentValidation as schema } from "../validations/FormValidation";
import Input from "../atoms/Input";
import * as styles from "../constants/styles";
import SelectInput from "../atoms/SelectInput";
import Button from "../atoms/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const EmploymentDetails = ({ changePage }: any) => {
  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { isSubmitting } = formState;
  const submit = (data: any) => {
    changePage(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="container">
          <div className="form-container">
            <h1>Employment Details</h1>
            <div>
              <div className="input-parent">
                <Input
                  type="text"
                  placeholder="Zennith Bank"
                  label="Employer Name*"
                  styles={styles.inputStyles}
                  name="employer"
                  conainerStyle={{ width: "100%" }}
                  error={errors.employer}
                  errorMessage={errors.employer?.message}
                  register={register}
                />
              </div>
              <div className="input-parent">
                <SelectInput
                  label="Employer Sector*"
                  name="employerSector"
                  items={["Finance", "Banking", "Charity"]}
                  conainerStyle={{ width: "100%" }}
                  error={errors.employerSector}
                  errorMessage={errors.employerSector?.message}
                  register={register}
                />
              </div>
              <div className="input-parent">
                <Input
                  type="date"
                  label="Employment start date*"
                  name="employmentStartDate"
                  conainerStyle={{ width: "100%" }}
                  error={errors.employmentStartDate}
                  errorMessage={errors.employmentStartDate?.message}
                  register={register}
                />
              </div>
              <div className="input-parent">
                <Input
                  label="Office address*"
                  name="officeAddress"
                  type="text"
                  placeholder="77 Daramola Street, Ikoyi"
                  conainerStyle={{ width: "100%" }}
                  error={errors.officeAddress}
                  errorMessage={errors.officeAddress?.message}
                  register={register}
                />
              </div>
              <div className="input-parent">
                <Input
                  label="Work email*"
                  type="email"
                  name="workEmail"
                  placeholder="john.doe@zennith.com"
                  conainerStyle={{ width: "100%" }}
                  error={errors.workEmail}
                  errorMessage={errors.workEmail?.message}
                  register={register}
                />
              </div>
              <Button
                styles={styles.buttonStyles}
                title="Submit"
                type="submit"
                disable={isSubmitting}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmploymentDetails;
