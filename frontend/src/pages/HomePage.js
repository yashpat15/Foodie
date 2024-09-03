import React, { useState } from 'react';
import Modal from '../components/Modal';
import orderOnlineImage from '../images/OrderOnline.png';
import diningImage from '../images/Dining.png';
import liveShowImage from '../images/LiveShow.png';
import '../App.css'; 

function HomePage() {
    const [isLoginOpen, setLoginOpen] = useState(false);

    const toggleLoginModal = () => {
        setLoginOpen(!isLoginOpen);
    };

    return (
        <div className="home-container">
            <div className="header">
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/restaurants">Add Restaurant</a>
                    <a onClick={toggleLoginModal} style={{ cursor: 'pointer' }}>Login</a> 
                    <a href='/register'>Register</a>
                </nav>
                <div className="header-content">
                    <h1>Foodie</h1>
                    <p>Discover the best foods & drinks</p>
                </div>
                <div className="search-bar">
                    <input type="text" className="search-input" placeholder="Search for restaurant, cuisine or a dish" />
                </div>
            </div>
            <div className="section">
                <div className="category">
                    <img src={orderOnlineImage} alt="Order Online" />
                    <h3>Order Online</h3>
                    <p>Stay home and order to your doorstep</p>
                </div>
                <div className="category">
                    <img src={diningImage} alt="Dining" />
                    <h3>Dining</h3>
                    <p>View the city's favourite dining venues</p>
                </div>
                <div className="category">
                    <img src={liveShowImage} alt="Live Events" />
                    <h3>Live Events</h3>
                    <p>Discover India’s best events & concerts</p>
                </div>
            </div>
            <Modal isOpen={isLoginOpen} closeModal={toggleLoginModal}>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <button type="submit">Log In</button>
                </form>
            </Modal>
        </div>
    );
}

export default HomePage;
