/*
settings.js
Configures gadget options
*/

System.Gadget.onSettingsClosing = settingsClosing;



function loadSettings()
//Loads the drop down lists with the currently selected (or if first run/default) values
{

	
	//Tick checkbox if neccessary
	if(System.Gadget.Settings.read("forceSmall"))
	{
		sizeSwitch.checked = true;
	}
	
	if(System.Gadget.Settings.read("Desc"))
	{
		descSwitch.checked = true;
	}
	
}


function settingsClosing(event)
{

		
		if(sizeSwitch.checked == true)
		{
			System.Gadget.Settings.write("forceSmall",true);

		}
		else
		{
			System.Gadget.Settings.write("forceSmall",false);

		}


		
		if(descSwitch.checked == true)
		{
                        System.Gadget.Settings.write("Desc",true);
		}
		else
		{

			System.Gadget.Settings.write("Desc",false);
		}

}
