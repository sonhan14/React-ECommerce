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
      <div class="main">
        <div class="search__container">
          <p class="search__title">
            Xin chào, Shopee có thể giúp gì cho bạn?
          </p>
          <div class="cssInput">
            <input class="search__input" type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div
        class="danhMuc"
        style="
        width: 998px;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 30px;
      "
      >
        <h2 style="padding-bottom: 10px">Danh mục</h5>
        <div
          style="
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 10px;
        "
        >
          <div style="display: flex;     border: 1px solid rgba(0,0,0,.16); padding: 10px; cursor: pointer; align-items: center">
            <img src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/690d84d4103544139d22ba177c6dca97.png" alt>
              <p style="padding-left: 10px">Mua sắm cùng shoppe</p>
          </div>
          <div style="display: flex;     border: 1px solid rgba(0,0,0,.16); padding: 10px; cursor: pointer; align-items: center">
            <img src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/c2fb3ede3472487c82131982f5ab8cbf.png" alt>
              <p style="padding-left: 10px">Khuyến Mãi & Ưu Đãi</p>
          </div>
          <div style="display: flex;     border: 1px solid rgba(0,0,0,.16); padding: 10px; cursor: pointer; align-items: center">
            <img src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/a7c785163abc4abcbeeaefcb5bc54cc1.png" alt>
              <p style="padding-left: 10px">Thanh Toán</p>
          </div>
          <div style="display: flex;     border: 1px solid rgba(0,0,0,.16); padding: 10px; cursor: pointer; align-items: center">
            <img src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/a0747397630545a7ae270dadfe73ecf5.png" alt>

              <p style="padding-left: 10px">Đơn Hàng & Vận Chuyển</p>
          </div>
          <div style="display: flex;     border: 1px solid rgba(0,0,0,.16); padding: 10px; cursor: pointer; align-items: center">
            <img src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/f2bc745edbfd4d7095d87da7dade354a.png" alt>
              <p style="padding-left: 10px">Trả Hàng & Hoàn Tiền</p>
          </div>
          <div style="display: flex;     border: 1px solid rgba(0,0,0,.16); padding: 10px; cursor: pointer; align-items: center">
            <img src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/helpcenterfe/hc-category-icons/83c742e5e2cb4f108ea4ee942aa68af2.png" alt>

              <p style="padding-left: 10px">Thông Tin Chung</p>
          </div>
        </div>
      </div>
      <div
        class="cauHoiThuongGap"
        style="width: 800px; margin: 0 auto; margin-bottom: 30px;"
      >
        <h2 style="margin-bottom: 10px;">Câu hỏi thường gặp</h2>
        <div>
          <ul>
            <li
              class="liHover"
              style="
              padding: 15px 10px;
              border-top: 1px dashed grey;
              border-bottom: 1px dashed #000;
            "
            >
              [Dịch vụ] Làm sao để liên hệ Chăm sóc Khách hàng (CSKH) ?
            </li>
            <li
              class="liHover"
              style="
              padding: 15px 10px;
              border-top: 1px dashed grey;
              border-bottom: 1px dashed #000;
            "
            >
              [Tài khoản Shopee] Tôi không thể đặt hàng/đăng ký/đăng nhập tài khoản do số điện thoại đã tồn tại
            </li>
            <li
              class="liHover"
              style="
              padding: 15px 10px;
              border-top: 1px dashed grey;
              border-bottom: 1px dashed #000;
            "
            >
              [Thành viên mới] Tại sao tôi không thể đăng ký tạo tài khoản Shopee bằng số điện thoại của mình?
            </li>

            <li
              class="liHover"
              style="
              padding: 15px 10px;
              border-top: 1px dashed grey;
              border-bottom: 1px dashed #000;
            "
            >
              [Lỗi] Cách xử lý khi hệ thống không thể xác minh tài khoản Shopee của tôi để đăng nhập? Tại sao hệ thống không thể xác minh được yêu cầu đăng nhập của tôi?
            </li>
            <li
              class="liHover"
              style="
              padding: 15px 10px;
              border-top: 1px dashed grey;
              border-bottom: 1px dashed #000;
            "
            >
              CHÍNH SÁCH BẢO MẬT
            </li>
            <li
              class="liHover"
              style="
              padding: 15px 10px;
              border-top: 1px dashed grey;
              border-bottom: 1px dashed #000;
            "
            >
              [Thông tin vận chuyển] Làm sao để liên hệ Đơn vị vận chuyển/tra cứu thông tin vận chuyển/hối giao hàng?
            </li>
            <li
              class="liHover"
              style="
              padding: 15px 10px;
              border-top: 1px dashed grey;
              border-bottom: 1px dashed #000;
            "
            >
              [Trả hàng/Hoàn tiền] Hướng dẫn trả hàng sau khi yêu cầu Trả hàng/Hoàn tiền của bạn được chấp nhận
            </li>
            <li
              class="liHover"
              style="
              padding: 15px 10px;
              border-top: 1px dashed grey;
              border-bottom: 1px dashed #000;
            "
            >
              [Đơn hàng] Tôi phải làm gì nếu đơn hàng bị cập nhật sai trạng thái/chưa nhận được hàng?
            </li>
            <li
              class="liHover"
              style="
              padding: 15px 10px;
              border-top: 1px dashed grey;
              border-bottom: 1px dashed #000;
            "
            >
              [Trả hàng/Hoàn tiền] Các Câu Hỏi Thường Gặp Của Người Mua
            </li>
          </ul>
        </div>
      </div>
      <div
        class="footer"
        style="width: 100%;padding: 30px; background-color: #f5f5f5; text-align: center;"
      >
        <h3 style="padding: 20px 0;">Bạn có muốn tìm thêm thông tin gì không?</h5>
        <div style="display: flex;justify-content:center;">
          <div style="border: 1px solid black;padding: 10px;width: 150px; background: #fff">
            <div> 19001221</div>
          </div>
          <div style="margin-left: 20px ;border: 1px solid black;padding: 10px;width: 150px; background: #fff">
            <div>icon Email</div>
          </div>
        </div>
      </div>
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
