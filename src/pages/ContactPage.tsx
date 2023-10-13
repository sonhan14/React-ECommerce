import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  // const [message, setMessage] = useState("");

  const handleClick = () => {
    if (email === "" || name === "") {
      alert("Please input all fields!");
      return;
    }
    navigate("/");
  };

  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
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

                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Name!",
                  },
                ]}
              >
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Item>
              <Form.Item

                label="Email"
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

                label="Message"
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Please input your message!",
                  },
                ]}
              >
                <TextArea rows={4} value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Item>
              <Form.Item className="loginbtn">
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={handleClick}
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
