import '../styles/Cart.css'
const monsteraPrice = 8
const ivyPrice = 10
const flowerPrice = 15

const Cart = () => (<div className="lmj-cart">
    <h2>Panier</h2>
    <ul>
    <li>Monstera : {monsteraPrice}€</li>
     <li>Lierre : {ivyPrice}€</li>
     <li>Fleurs : {flowerPrice}€</li>
    </ul>
      Total : {monsteraPrice + ivyPrice + flowerPrice }€
      </div>)

export default Cart

