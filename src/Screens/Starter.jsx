import React, { useEffect } from "react";
import './Starter.css';
import Logo from '../Images/logo.png';
import { useNavigate } from 'react-router-dom';
const Starter = () => {

    const Navigate = useNavigate()

    useEffect(() => {
        animaion()

    })


    const animaion = async () => {

        let intro = document.querySelector('.intro');
        let logo = document.querySelectorAll('.logo-header');
        let logoSpan = document.querySelectorAll('.logo');

        console.log(intro)

        console.log(logoSpan)

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    console.log('in 1st')
                    span.classList.add('active');
                }, (idx + 1) * 400)
            });
        })

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    console.log('in second')
                    span.classList.add('fade');
                    span.classList.remove('active');
                }, (idx + 1) * 80)
            });
        }, 3000)

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 4000)

        setTimeout(() => {
            Navigate('/home');
        }, 5000)

    }


    return (
        <div>
            <div className="intro">
                <h1 className="logo-header">
                    <span className="logo"><img src={Logo} className="logo-image" /></span>
                    <span className="logo">Event Planner</span>
                </h1>
            </div>
        </div>
    );
}

export default Starter;