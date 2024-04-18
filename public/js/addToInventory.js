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
        let keyPressed = false;

        socket.on('connect', (userData) => {
            console.log('I exist!');
            
            //socket.emit();
            let myKey = document.querySelector("#key");

            myKey.addEventListener('click', function(){
                console.log('i key was pressed');
                socket.emit('add_key');
                console.log('key');
                myKey.parentNode.removeChild(myKey);                
                /*document.addEventListener('keydown', function(event) {
                    if (event.key === 'i' && myKey) {
                        keyPressed = true;
                        console.log("key is true");
                        if(keyPressed == true)
                        {

                            keyPressed = false;
                        }         
                        else
                        {
                            console.log('item doesnt exist');
                        }               
                    
                    }
                });

                document.addEventListener('keyup', function(event) {
                    if(event.key === 'i') {
                        keyPressed = false;
                        console.log("key is false");
                    }
                });*/

            });
            let myLantern = document.querySelector("#lantern");
            myLantern.addEventListener('click', function(){
                socket.emit('add:', data.item_id);
                console.log('lantern');
                myKey.parentNode.removeChild(myLantern);                

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