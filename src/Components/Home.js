import React, { useEffect, useState } from 'react';

function Home() {

    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    });

    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.globalCompositeOperation = 'destination-over'; // Fixed typo here

        let hue = Math.random() * 360; // Declare hue here
        let number = 0;
        let scale = 3;

        function drawFlower() {
            let angle = number * 10;
            let radius = scale * Math.sqrt(number);
            let positionX = radius * Math.sin(angle) + canvas.width / 2;
            let positionY = radius * Math.cos(angle) + canvas.height / 2;

            ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
            ctx.strokeStyle = 'blue';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(positionX, positionY, 8, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            number++;
            hue++; // Increment hue for each frame
        }

        function animate() {
            drawFlower();

            if (number > 400) return;

            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return (
        <div>
            <canvas id="canvas"></canvas>
        </div>
    );
}

export default Home;
