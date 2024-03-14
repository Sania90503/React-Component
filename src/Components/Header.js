import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart , faSearch , faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Header = ()=>{
    return(
        <>
<header>
    <div className="left">
         <span> AmaKart</span>
        <FontAwesomeIcon icon={faShoppingCart} className='shopCart' />
    </div>
    <div className="center">
    <div className="search-container">
                    <input type="text" name="search" id="search" placeholder='Search......' />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
    </div>
    <div className="cart">
        <span>Cart<sup>+1</sup> </span>
        <FontAwesomeIcon icon={faCartPlus} />
    </div>
</header>
        </>
    );
}

export default Header;