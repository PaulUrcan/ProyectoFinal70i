# Proyecto base para alumnos RollingcodeSchool
Día 1
- Creación del proyecto
- Limpieza de archivos y carpetas
- Instalación de react-bootstrap bootstrap axios
- Uso de json-server
- Creación de función para capturar datos desde la API


Día 2
- Instalamos la dependencia react-router-dom
- Importamos los componentes de react-router-dom
- Creamos las rutas en App.jsx
- Creamos una ruta privada para el admin
- Creamos el componente AddProduct
- Instalamos la dependencia react-hook-form
- Creamos el Login.jsx

Día 3
- Repaso de lo anterior
- Práctica de React-router-dom y bootstrap
- Modificamos el navbar agregando componentes de react-router-dom y bootstrap
- Creamos la view de AddProduct(Falta el componente Select)

Día 4 
- Agregamos el contexto del usuario
Día 5
- Agregamos en el admin el modo oscuro en el elemento principal desde el contexto
- Agregamos las vistas DetailProduct, Products
- Creamos la lógica para añadir productos, para traer un producto y mostrarlo en el detalle
```
export const addProduct=async(obj)=>{
    try {
       let add= await axios.post(URLproducts,obj);
       if (add.status==201) {
            return true
       }else{
        alert("estamos en index")
       }

    } catch (error) {
        return false
    }

}
export const getOneProduct=async(id)=>{
    try {
        let product= await axios.get(`${URLproducts}/${id}`);
        if (product.status===200) {
            return product.data

        }else{
            return null
        }

    } catch (error) {

        return null
    }
}
```
- Mostramos los productos en las vistas DetailProduct, Products

Día 6
- Creamos la vista y la ruta de para Update Product
- Creamos las funciones de update y delete product
- Usamos el useNavigate de react-router-dom
- Incorporamos la dependencia sweetalert2 y usamos dotenv
- Usamos el contexto de la app para mostrar o ocultar los botones de agregar,modificar y borrar producto
- Agregarmos un icono para ir a la ruta agregar producto



