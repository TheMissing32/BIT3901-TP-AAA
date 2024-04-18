//Time for some pseudocode!
//On item click, add to inventory. When clicked emit to room that object is valid (False to True).
'use strict';

AFRAME.registerComponent('addtoinventory', {
    schema: {
        duration: {type: 'number', default:10000.0},
        item_id: {default:'default'}
    },

    init: function()
    {
        console.log("js exists");
        //const Context_AF = this;
        let socket = io('http://localhost:8080');

        socket.on('connect', (userData) => {
            console.log('I exist!');
        });
        var data = this.data;
        let scene = document.querySelector('a-scene');
        const saveKey = document.getElementById('key');
        scene.addEventListener('click', function() {
   
            //let item_id = this.el.getAttribute('id');
            console.log("Item ID:", data.item_id);
            switch(data.item_id){
                case "key":
                    console.log("Clicked item is the key");
                    break;
                default:
                    console.log("No valid item was clicked");
            }
 
        })

    }
})