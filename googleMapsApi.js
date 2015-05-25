var xhrObj = new XMLHttpRequest();
xhrObj.open('GET', 'http://maps.google.com/maps/api/js?sensor=true', false);
xhrObj.send('');
var se = document.createElement('script');
se.type = "text/javascript";
se.text = xhrObj.responseText;
document.getElementsByTagName('head')[0].appendChild(se);