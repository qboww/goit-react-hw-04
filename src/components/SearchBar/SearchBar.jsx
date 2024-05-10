import React from "react";
import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={css.barHeader}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values.query);
          resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
