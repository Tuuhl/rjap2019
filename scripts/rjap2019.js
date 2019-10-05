var main = function() {
	$("#navBarBtn").click(function()
	{
		$("#NavBar").animate({width: 'toggle'}, 350);
	});
	
	$("#karttaBtn").click(function()
	{
		$("#collapseKartta").toggle();
		$("#collapseOhjelma").hide();
		$("#collapseMenu").hide();
		$("#collapseLuckyEmblems").hide();
		$("#collapseMorsiamen").hide();
	});
	
	$("#ohjelmaBtn").click(function()
	{
		$("#collapseOhjelma").toggle();
		$("#collapseMenu").hide();
		$("#collapseLuckyEmblems").hide();
		$("#collapseMorsiamen").hide();
	});
	
	$("#menuBtn").click(function()
	{
		$("#collapseOhjelma").hide();
		$("#collapseMenu").toggle();
		$("#collapseLuckyEmblems").hide();
		$("#collapseMorsiamen").hide();
	});
	
	$("#luckyBtn").click(function()
	{
		$("#collapseOhjelma").hide();
		$("#collapseMenu").hide();
		$("#collapseLuckyEmblems").toggle();
		$("#collapseMorsiamen").hide();
	});
	
	$("#morsiamenBtn").click(function()
	{
		$("#collapseOhjelma").hide();
		$("#collapseMenu").hide();
		$("#collapseLuckyEmblems").hide();
		$("#collapseMorsiamen").toggle();
	});
}

$(document).ready(main);