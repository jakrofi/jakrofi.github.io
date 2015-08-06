 (function(ext)
  {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};
  
    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
  
  ext._getStatus = function()
  {
    return {status: 2, msg: 'Ready'};
  };
  
  //SOCKET------------------------------------
  ext.my_first_block= function(){
  // Host we are connecting to
  var host = '192.168.32.233';
  // Port we are connecting on
  var port = 12345;
  
  var socket = new jSocket();
  
  // When the socket is added the to document!!!!!!!!!
  socket.onReady = function(){
  socket.connect(host, port);
  }
  
  // Connection attempt finished
  socket.onConnect = function(success, msg){
  if(success){
  // Send something to the socket
  //socket.write('Hello world');
  alert('HELLO WORLD!');
  }
  
  else{
  alert('Connection to the server could not be estabilished: ' + msg);
  }
  }
  
  socket.onData = function(data){
  alert('Received from socket: '+data);
  }
  
  // Setup our socket in the div with the id="socket"
  socket.setup('mySocket');
  
  }
  
  //SOCKET----------------------------
  
  // Block and block menu descriptions
  var descriptor = {
    blocks: [
        ['','my first block', 'my_first_block']
    ]
  };
  
  // Register the extension
  ScratchExtensions.register('Sample extension', descriptor, ext);
  })({});