import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
  useParams,
} from 'react-router-dom';

// 퀴즈
/*
- **Home Page :** /
- **Product Detail Page** : /products/:id
    - ex) /products/1 , /products/2, /products/3, /products/4
- **Product Detail Notice Page :** /products/:id/notice
    - ex) /products/1/notice , /products/2/notice…
- **Cart Page :** /cart
- **User Page :** /users
- **Coupon Page :** /users/coupon
- **Question Page :** /users/question
- **Notice Page :** /users/notice
*/

function SolveRouter() {
  const productIds = [1, 2, 3, 4, 5];
  return (
    <BrowserRouter>
      <h1>퀴즈</h1>
      <Link to='/'> 홈페이지</Link>
      <br />
      {productIds.map((productId) => (
        <Link to={`/products/${productId}`}>상품{productId}</Link>
      ))}
      <br />
      <Link to='/cart'> 카트 </Link>
      <br />
      <Link to='/users'> users </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/products/:id/notice' element={<ProductNotice />} />
        <Route path='/cart' element={<Cart name='licat' />} />
        <Route path='/users/' element={<Users />}>
          <Route path='coupon' element={<div>쿠폰</div>}></Route>
          <Route path='question' element={<div>퀘스쳔</div>}></Route>
          <Route path='notice' element={<div>노티스</div>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return <h1>홈페이지임</h1>;
}

function Cart({ name }) {
  return <h1>{name} 카트임</h1>;
}

function Users() {
  return (
    <div>
      <Link to={'/users/coupon'}>usersCoupon</Link>
      <br />
      <Link to={'/users/question'}>Question</Link>
      <br />
      <Link to={'/users/notice'}>Notice</Link>

      <h1>Users임</h1>
      <Outlet />
    </div>
  );
}

function Products() {
  const { id } = useParams();
  return (
    <>
      <h1>hello Products {id}</h1>
      {/* . : 현재 경로 의미 */}
      <Link to={'./notice'}>Notice</Link>
    </>
  );
}

function ProductNotice() {
  const { id } = useParams();
  return <h1>hello Products {id} Notice</h1>;
}

export default SolveRouter;
