var listOfGlazingServices = 
	[
		"Układanie glazury, gresu, mozaiki, kamieni itp.",
		"Układanie cokołów ceramicznych.",
		"Fazowanie narożników zewnętrznych",
		"Demontaż istniejących płytek",
		"Zabudowa armatury sanitarnej płytkami"
	]



function runJS()
{
	for(var i=1; i<=6; i++)
	{
		document.getElementById("containerCenter"+i.toString()).onmouseover = function() {viewExtension(this)};
		document.getElementById("containerCenter"+i.toString()).onmouseout = function() {viewExtensionExit(this)};
	}
}

function viewExtension(x)
{
	x.style.backgroundColor="WHITE";
	x.style.color="BLACK";
	if(x.id == "containerCenter1")
	{
		console.log("containerCenter1");
	}
	
	if(x.id == "containerCenter2")
	{
		console.log("containerCenter2");
	}
		
}

function viewExtensionExit(x)
{
	x.style.backgroundColor="transparent";
	x.style.color="BLACK";
}