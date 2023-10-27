import React, { useState, useEffect } from "react";
import { Button, Col, Row, Layout } from "antd";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/product.reducer";
import { DtoProduct } from "../redux/product.type";
import { Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState<DtoProduct[]>([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;
  const { Meta } = Card;
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      console.log(response);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const filterProduct = (cat: any) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }

  const addProduct = (product: DtoProduct) => {
    const newProduct = { ...product, quantity: 1 }
    dispatch(addProducts(newProduct))
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5" style={{ paddingBottom: 20 }}>
          <Button type="default" onClick={() => setFilter(data)} style={{marginRight: 10}}>All</Button>
          <Button type="default" onClick={() => filterProduct("men's clothing")} style={{marginRight: 10}}>Men's Clothing</Button>
          <Button type="default" onClick={() => filterProduct("women's clothing")} style={{marginRight: 10}}>
            Women's Clothing
          </Button>
          <Button type="default" onClick={() => filterProduct("jewelery")} style={{marginRight: 10}}>Jewelery</Button>
          <Button type="default" onClick={() => filterProduct("electronics")} style={{marginRight: 10}}>Electronics</Button>
        </div>

        {filter.map((product) => {
          return (
            <div style={{width: '90%', marginRight: 'auto', marginLeft: 'auto'}}>
              <Card
                hoverable
                style={{ width: '14.28%', marginTop: 5, float: 'left', alignItems: 'center', textAlign: 'center', maxHeight: 500, marginLeft: 25}}
                cover={<img alt="example" src={product.image} height={300} onClick={() => navigate("/product/" + product.id)} /> }
              >
                <Meta title={product.title} description={product.description.substring(0, 80) + "..."}/>
                <Button style={{ margin: 5, }} type="primary" icon={<PlusOutlined />} onClick={() => { addProduct(product) }}> Add to Cart </Button>
              </Card>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Layout.Content>
        <Row justify="center" align="middle">
          <Col span={24}>
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={24}>
            <ShowProducts />
          </Col>
        </Row>
      </Layout.Content>
    </>
  );
};

export default Products;