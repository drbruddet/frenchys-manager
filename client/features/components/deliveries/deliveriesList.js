var deliveriesData = [
	{
		date: "20/07/2005",
		brand: "Global Racing",
		description: "Arrivage Pieces"
	},
	{
		date: "20/02/2006",
		brand: "Sensus",
		description: "Arrivage Grips"
	},
	{
		date: "05/11/2012",
		brand: "Cult",
		description: "Arrivage cadres"
	}
]

Template.deliveriesList.helpers({
	deliveries: deliveriesData
});