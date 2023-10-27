import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { Button, ConfigProvider, Image, List } from "antd";
import { DtoProduct } from "../redux/product.type";
import { addProducts, deleteProducts } from "../redux/product.reducer";
import { useNavigate } from "react-router-dom";

export const height = window.innerHeight
export const width = window.innerWidth

const CartPage = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart.cart)
  const dispatch = useDispatch()
  const EmptyCart = () => {
    return (
      <div style={{ maxWidth: 1140, width: '100%', padding: 15, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginRight: -15, marginLeft: -15 }}>
          <div style={{ flex: '0 0 100%', maxWidth: '100%', paddingTop: 5, paddingBottom: 5, backgroundColor: '#f8f9fa', textAlign: 'center' }}>
            <h4>Your Cart is Empty</h4>
            <a href="/" style={{ color: '#343a40', borderColor: '#343a40', marginLeft: 4, marginRight: 4 }}>
              <i />
            </a>
          </div>
        </div>
      </div>
    );
  };

  const theme = {

    components: {
      List: {
        headerBg: '#F9B572',
        headerStyle: {
          borderRadius: '100px',
        },
      },
    },
  };

  const addProduct = (product: DtoProduct) => {
    dispatch(addProducts(product))
  }

  const deleteP = (product: DtoProduct) => {
    dispatch(deleteProducts(product))
  }


  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    cart.map((item) => {
      return (subtotal += item.price * item.quantity);
    });

    cart.map((item) => {
      return (totalItems += item.quantity);
    });

    


    const goToCheckOut = () => {
      navigate("/checkout")
    }
    

    return (
      <>

        <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between' }}>
          <ConfigProvider
            theme={theme}

          >
            <List
              style={{ width: '65%', maxHeight: height * 0.6, overflow: 'auto' }}
              header={<div style={{ fontWeight: 700, fontSize: 20, }}>Item List</div>}
              itemLayout="horizontal"
              bordered
              dataSource={cart}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <Image src={item.image} style={{ width: 100, height: 100 }}></Image>
                  <p style={{ fontWeight: 700, marginLeft: 50, width: '50%' }}>{item.title}</p>
                  <div style={{ width: '30%', marginLeft: 10, }}>
                    <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
                      <Button style={{ fontWeight: 700, }}
                        onClick={() => deleteP(item)}
                      >-</Button>
                      <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>{item.quantity}</p>
                      <Button style={{ fontWeight: 700 }}
                        onClick={() => addProduct(item)}
                      >+</Button>
                    </div>
                    <p style={{ textAlign: 'center', fontWeight: 700 }}>{item.quantity} x {item.price}</p>
                  </div>
                </List.Item>
              )}
            />


          </ConfigProvider>

          <ConfigProvider
            theme={theme}

          >
            <List

              style={{ width: '30%', maxHeight: 300 }}
              header={<div style={{ fontWeight: 700, fontSize: 20, }}>Order Summary</div>}
              itemLayout="horizontal"
              bordered
              dataSource={[1]}
              renderItem={(item) => (
                <List.Item>
                  <div style={{ padding: 10, width: '100%' }}>
                    <div style={{ display: 'flex', }}>
                      <p style={{ width: '60%' }}>Product ({totalItems})</p>
                      <p>${Math.round(subtotal)}</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <p style={{ width: '60%' }}>Shipping</p>
                      <p>${shipping}</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <p style={{ width: '60%', fontWeight: 700 }}>Total amount</p>
                      <p>${Math.round(subtotal + shipping)}</p>
                    </div>
                    <Button onClick={goToCheckOut} style={{ backgroundColor: '#55cbf2', width: '100%', fontWeight: 700 }}>Go to checkout</Button>
                  </div>

                </List.Item>
              )}
            />


          </ConfigProvider>
        </div>


      </>
    );
  };
  return (
    <div className="my-3 py-3" >
      <h1 className="text-center">Cart</h1>
      <hr />
      {cart.length > 0 ? <ShowCart /> : <EmptyCart />}
    </div>
  )
}
export default CartPage





