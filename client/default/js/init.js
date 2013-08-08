/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$fh.ready(startUp);

function startUp() {
  // The local config variable from config.js can be accessed directly
  document.getElementById('localConfig').innerHTML = "<p>" + JSON.stringify(someSmallObject) + "</p>";
  document.getElementById('run_button').onclick = bindControl;
}


function bindControl() {
  // Invoke a cloud action call to get the remote configuration
  // See: http://docs.feedhenry.com/wiki/Actions
  $fh.act(
    {
      act:'getConfig',
      "req": {
         "name": "someValue", // send this value to the cloud
         "peter": "16" // send this value to the cloud
       }
    },
    function(res) {
      document.getElementById('cloudConfig').innerHTML = "<p>" + JSON.stringify(res.madeUpKey) + "</BR>" +  JSON.stringify(res.otherKey) +"</p>";
    },
    function(code,errorprops,params) {
      alert('An error occured: ' + code + ' : ' + errorprops);
    }
  );
}