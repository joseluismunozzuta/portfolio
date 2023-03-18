var options = {
    "particles": {
        "number": {
            "value": 130,
            "density": {
                "enable": true,
                "value_area": 400
            }
        }, "color": {
            "value": "#ffffff"
        }, "shape": {
            "type": "triangle",
            "stroke": {
                "width": 0,
                "color": "#ffffff"
            }, "polygon": {
                "nb_sides": 3
            }, "image": {
                "src": "img/github.svg", "width": 70, "height": 100
            }
        }, "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": true
            }
        }, "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 100,
                "size_min": 0.1,
                "sync": false
            }
        }, "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        }, "move": {
            "enable": true,
            "speed": 8.5782952832645452,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    }, "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }, "onclick": {
                "enable": true,
                "mode": "repulse"
            }, "resize": true
        }, "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            }, "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            }, "repulse": {
                "distance": 200,
                "duration": 3
            }, "push": {
                "particles_nb": 4
            }, "remove": {
                "particles_nb": 2
            }
        }
    }, "retina_detect": false
};
particlesJS("particle", options);