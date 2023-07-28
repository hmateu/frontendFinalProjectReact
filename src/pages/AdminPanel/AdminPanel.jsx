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
                        patchClick={'/users'}
                    />
                    <AdminCard
                        name={'Atracciones'}
                        button={'Ver todas'}
                        patchClick={'/attractions'}
                    />
                    <AdminCard
                        name={'Entradas'}
                        button={'Ver todas'}
                        patchClick={'/tickets'}
                    />
                </div>
            </div>
        </div>
    );
};