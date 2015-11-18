Template.rider.events({
    "click .delete": function () {
      Riders.remove(this._id);
    }
  });