Template.brand.events({
    "click .delete": function () {
      Brands.remove(this._id);
    }
  });