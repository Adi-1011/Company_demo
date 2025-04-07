// responsive.js - Add to all pages to make them responsive with hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger menu button for mobile
    const nav = document.querySelector('nav');
    const navList = document.querySelector('nav ul');
    
    if (nav && navList) {
        // Create hamburger button
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        for (let i = 0; i < 3; i++) {
            const line = document.createElement('span');
            line.className = 'line';
            // Make the last line red
            if (i === 2) {
                line.style.backgroundColor = 'red';
            }
            hamburger.appendChild(line);
        }
        
        // Insert hamburger button before the nav list
        nav.insertBefore(hamburger, navList);
        
        // Add click event to toggle menu
        hamburger.addEventListener('click', function() {
            navList.classList.toggle('show');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && navList.classList.contains('show')) {
                navList.classList.remove('show');
                hamburger.classList.remove('active');
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navList.classList.contains('show')) {
                navList.classList.remove('show');
                hamburger.classList.remove('active');
            }
        });
    }

    // Add necessary responsive styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        /* Base responsive styles */
        * {
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
        }
        
        img {
            max-width: 100%;
            height: auto;
        }
        
        /* Navigation styles */
        nav {
            position: relative;
        }
        
        .hamburger {
            display: none;
            flex-direction: column;
            justify-content: space-between;
            width: 30px;
            height: 21px;
            cursor: pointer;
            z-index: 100;
            padding: 10px;
        }
        
        .line {
            display: block;
            height: 3px;
            width: 100%;
            background-color: #333;
            transition: all 0.3s ease;
        }
        
        /* Media query for mobile devices */
        @media (max-width: 768px) {
            .hamburger {
                display: flex;
                position: absolute;
                top: 15px;
                right: 15px;
            }
            
            nav ul {
                display: none;
                flex-direction: column;
                width: 100%;
                background-color: #f8f8f8;
                position: absolute;
                top: 60px;
                left: 0;
                padding: 20px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            
            nav ul.show {
                display: flex;
            }
            
            nav ul li {
                margin: 10px 0;
                width: 100%;
                text-align: center;
            }
            
            /* Hamburger animation */
            .hamburger.active .line:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }
            
            .hamburger.active .line:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active .line:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }
            
            /* Main content responsive adjustments */
            main {
                padding: 10px;
            }
            
            /* Grid adjustments for mobile */
            .grid, .container {
                grid-template-columns: 1fr !important;
            }
        }
    `;
    document.head.appendChild(style);
});