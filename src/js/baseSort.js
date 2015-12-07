function BaseSort(view) {
   this.sortedArray = [];
   this.view = view;
}

BaseSort.prototype.tick = function () {

}

BaseSort.prototype.cloneArray = function () {
   return this.arrayForSort.concat();
}

BaseSort.prototype.setArray = function (array) {
   this.arrayForSort = array;
}
