import Item from "../item/Item";

const ItemList = ({products}) => {
    return(
        <div className="container-fluid mt-3 pb-3">
            <div className="row d-flex justify-content-center gap-5">
                {products.map((product) => {
                    return (
                    <Item key={product.id} id={product.id} title={product.nombre} price={product.precio} image={product.imagen}/>
                    );
                })}
            </div>
        </div>
        );
};

export default ItemList;