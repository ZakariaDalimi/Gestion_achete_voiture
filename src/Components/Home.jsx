import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="container mt-5">
            <h1 className="display-4">Bienvenue chez AutoVente</h1>
            <p className="lead">
                AutoVente est votre destination privilégiée pour acheter des voitures d'occasion de qualité à des prix compétitifs.
            </p>
            <p>
                Nous offrons une large gamme de véhicules inspectés et certifiés, prêts à être conduits par vous. Notre équipe dédiée est là pour vous aider à trouver la voiture parfaite qui correspond à vos besoins et à votre budget.
            </p>
            <p>
                Visitez notre magasin ou explorez notre inventaire en ligne pour découvrir les meilleures offres sur les voitures de vos rêves.
            </p>
        </div>
    );
}

export default Home;
