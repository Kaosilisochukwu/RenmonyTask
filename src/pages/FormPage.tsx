import React, { useState } from "react";
import { StateInfo } from "../data/stateInfo";
import "./styles.css";
import EligibilityCheck from "../components/EligibilityCheck";
import EmploymentDetails from "../components/EmploymentDetails";
import PersonalDetails from "../components/PersonalDetails";
import { UserDetails } from "../models/formModels";
import { useHistory } from "react-router-dom";

const FormPage = () => {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [userDetails, setUserDetails] = useState<UserDetails>(
    new UserDetails()
  );
  const makeApiCall = (): void => {
    let info;
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "GET",
      mode: "no-cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => (info = data))
      .catch((err) => console.log(err, "Failed To Fetch data"));
    console.log(info);
  };
  const handlePageChange: any = (data: any) => {
    switch (page) {
      case 1:
        setUserDetails({ ...userDetails, eligibilityDetails: data });
        setPage(2);
        break;
      case 2:
        setUserDetails({ ...userDetails, personalDetails: data });
        setPage(3);
        break;
      case 3:
        setUserDetails({ ...userDetails, employmentDetails: data });
        console.log({ ...userDetails, EmploymentDetails: data });
        makeApiCall();
        setPage(1);
        history.push("/");
        break;
      default:
        break;
    }
  };

  return (
    <>
      {page === 1 && (
        <EligibilityCheck
          stateDetails={StateInfo}
          changePage={handlePageChange}
        />
      )}
      {page === 2 && <PersonalDetails changePage={handlePageChange} />}
      {page === 3 && <EmploymentDetails changePage={handlePageChange} />}
    </>
  );
};

export default FormPage;
