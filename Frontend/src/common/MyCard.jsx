import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink, useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import ContextUser from '../components/ContextUser';
import {deleteProduct, getProducts} from '../utils/index'
import Swal from 'sweetalert2';
function MyCard({ product, setProducts }) {
  const { user } = useContext(ContextUser);
  const navigate=useNavigate();
  const eliminar=(id)=>{
    Swal.fire({
      title: "Deseas eliminar el producto?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`
    }).then(async(result)=>{
      if (result.isConfirmed) {
        let del = await deleteProduct(id);
        console.log(del)
          if (result==undefined) {
            
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
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.src} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button className='my-4' variant="primary">
          <NavLink className='nav-link' to={`/admin/detalleProducto/${product.id}`}>
          Ver detalle
        </NavLink></Button>
        {user.admin?<>
          <Button variant="success"><NavLink className='nav-link' to={`/admin/modificarProducto/${product.id}`}>
         Modificar
        </NavLink></Button>
        <NavLink className='nav-link' to={`/admin`}>
        <Button variant="danger" onClick={()=>eliminar(product.id)}>
         Eliminar
        </Button>
        </NavLink>
        </>:''}
      </Card.Body>
    </Card>
  );
}

export default MyCard;