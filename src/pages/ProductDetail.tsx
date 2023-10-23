import { Row, Col, Typography, Button, Image } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DtoProduct } from "../redux/product.type";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/product.reducer";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<DtoProduct>();
  const [similarProducts, setSimilarProducts] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
    };
    getProduct();
  }, [id]);

  const addProduct = (product: DtoProduct) => {
    const newProduct = { ...product, quantity: 1 }
    dispatch(addProducts(newProduct))
  }

  const ShowProduct = () => {
    if (product) {
      return (
        <div className="container my-5 py-2">
          <Row gutter={24}>
            <Col span={12}>
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
              />
            </Col>
            <Col span={12}>
              <Typography.Title level={4}>{product.category}</Typography.Title>
              <Typography.Title level={2}>{product.title}</Typography.Title>
              <Typography.Text>
                {product.rating && product.rating.rate}
                <i className="fa fa-star"></i>
              </Typography.Text>
              <Typography.Title level={3} className="my-4">
                ${product.price}
              </Typography.Title>
              <Typography.Text>{product.description}</Typography.Text>
              <Button
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </Button>
              <Link to="/cart">Go to Cart</Link>
            </Col>
          </Row>
        </div>
      );
    }
    return(
      <p>Product not found</p>
    )
  };

  const ShowSimilarProduct = () => {
    return (
      <p>a</p>
    );
  };

  return <div>
    <ShowProduct />
    <ShowSimilarProduct />
  </div>;
};

export default ProductDetail;
