import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct, updateProduct, getProducts } from '../utils';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';
import { useForm } from "react-hook-form"
const DetailProduct = ({ products, setProducts }) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const getProduct = (id) => {
        getOneProduct(id).then((result) => {

            if (result) {
                // setProd(result);
                setValue("name", result.name);
                setValue("description", result.description);
                setValue("price", result.price);
                setValue("src", result.src);
                setValue("category", result.category)


            } else {
                console.log("no hay info");
            }
        })
    }
    const updateItem = async (obj) => {
        const result = await updateProduct(id, obj)
        if (result) {
            let products = await getProducts();
            setProducts(products)
            alert(`Se ha modificado el producto ${result.name}`);
        } else {
            alert("No se pudo modificar el producto")
        }
    }


    useEffect(() => {
        getProduct(id);
    }, [])
    return (
        <div className="d-flex justify-content-center m-4">
            <Form onSubmit={handleSubmit(updateItem)} className="w-50" method="PUT">
                <FormGroup>
                    <Form.Label>
                        Nombre
                    </Form.Label>
                    <FormControl
                        type="text"
                        {...register("name", { required: "Este campo es obligatorio" })}
                    />
                    <Form.Text>
                        {errors.name?.message}
                    </Form.Text>
                </FormGroup>
                <FormGroup>
                    <Form.Label>
                        Descripción
                    </Form.Label>
                    <FormControl
                        type="text"
                        {...register("description", { required: "Este campo es obligatorio" })}
                    />
                    <Form.Text>
                        {errors.description?.message}
                    </Form.Text>
                </FormGroup>
                <FormGroup>
                    <Form.Label>
                        Precio
                    </Form.Label>
                    <FormControl
                        type="number"
                        {...register("price", { required: "Este campo es obligatorio" })}
                    />
                    <Form.Text>
                        {errors.price?.message}
                    </Form.Text>
                </FormGroup>
                <FormGroup>
                    <Form.Label>
                        Url Producto
                    </Form.Label>
                    <FormControl
                        type="text"
                        {...register("src", { required: "Este campo es obligatorio" })}
                    />
                    <Form.Text>
                        {errors.src?.message}
                    </Form.Text>
                </FormGroup>
                <FormGroup>
                    <Form.Label>
                        Categoría
                    </Form.Label>
                    <Form.Select
                        type="text"
                        {...register("category", { required: "Este campo es obligatorio" })}
                    >
                        <option value='cafeteria'>Cafetería</option>
                        <option value='bebidas'>Bebidas</option>
                        <option value='plato'>Plato</option>
                        <option value='entradas'>Entradas</option>
                    </Form.Select>
                    <Form.Text>
                        {errors.category?.message}
                    </Form.Text>
                </FormGroup>
                <FormGroup>
                    <Form.Label>
                        Stock
                    </Form.Label>
                    <FormControl
                        type="number"
                        {...register("stock", { required: "Este campo es obligatorio" })}
                    />
                    <Form.Text>
                        {errors.stock?.message}
                    </Form.Text>
                </FormGroup>
                <FormGroup>
                    <Button type="submit">Modificar producto</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default DetailProduct