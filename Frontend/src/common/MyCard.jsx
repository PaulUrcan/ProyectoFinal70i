import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import ContextUser from '../components/ContextUser';
import { deleteProduct, getProducts } from '../utils/index'
import Swal from 'sweetalert2';
function MyCard({ product, setProducts }) {
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


  }
  return (
    <Card style={{ width: '18rem', height: '35rem' }}>
      <Card.Img variant="top" src={product.src} style={{ width: '18rem', height: '15rem' }}/>
      <Card.Body className='cards'>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <div className='d-flex flex-column'>
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
          </> : ''}
        </div>
      </Card.Body>
    </Card>
  );
}

export default MyCard;