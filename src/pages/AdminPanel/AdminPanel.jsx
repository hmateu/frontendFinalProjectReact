import React from "react";
import './AdminPanel.css';
import { AdminCard } from "../../common/AdminCard/AdminCard";

export const AdminPanel = () => {
    return (
        <div className="adminPanelStyle">
            <div className="topSection">
                <div className="sectionTitle">
                    Panel administrador
                </div>
            </div>
            <div className="bottomSection">
                <div className="adminOptionsSections">
                    <AdminCard
                        name={'Usuarios'}
                        button={'Ver todos'}
                        pathClick={'/users'}
                    />
                    <AdminCard
                        name={'Usuarios'}
                        button={'Registrar'}
                        pathClick={'/register'}
                    />
                    <AdminCard
                        name={'Atracciones'}
                        button={'Ver todas'}
                        pathClick={'/attractions-admin'}
                    />
                    <AdminCard
                        name={'Entradas'}
                        button={'Ver todas'}
                        pathClick={'/tickets'}
                    />
                    <AdminCard
                        name={'Entradas'}
                        button={'Mis entradas'}
                        pathClick={'/my-tickets'}
                    />
                </div>
            </div>
        </div>
    );
};