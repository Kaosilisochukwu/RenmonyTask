import React from "react";
import { PersonalDetailsValidation as schema } from "../validations/FormValidation";
import Input from "../atoms/Input";
import * as styles from "../constants/styles";
import SelectInput from "../atoms/SelectInput";
import Button from "../atoms/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const PersonalDetails = ({ changePage }: any) => {
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
            <h1>Personal Details</h1>
            <div>
              <div className="input-parent">
                <Input
                  type="text"
                  name="residentialAddress"
                  placeholder="10 Sola Street Oshodi"
                  label="Residential Address*"
                  styles={styles.inputStyles}
                  conainerStyle={{ width: "100%" }}
                  error={errors.residentialAddress}
                  errorMessage={errors.residentialAddress?.message}
                  register={register}
                />
              </div>
              <div className="input-parent">
                <SelectInput
                  name="residentialStatus"
                  label="Residential Status*"
                  items={["Owner", "Rented"]}
                  conainerStyle={{ width: "100%" }}
                  error={errors.residentialStatus}
                  errorMessage={errors.residentialAddress?.message}
                  register={register}
                />
              </div>
              <div className="input-parent">
                <Input
                  type="date"
                  name="dateMoved"
                  label="Date Moved*"
                  conainerStyle={{ width: "100%" }}
                  error={errors.dateMoved}
                  errorMessage={errors.dateMoved?.message}
                  register={register}
                />
              </div>
              <div className="input-parent">
                <SelectInput
                  name="maritalStatus"
                  label="Marital Status*"
                  items={["Siingle", "Married"]}
                  conainerStyle={{ width: "100%" }}
                  error={errors.maritalStatus}
                  errorMessage={errors.maritalStatus?.message}
                  register={register}
                />
              </div>
              <div className="input-parent">
                <SelectInput
                  name="educationLevel"
                  label="Level of Education*"
                  items={["Primary", "Secondary", "Graduate"]}
                  conainerStyle={{ width: "100%" }}
                  error={errors.educationLevel}
                  errorMessage={errors.educationLevel?.message}
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

export default PersonalDetails;
