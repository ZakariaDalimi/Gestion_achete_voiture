import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Details = () => {
    const carDetailState = useSelector(state => state.CarDetail);

    useEffect(() => {
        console.log(carDetailState);
    }, [carDetailState]);

    return (
        <>
            <div className="container">
                <h1 className="mt-4">Details de la Voiture {carDetailState[0].marque}</h1>
                <ul className="list-group mt-4">
                    {carDetailState.map((car, index) => (
                        <React.Fragment key={index}>
                            <li className="list-group-item">Marque  : {car.marque}</li>
                            <li className="list-group-item">Modele  : {car.modele}</li>
                            <li className="list-group-item">Type de Carburant  : {car.type}</li>
                            <li className="list-group-item">Fiche Technique  : {car.fiche}</li>
                            <li className="list-group-item">Prix  : {car.prix}</li>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Details;
