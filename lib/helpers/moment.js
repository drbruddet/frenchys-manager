UI.registerHelper("dateToHuman", function (date) {
   return moment(date).format('dddd DD MMMM YYYY');
});