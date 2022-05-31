import React, { useContext } from "react";
import Log from '../components/log'
import { UidContext } from "../components/AppContext";

const Identification = () => {
    const uid = useContext(UidContext);

    return (
        <div className='profil-page'>
            {uid ? (
                <h1>Vous êtes déjà inscrit et connecté</h1>
            ) : (
                <div className='log-container'>
                    <Log signin={false} signup={true} />
                    <div className='img-container'>
                        <img src='./img/logos/icon-left-font.svg' alt='logo groupomania' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Identification;