import React from "react";

import { Layout, Row, Col, Card } from "antd";

const AboutPage = () => {
  return (
    <Layout.Content>
      <h1 className="text-center">About Us</h1>
      <hr />
      <div className="container">

        <p className="lead text-center aboutDiv">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facere doloremque veritatis odit similique sequi. Odit amet fuga nam
          quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
          totam vero quas provident ipsam, veritatis nostrum velit quos
          recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
          earum unde eligendi autem praesentium, doloremque distinctio nesciunt
          porro tempore quis eaque labore voluptatibus ea necessitatibus
          exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
          tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
          quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
          delectus expedita a alias nam recusandae illo debitis repellat libero,
          quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
          dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
        </p>

        <h2 className="text-center py-4 aboutDiv">Our Products</h2>
        <div className="aboutDiv">
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Card
                hoverable
                cover={<img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />}
                title="Mens's Clothing"
              />
            </Col>
            <Col span={6}>
              <Card
                hoverable
                cover={<img src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />}
                title="Women's Clothing"
              />
            </Col>
            <Col span={6}>
              <Card
                hoverable
                cover={<img src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />}
                title="Jewelery"
              />
            </Col>
            <Col span={6}>
              <Card
                hoverable
                cover={<img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />}
                title="Electronics"
              />
            </Col>
          </Row>
        </div>

      </div>

    </Layout.Content>
  );
};

export default AboutPage;
