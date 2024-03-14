import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 

const ListItem= ({data}) =>{
return(
    <> 
    <div className="ListItem">
    <img src={`${data.thumbnail}`} alt={data.title} />
    <div>
        <div>
            <span>₹{data.discountPrice} </span>
            <small>
                <strike>{data.price}</strike>
            </small>
        </div>
        <div>
            <h3>{data.title}</h3>
        </div>
    </div>
    <button>
        <span>Add to Card</span>
        <FontAwesomeIcon icon={faShoppingCart}/>
    </button>
    </div>
    </>
)
}
export default ListItem;