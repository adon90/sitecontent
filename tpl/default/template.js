// Generic/Common javascript functions

// Functions
function buttonHelp(text)
{
  document.getElementById("buttonHelpSpan").firstChild.nodeValue = text;
}

function openAddThis(publisher)
{
  var url='http://www.addthis.com/bookmark.php?v=1&pub='+publisher+'&url='+encodeURIComponent(document.location)+'&title='+encodeURIComponent(document.title);
  window.open(url);
  return;
}

function toggle(objName)
{
  var obj=document.getElementById(objName);
  obj.style.display=(obj.style.display!='block')? 'block' : 'none';
}