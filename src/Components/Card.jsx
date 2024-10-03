import React from "react";

export default function Card({ children }) {
    return <>
        <div className="ab-me-card">
            <div className="card-content">
                {children}            
            </div>
        </div>
    </>
}