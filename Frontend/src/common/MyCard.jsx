import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import ContextUser from '../components/ContextUser';
import { deleteProduct, getProducts } from '../utils/index'
import Swal from 'sweetalert2';
function MyCard({ product, setProducts, handleBuy, handleFav}) {
  const { user } = useContext(ContextUser);
  const navigate = useNavigate();
  
  const eliminar = (id) => {
    Swal.fire({
      title: "Deseas eliminar el producto?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`
    }).then(async (result) => {
      if (result.isConfirmed) {
        let del = await deleteProduct(id);
        console.log(del)
        if (result == undefined) {

        }
        Swal.fire("Eliminado!", "", "success");
        const products = await getProducts();
        setProducts(products)
        navigate("/")

      } else if (result.isDenied) {
        Swal.fire("No se eliminó el producto", "", "info");
      };
    })
    /* Read more about isConfirmed, isDenied below */

    console.log(handleFav())
  }
  return (
    <Card className='my-5' style={{ width: '18rem', height: '30rem' }}>
      <div className='mt-1' style={{ width: '18rem', height: '15rem' }}>
      <Card.Img variant="top" src={product.src}/>
      </div>
      <Card.Body className='cards d-flex flex-column  justify-content-between '>
        <Card.Title>{product.name}</Card.Title>
        <div className='d-flex flex-column '>
          <Button className='my-2' variant="primary">
            <NavLink className='nav-link' to={`/admin/detalleProducto/${product.id}`}>
              Ver detalle
            </NavLink></Button>
          {user.admin ? <>
            <Button className='my-2' variant="success"><NavLink className='nav-link' to={`/admin/modificarProducto/${product.id}`}>
              Modificar
            </NavLink></Button>

            <Button className='my-2' variant="danger" onClick={() => eliminar(product.id)}>
              <NavLink className='nav-link' to={`/admin`}>
                Eliminar
              </NavLink>
            </Button>
          </> : <div className='d-flex flex-row gap-1 col-12'>
          <Button variant="success" onClick={() => handleBuy(product)}>{product.bought ? 'Quitar del carrito' : 'Añadir al carrito'}</Button>
          <Button variant="warning" onClick={() => handleFav(product)}>{product.fav ? 'Quitar de favoritos' : 'Añadir a favoritos'}</Button>
          </div>}
        </div>
      </Card.Body>
    </Card>
  );
}

export default MyCard;