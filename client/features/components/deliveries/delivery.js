Template.delivery.events({
    "click .delete": function () {
      Deliveries.remove(this._id);
    }
  });