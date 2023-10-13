import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row, Skeleton, Layout } from "antd";
import { Link } from "react-router-dom";

// React code
export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: null
    }
}
const Products = () => {
    const [data, setData] = useState<IProduct[]>([]);
    const [filter, setFilter] = useState(data);
    let componentMounted = true;
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

    const addProduct = (product: IProduct) => {

    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons text-center py-5">
                    <Button type="default" size="small" onClick={() => setFilter(data)}>All</Button>
                    <Button type="default" size="small" onClick={() => filterProduct("men's clothing")}>Men's Clothing</Button>
                    <Button type="default" size="small" onClick={() => filterProduct("women's clothing")}>
                        Women's Clothing
                    </Button>
                    <Button type="default" size="small" onClick={() => filterProduct("jewelery")}>Jewelery</Button>
                    <Button type="default" size="small" onClick={() => filterProduct("electronics")}>Electronics</Button>
                </div>

                {filter.map((product) => {
                    return (
                        <div id={product.id.toString()} key={product.id} className="product-card">
                            <img src={product.image} alt="Card" height={300} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                                <p className="card-text">{product.description.substring(0, 90)}...</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item lead">$ {product.price}</li>
                            </ul>
                            <div className="card-body">
                                <Link to={"/product/" + product.id} className="btn btn-dark m-1">Buy Now</Link>
                                <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>Add to Cart</button>
                            </div>
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