import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import { Formik, Form } from "formik";
// @ts-ignore
import Loader from "react-loader-spinner";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your name!")
    .min(5, "Name is too short!")
    .max(50, "Name is too long"),
  email: Yup.string().required("Please enter your email!"),
  message: Yup.string()
    .required("Please enter your query!")
    .min(10, "Please describe your query a bit further!")
    .max(500, "Your query is too long!"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const ContactUs: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const postMessage = (values: FormValues) => {
    setTimeout(() => {
      setSubmitted(true);
    }, 5000);
  };

  if (submitted) {
    return (
      <Heading>
        Thanks for your query, we will contact you within 24 hours.
      </Heading>
    );
  }

  return (
    <Container id="contact">
      <Heading>Free Inquiry</Heading>
      <Formik
        validateOnBlur
        onSubmit={postMessage}
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={VALIDATION_SCHEMA}
      >
        {(formik) => {
          const {
            values,
            errors,
            touched,
            setFieldValue,
            handleSubmit,
            isSubmitting,
          } = formik;
          const { name, email, message } = values;

          if (isSubmitting) {
            return (
              <Loader
                type="Oval"
                color="#27ae60"
                height={100}
                width={100}
                timeout={5000}
              />
            );
          }

          return (
            <FormContainer>
              <Form onSubmit={handleSubmit}>
                <InputContainer>
                  <Label htmlFor="name">Your Full Name</Label>
                  <Input
                    required
                    name="name"
                    value={name}
                    type="text"
                    placeholder="Eg. Subham Khadka"
                    onChange={(e) => setFieldValue("name", e.target.value)}
                  />
                  {touched && errors.name && <Error>{errors.name}</Error>}
                </InputContainer>

                <InputContainer>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    required
                    name="email"
                    value={email}
                    type="email"
                    placeholder="Eg. subhamkhadka@gmail.com"
                    onChange={(e) => setFieldValue("email", e.target.value)}
                  />
                  {touched && errors.email && <Error>{errors.email}</Error>}
                </InputContainer>

                <InputContainer>
                  <Label htmlFor="message">Message</Label>
                  <TextArea
                    rows={5}
                    name="message"
                    value={message}
                    placeholder="Eg. I need a website for my clothing store."
                    onChange={(e) => setFieldValue("message", e.target.value)}
                  />
                  {touched && errors.message && <Error>{errors.message}</Error>}
                </InputContainer>

                <SubmitButton type="submit" value="Submit" />
              </Form>
            </FormContainer>
          );
        }}
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Heading = styled.span`
  font-size: 2rem;
  color: #111;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const FormContainer = styled.div`
  width: 40%;
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 32rem;
  padding: 1rem;
`;

const TextArea = styled.textarea`
  width: 32rem;
  padding: 1rem;
`;

const SubmitButton = styled.input`
  width: 34.2rem;
  outline: none;
  border: none;
  padding: 1rem 2rem;
  background-color: #27ae60;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.4rem;
`;

const Error = styled.span`
  color: red;
`;

export default ContactUs;
