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
        var data = this.data;

        socket.on('connect', (userData) => {
            console.log('I exist!');
            
            //socket.emit();
            let myKey = document.querySelector("#key");

            myKey.addEventListener('click', function(){
                document.addEventListener('keydown', function(event) {
                    if (event.key === 'i') {
                        console.log('i key was pressed');
                        socket.emit('add:', data.item_id);
                        console.log('key');
                        myKey.setAttribute('visible', false);

            }
                });

            });

            document.querySelector('#lantern').addEventListener('click', function(){
                socket.emit('add:', data.item_id);
                console.log('lantern');
            });
        });
        let scene = document.querySelector('a-scene');
        const saveKey = document.getElementById('key');
        /*scene.addEventListener('click', function() {
   
            //let item_id = this.el.getAttribute('id');
            console.log("Item ID:", data.item_id);
            switch(data.item_id){
                case "key":
                    console.log("Clicked item is the key");
                    break;
                case "lantern":
                    console.log("Clicked item is the lantern");
                    break;
                default:
                    console.log("No valid item was clicked");
            }
 
        })*/

    }
})