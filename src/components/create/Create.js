import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export function Create() {
  const options = ["A+","A-","B+","B-","O+","O-","AB+","Rh"]; //options for selection dropdown 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [blood, setBlood] = useState(options[0]); //options as initial state
  const [checkbox, setCheckBox] = useState(false);
  const [dob, setDOB] = useState();
  let navigate = useNavigate();

  const postData = () => {
    axios
      .post("https://63601bd3ca0fe3c21aacbbe0.mockapi.io/fakeKey", {
        firstName,
        lastName,
        blood,
        dob,
        checkbox,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <select value={blood} onChange={(e) => setBlood(e.target.value)}>
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </Form.Field>

        <Form.Field>
          <label>Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            value={checkbox}
            onChange={(e) => setCheckBox(!checkbox)}
          />
        </Form.Field>
        <Button type="submit" onClick={checkbox && postData}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Create;
