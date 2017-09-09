/*
bbc.js
adds spanner/settings option
*/


System.Gadget.settingsUI = "Settings.html";

	//System.Gadget.onUndock = updatesizes();
	//System.Gadget.onDock = updatesizes();



function refreshData() 
{ 
updatesizes();
//window.location.reload(true); 
}



function updatesizes()
{


	if(System.Gadget.Settings.read("forceSmall"))
	{

		setSmallParameters();
        }
        else
	{

		setLargeParameters();
        }

//re-load data from feed again (refresh)
loaddata();

}


function setSmallParameters()
{


//Setup Graphics Styles
document.body.style.width = "128px";
document.body.style.height = "180px";

document.getElementById("container").style.width = "256px";
document.getElementById("container").style.height = "356px";

document.getElementById("feedwindow").style.width = "120px";
document.getElementById("feedwindow").style.height = "138px";

}

function setLargeParameters()
{


//Setup Graphics Styles
document.body.style.width = "256px";
document.body.style.height = "712px";

document.getElementById("container").style.width = "252px";
document.getElementById("container").style.height = "708px";

document.getElementById("feedwindow").style.width = "240px";
document.getElementById("feedwindow").style.height = "624px";

}

var which;
var now;

//now = new Date();

function loaddata() {
  xmldoc = new ActiveXObject("Msxml2.DOMDocument.3.0");
  xmldoc.async = false;
now = new Date();
  which=1;
  xmldoc.onreadystatechange = checkState;
  xmldoc.load("http://feeds.bbci.co.uk/portuguese/brasil/rss.xml");

}


function loaddata2() {

  which=2;
  xmldoc.load("http://feeds.bbci.co.uk/portuguese/brasil/rss.xml");
}


function loaddata3() {


  which=3;
  xmldoc.load("http://feeds.bbci.co.uk/portuguese/brasil/rss.xml");
}

function loaddata4() {

  which=4;
  xmldoc.load("http://feeds.bbci.co.uk/portuguese/brasil/rss.xml");
}

function loaddata5() {

  which=5;
  xmldoc.load("http://feeds.bbci.co.uk/portuguese/brasil/rss.xml");
}


function checkState() {
  var state = xmldoc.readyState;
  //feedwindow.innerHTML += "readyState = " + state + "<BR>";
  if (state == 4) {
    var err = xmldoc.parseError;
    if (err.errorCode != 0) {
      if (which==1) { feedwindow.innerHTML="";}
      feedwindow.innerHTML += err.reason + "<BR>As notícias não foram carregadas <BR>Tentando recarregar<br>Por Marcos Silva<br><br>";
	} else {

var count;
var i;

var Desc;

Desc=(System.Gadget.Settings.read("Desc"));

count = xmldoc.getElementsByTagName("item").length;
//count=1

if (which==1) { feedwindow.innerHTML="";}

for (i=0;i<count;i++)
{//headings with linker
      feedwindow.innerHTML+="<a href='"+xmldoc.getElementsByTagName("item").item(i).childNodes.item(2).text+"' target='_blank'><font color=black>"+xmldoc.getElementsByTagName("item").item(i).childNodes.item(0).text+"</font></a><br><br> "

if (Desc==true) {
//descriptions
feedwindow.innerHTML+=xmldoc.getElementsByTagName("item").item(i).childNodes.item(1).text+"<br><hr><br>";
}
}


//if you going to use my code, please include this special code on end of feed output
//and give me some credit for this JS feeder

if (which==5) {

feedwindow.innerHTML+="<hr>Desenvolvido por Marcos Silva<br><br><a href='&#104;&#116;&#116;&#112;&#58;&#47;&#47;&#119;&#119;&#119;&#46;&#97;&#114;&#116;&#98;&#105;&#122;&#50;&#48;&#48;&#48;&#46;&#99;&#111;&#109;&#47;&#97;&#98;&#109;&#97;&#115;&#104;&#111;&#112;&#47;&#115;&#105;&#110;&#103;&#108;&#101;&#115;&#97;&#108;&#101;&#115;&#112;&#97;&#103;&#101;&#115;&#47;&#108;&#111;&#111;&#115;&#105;&#110;&#103;&#45;&#119;&#101;&#105;&#103;&#104;&#116;&#45;&#105;&#115;&#45;&#101;&#97;&#115;&#121;&#45;&#119;&#105;&#116;&#104;&#45;&#102;&#97;&#116;&#108;&#111;&#115;&#115;&#45;&#102;&#111;&#114;&#45;&#105;&#100;&#105;&#111;&#116;&#115;&#45;&#100;&#105;&#101;&#116;&#112;&#108;&#97;&#110;&#46;&#97;&#115;&#112;' target='_blank'>Nao deixe de conferir outros projetos em </a><br><hr><br><a href='http://aragones.esy.es' target='_blank'>aragones.esy.es</a>";
}
 

//show the 4 other feeds on the end of main feed so all in one panel :)
if (which==1) {loaddata2();}
if (which==2) {loaddata3();}
if (which==3) {loaddata4();}
if (which==4) {loaddata5();}
   }


  }



}