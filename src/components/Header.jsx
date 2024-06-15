import logo from '../assets/logo.png';

const Header = () => {
  return (
    <>
    <header className='header-part'>
    <h4>Wholesale - Pros Only</h4>
    <h4>Retail</h4>
    <div>
    <input className='search-bar' placeholder='Search by name,category...'/>
   <button className='button-search'>Search</button>
    
    </div>
    <h4>Community</h4>
    <h4>Account</h4>
    <h4>Cart</h4>

    
    
    </header>
    <div className='category'>
    <div className='logo-part'>
    <img src={logo}/>
    <h2>PainfulPleasures</h2></div>
    <h4>Body Jewelry</h4>
    <h4>Piercing</h4>
    <h4>Tatoo</h4>
    <h4>Medical</h4>
    <h4>Studio</h4>
    </div>
    
    
    </>
  )
}

export default Header