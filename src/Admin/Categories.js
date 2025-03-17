import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="col-11 mx-auto card p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fw-bold">Categories</h2>
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#categoryModal"
          >
            <FaPlus className="me-1" /> Add Category
          </button>
        </div>

        {/* Table */}
        <div className="table-responsive mt-3">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Category Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mug</td>
                <td>Custom printed mugs</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2" data-bs-toggle="modal" data-bs-target="#categoryModal">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Hoodie</td>
                <td>Warm hoodies with designs</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2" data-bs-toggle="modal" data-bs-target="#categoryModal">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>T-Shirt</td>
                <td>Casual T-shirts with prints</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2" data-bs-toggle="modal" data-bs-target="#categoryModal">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Phone Case</td>
                <td>Stylish phone covers</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2" data-bs-toggle="modal" data-bs-target="#categoryModal">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="categoryModal" tabIndex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="categoryModalLabel">Add/Edit Category</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Category Name</label>
                  <input type="text" className="form-control" placeholder="Enter category name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" rows="3" placeholder="Enter category description"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save Category</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
