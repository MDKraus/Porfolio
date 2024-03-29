import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER, LOGIN } from "../../utils/mutations.js";
import Auth from "../../utils/auth.js";
import "./Modal.css";

const Modal = ({ isOpen, onClose, currentTab, toggleModal }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);
  const [loginMutation] = useMutation(LOGIN);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      let token;

      if (currentTab === "Login") {
        const loginResponse = await loginMutation({
          variables: {
            username: formData.username,
            password: formData.password,
          },
        });
        token = loginResponse.data.addUser.token;
      } else if (currentTab === "Signup") {
        const signupResponse = await addUser({
          variables: {
            username: formData.username,
            password: formData.password,
          },
        });
        token = signupResponse.data.addUser.token;
      }
      Auth.login(token);
      setFormData({
        username: "",
        password: "",
      });
    } catch (error) {
      console.error("Mutatation error:", error);
    }
  };

  console.log("Modal isOpen:", isOpen, "currentTab:", currentTab);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {currentTab === "Login" && <h2>Login</h2>}
        {currentTab === "Signup" && <h2>Signup</h2>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />

          {currentTab === "Signup" && (
            <>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </>
          )}

          <button type="submit">
            {currentTab === "Login" ? "Login" : "Signup"}
          </button>
        </form>
        <p>
          {currentTab === "Login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleModal();
            }}
          >
            {currentTab === "Login" ? "Sign up here" : "Login here"}
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Modal;
