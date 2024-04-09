//Time for some pseudocode!
//On item click, add to inventory. When clicked emit to room that object is valid (False to True).
'use strict';

AFRAME.registerComponent('addToInventory', {
    schema: {
        duration: {type: 'number', default:10000.0},
    },

    init: function()
    {
        //const Context_AF = this;
        let socket = io('http://localhost:8080');

        socket.on('connect', (userData) => {
            console.log('I exist!');
        });

        let scene = document.querySelector('a-scene');
        const saveKey = document.getElementById('key');
        scene.addEventListener('click', function() {
   
            let item_id = this.getAttribute('id');
    
            switch(item_id){
                case "key":
                    console.log("Clicked item is the key");
                    break;
                default:
                    console.log("No valid item was clicked");
            }
 
        })

    }
})