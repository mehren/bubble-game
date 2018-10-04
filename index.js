 $( function() {
    $( "#division" ).selectmenu();
 
    $( "#start_verse" ).selectmenu();
 
    $( "#end_verse" ).selectmenu();
      
    $( "#num_of_questions" ).selectmenu();

    VersesModule.render();

	$( "#division" ).on( "selectmenuselect", function( event, ui ) {
		if ($('#division').val() == 'Beginner') {
			alert("B");
			VersesModule.division = 'Beginner';
		}
		if ($('#division').val() == 'Junior') {
			alert("J");
            VersesModule.division = 'Junior';
		}
		if ($('#division').val() == 'Int Sr') {
			alert("IS");
            VersesModule.division = 'Int Sr';
		}
		if ($('#division').val() == 'Exp Sr') {
			alert("ES");
            VersesModule.division = 'Exp Sr';
		}

        VersesModule.getRefs();
	});

	$("#submitButton").on('click', function() {

	});
	
	
	
 }  );
function randomizer(array)
{
	var rand = array[Math.floor(Math.random() * array.length)];
	return rand;
}

var VersesModule = {
	division: null,
	userRefs: null,
	beginnerArrayIndex: 100,
	juniorArrayIndex: 200,
	intSrArrayIndex: 300,
	//expSrArrayIndex is all the verses

	render: function() {
		VersesModule.userRefs = [];
	},

	getRefs: function() {
		var allRefs = Refs;
		if (VersesModule.division === 'Beginner') {
			for(var i = 0; i < VersesModule.beginnerArrayIndex; i++)
				VersesModule.userRefs.push(allRefs[i]);
		}

        else if (VersesModule.division === 'Junior') {
            for(var i = 0; i < VersesModule.juniorArrayIndex; i++)
                VersesModule.userRefs.push(allRefs[i]);
        }

        else if (VersesModule.division === 'Int Sr') {
            for(var i = 0; i < VersesModule.intSrArrayIndex; i++)
                VersesModule.userRefs.push(allRefs[i]);
        }

        else if (VersesModule.division === 'Exp Sr') {
        	for(var i = 0; i < Refs.length; i++)
        		VersesModule.userRefs.push(allRefs[i]);
        }

		console.log(VersesModule.userRefs);

        VersesModule.populateSelectMenu();
	},

	populateSelectMenu: function() {
		for(var i = 0; i < VersesModule.userRefs.length; i++)
            $('#start_verse').append("<option value=" + i + ">" + VersesModule.userRefs[i] + "</option>");

	},


};