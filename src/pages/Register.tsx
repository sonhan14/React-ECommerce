import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (fullName === "" || email === "" || password === "") {
      alert("Please input all fields!");
      return;
    }
    navigate("/login");
  };

  return (
    <>
      <div className=" my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div >
            <Form labelCol={{ span: 10 }} layout="vertical">
              <Form.Item
                style={{ minWidth: 500 }}
                label="Full Name"
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Please input your full name!",
                  },
                ]}
              >
                <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </Form.Item>
              <Form.Item
                label="Email address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email address!",
                  },
                ]}
              >
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Item>
              <Form.Item>
                <p>Already has an account? <Link to="/login" >Login</Link> </p>
              </Form.Item>
              <Form.Item className="loginbtn">
                <Button
                  type="default"
                  onClick={handleSubmit}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
