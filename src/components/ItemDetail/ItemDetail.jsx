import ItemCount from "../itemCount/Itemcount";

const ItemDetail = ({image, name, price}) =>{
    return (
            <div className="d-flex justify-content-around">
                <div>
                    <img src={require(`${image}`)} alt="" />
                </div>
                <div className="d-flex flex-column justify-conten-center align-items-center">
                    <h3 className="text-center">{name}</h3>
                    <p className="text-center">$ {price}</p>
                    <ItemCount initial={1} stock={10} />
                </div>
            </div>
    );
}
export default ItemDetail;