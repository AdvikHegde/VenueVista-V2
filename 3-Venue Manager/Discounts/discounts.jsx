// discounts.jsx
import "./discounts.css";
import { NavLink } from 'react-router-dom';
import React from 'react';
import VeSidebar from '../Venue Manager Sidebar/VeSideBar'; // Ensure this import is correct

const discountsData = [
    {
        id: 1,
        title: "Diwali offer",
        description: "Book at 50% off for timings after 6pm",
    },
    {
        id: 2,
        title: "20% Off on Venue Booking",
        description: "Get 20% off on your first venue booking. Valid for new customers only.",
    },
    {
        id: 3,
        title: "15% Off for Venue Managers",
        description: "Exclusive 15% discount for all venue managers on premium packages.",
    },
    {
        id: 4,
        title: "Buy One Get One Free",
        description: "Book two venues and get one free! Limited time offer.",
    },
];

function Discounts() {
    return (
        <div id="discounts-page" className="discounts-page">
            <VeSidebar id="sidebar" />
            <div id="discounts-container" className="discounts-container">
                <h1 id="discounts-title">Exclusive Discounts</h1>
                <div id="discounts-list" className="discounts-list">
                    {discountsData.map(discount => (
                        <div key={discount.id} id={`discount-card-${discount.id}`} className="discount-card">
                            <h2 id={`discount-title-${discount.id}`}>{discount.title}</h2>
                            <p id={`discount-description-${discount.id}`}>{discount.description}</p>
                            <NavLink id={`redeem-button-${discount.id}`} to="/redeem-discount" className="redeem-button">
                                Redeem Now
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Discounts;
