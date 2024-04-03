import React, { useState } from 'react';
import MyCard from "../common/MyCard";
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import ContextUser from '../components/ContextUser';
import { NavLink } from "react-router-dom";

const Products = ({ products, setProducts, handleBuy, handleFav }) => {
    const { user } = useContext(ContextUser);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 15;

    // Calcular el índice inicial y final de los productos a mostrar en la página actual
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Cambiar a la página siguiente
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    // Cambiar a la página anterior
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <main className='main d-flex justify-content-center align-items-center flex-wrap overflow-x-hidden '>
            <div className='d-flex justify-content-center w-100 mb-4 my-5'>
                <div className='d-flex w-100 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5'>
                    {currentProducts.map((product) => (
                        <div key={product.name} className='d-flex col mb-4 justify-content-center '>
                            <MyCard product={product} setProducts={setProducts} handleBuy={handleBuy} handleFav={handleFav} />
                        </div>
                    ))}
                    <div className='d-flex justify-content-center w-100 '>
                        {user.admin &&
                            <NavLink className='nav-link' to='/admin/agregarProducto'>
                                <Button variant="success">
                                    <a href="/admin/agregarProducto" style={{ color: 'white' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                        </svg>
                                    </a>
                                </Button>
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
            <div>
                <nav className="d-flex justify-content-center align-items-center">
                    <ul className="pagination d-flex justify-content-center align-items-center">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="px-md-5  cat rounded-2 footer text-white border-white border-1 cat-btn" onClick={prevPage}>Anterior</button>
                        </li>
                        <li>
                            <h1 className='mx-3'>Página {currentPage}</h1>
                        </li>
                        <li className={`page-item ${indexOfLastProduct >= products.length ? 'disabled' : ''}`}>
                            <button className="px-md-5  cat rounded-2 footer text-white border-white border-1 cat-btn" onClick={nextPage}>Siguiente</button>
                        </li>
                    </ul>
                </nav>

            </div>

        </main>
    );
}

export default Products;

