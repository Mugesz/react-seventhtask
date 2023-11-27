import React, { useContext } from "react";
import Navbar from "./Navbar";
import UserContext from "./context";
import { Link } from "react-router-dom";

const CreateBooks = () => {
  const { formik } = useContext(UserContext);

  const handleSubmit = (e) => {
    formik.handleSubmit(e);

    // Display an alert after successful form submission
    alert("Submitted successfully!");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="form-data">
          <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            <span style={{ color: "red", fontSize: "small" }}>
              {formik.errors.title}
            </span>
            <br />
            <br />
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={formik.values.author}
              onChange={formik.handleChange}
            />
            <span style={{ color: "red", fontSize: "small" }}>
              {formik.errors.author}
            </span>
            <br />
            <br />
            <label>ISBN Number</label>
            <input
              type="number"
              className="form-control"
              name="isbn"
              value={formik.values.isbn}
              onChange={formik.handleChange}
            />
            <br />
            <label>Published at</label>
            <input
              type="date"
              className="form-control"
              name="publication"
              value={formik.values.publication}
              onChange={formik.handleChange}
            />
            <div className="col-lg-12 mt-4">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="text-center">
          <Link className="btn" to="/">
            <button className="btn btn-success">View Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateBooks;
