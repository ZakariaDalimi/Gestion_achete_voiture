import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Details } from "../ReduxApp/Actionsapp/funtype";



const ListCars = () => {

    const DataCarsState = useSelector(state => state.DataCar);

    const dispatch = useDispatch();

    const navigate = useNavigate()

    useEffect(() => {
        console.log(DataCarsState);
    }, [DataCarsState]);

    const handelDetails=(idCar)=>{

        const dataCar = DataCarsState.filter((item) => item.id === idCar)

        dispatch(Details(dataCar))

        navigate('/details')
        
    }

    return (
        <>
        <div className="container mt-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Marque</th>
                        <th>Modele</th>
                        <th>Type de Carburant</th>
                        <th>Prix</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {DataCarsState.map((car, index) => (
                        <tr key={index}>
                            <td>{car.id}</td>
                            <td>{car.marque}</td>
                            <td>{car.modele}</td>
                            <td>{car.type}</td>
                            <td>{car.prix}</td>
                            <td>
                                <button className="btn btn-primary" onClick={()=>handelDetails(car.id)}>Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
    );
};

export default ListCars;
