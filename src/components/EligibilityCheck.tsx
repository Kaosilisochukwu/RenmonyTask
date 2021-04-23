import React, { useState, useEffect } from "react";
import { EligibilityValidation as schema } from "../validations/FormValidation";
import SelectInput from "../atoms/SelectInput";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import * as styles from "../constants/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const EligibilityCheck = ({ changePage, stateDetails }: any): any => {
  const states = stateDetails.map((state: any) => state.state).sort();
  const [selectedState, setSelectedState] = useState("Abia");
  const [lgas, setLgas] = useState<any>([]);

  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { isSubmitting } = formState;

  useEffect(() => {
    if (states && states.length > 0) {
      setLgas(
        stateDetails.find((detail: any) => detail.state === selectedState).lgas
      );
    }
  }, [selectedState, stateDetails, states]);

  const handleOnSelect = (e: any) => {
    setSelectedState(e.target.value);
    setLgas(
      stateDetails.find((detail: any) => detail.state === selectedState).lgas
    );
  };
  const submit = (data: any) => {
    changePage(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="container">
          <div className="form-container">
            <h1>Eligibility Check</h1>
            <div>
              <div className="input-parent">
                <Input
                  type="text"
                  placeholder="John"
                  name="firstName"
                  label="First Name*"
                  styles={styles.inputStyles}
                  conainerStyle={{ width: "100%" }}
                  error={errors.firstName}
                  errorMessage={errors.firstName?.message}
                  register={register}
                />
              </div>
              <div className="input-parent">
                <Input
                  type="text"
                  placeholder="Doe"
                  name="lastName"
                  label="Last Name*"
                  conainerStyle={{ width: "48%" }}
                  error={errors.lastName}
                  errorMessage={errors.lastName?.message}
                  register={register}
                />
                <Input
                  type="text"
                  placeholder="Henry"
                  name="middleName"
                  label="Middle Name*"
                  conainerStyle={{ width: "48%" }}
                  error={errors.middleName}
                  errorMessage={errors.middleName?.message}
                  register={register}
                />
              </div>
              <div className="input-parent">
                <Input
                  type="email"
                  placeholder="John@doe.com"
                  name="email"
                  label="Email*"
                  conainerStyle={{ width: "48%" }}
                  error={errors.email}
                  errorMessage={errors.email?.message}
                  register={register}
                />
                <Input
                  type="text"
                  placeholder="0806458745"
                  name="phoneNumber"
                  label="Phone Number*"
                  conainerStyle={{ width: "48%" }}
                  error={errors.phoneNumber}
                  errorMessage={errors.phoneNumber?.message}
                  register={register}
                />
              </div>
              <div className="input-parent">
                <Input
                  type="date"
                  name="DOB"
                  label="Date of Birth*"
                  conainerStyle={{ width: "48%" }}
                  error={errors.DOB}
                  errorMessage={errors.DOB?.message}
                  register={register}
                />

                <SelectInput
                  label="Employment Status*"
                  name="employmentStatus"
                  items={["Employed", "Self-Employed"]}
                  conainerStyle={{ width: "48%" }}
                  error={errors.employmentStatus}
                  errorMessage={errors.employmentStatus?.message}
                  register={register}
                />
              </div>
              <div className="input-parent">
                <SelectInput
                  label="State*"
                  name="state"
                  items={states}
                  conainerStyle={{ width: "32%" }}
                  onSelect={handleOnSelect}
                  error={errors.state}
                  errorMessage={errors.state?.message}
                  register={register}
                />
                <SelectInput
                  label="LGA*"
                  name="lga"
                  items={lgas}
                  conainerStyle={{ width: "32%" }}
                  error={errors.lga}
                  errorMessage={errors.lga?.message}
                  register={register}
                />

                <SelectInput
                  label="Gender*"
                  name="gender"
                  items={["male", "female"]}
                  conainerStyle={{ width: "32%" }}
                  error={errors.gender}
                  errorMessage={errors.gender?.message}
                  register={register}
                />
              </div>
              <div className="input-parent">
                <Input
                  type="number"
                  label="Monthly Income (₦)*"
                  name="monthlyIncome"
                  conainerStyle={{ width: "48%" }}
                  error={errors.monthlyIncome}
                  errorMessage={errors.monthlyIncome?.message}
                  register={register}
                />
                <Input
                  name="BVN"
                  type="number"
                  placeholder="11111111111"
                  label="BVN*"
                  conainerStyle={{ width: "48%" }}
                  error={errors.BVN}
                  errorMessage={errors.BVN?.message}
                  register={register}
                />
              </div>
              <Button
                styles={styles.buttonStyles}
                title="Next"
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

export default EligibilityCheck;
