import Item from "../item/Item";

const ItemList = ({products}) => {
    return(
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                {products.map((product) => {
                    return (
                    <Item key={product.id} title={product.nombre} price={product.precio} image={product.imagen}/>
                    );
                })}
            </div>
        </div>
        );
};

export default ItemList;