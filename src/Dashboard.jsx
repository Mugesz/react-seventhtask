import React, { useContext } from "react";
import Navbar from "./Navbar";
import UserContext from "./context";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { formData, toDelete, toEdit } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {formData.map((item, index) => (
            <div key={index} className="col">
              <div className="card border-info bg-info">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h2>
                    Book Name: <span className="text-light">{item.title}</span>{" "}
                  </h2>
                </div>
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">
                    Author Name:{" "}
                    <span className="text-light">{item.author}</span>{" "}
                  </h3>
                  <br />
                  <h4 className="card-title">
                    ISBN Num: <span className="text-light">{item.isbn}</span>
                  </h4>
                  <h5 className="card-text">
                    Published At:
                    <span className="text-light"> {item.publication}</span>
                  </h5>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <Link to="/createbooks">
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => toEdit(index)}
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => toDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-3">
        <Link className="btn" to="/createbooks">
          <button className="btn btn-success">Create Books</button>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
