import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (email === "" || password === "") {
      alert("Please input all fields!");
      return;
    }
    navigate("/");
  };
  return (
    <div className=" my-3 py-3">
      <h1 className="text-center">Login</h1>
      <hr />
      <div className="row my-4 h-100">
        <div>
          <Form
            layout="vertical"
            name="basic"
            style={{ minWidth: 500 }}
            labelCol={{ span: 10 }}
          >
            <Form.Item

              label="Email address "
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
              <p>
                New Here?{" "}
                <Link to="/register">
                  Register
                </Link>{" "}
              </p>
            </Form.Item>
            <Form.Item className="loginbtn">
              <Button
                type="default"
                htmlType="submit"
                onClick={handleClick}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


