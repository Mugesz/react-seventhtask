import React, { createContext, useState, useEffect } from "react";
import { useFormik } from "formik";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("formData");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      isbn: "",
      publication: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.title === "") {
        errors.title = "Title required";
      }
      if (values.title.length < 3 || values.title.length > 15) {
        errors.title = "title should be greter than 3 or lesser than 10 words";
      }
      if (values.author === "") {
        errors.author = "Title required";
      }

      if (values.author.length < 3 || values.author.length > 15) {
        errors.author =
          "name should be greater than 3 or lesser than 15 letters";
      }
      return errors;
    },
    onSubmit: (values, formikbag) => {
      console.log("Form values on submit:", values);
      console.log("Edit index:", editIndex);

      const newFormData = [...formData];

      if (editIndex !== null) {
        newFormData[editIndex] = values;
        setEditIndex(null); // Reset editIndex after editing
      } else {
        newFormData.push(values);
      }

      setFormData(newFormData);
      localStorage.setItem("formData", JSON.stringify(newFormData));

      formikbag.resetForm();
    },
  });

  const toDelete = (index) => {
    let reduced = [...formData];
    reduced.splice(index, 1);
    setFormData(reduced);
  };
  const toEdit = (index) => {
    console.log("Editing index:", index);
    const editUser = formData[index];
    console.log("Edit user data:", editUser);
    formik.setValues({
      title: editUser.title,
      author: editUser.author,
      isbn: editUser.isbn,
      publication: editUser.publication,
    });
    setEditIndex(index);
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <UserContext.Provider value={{ formik, formData, toDelete, toEdit }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
