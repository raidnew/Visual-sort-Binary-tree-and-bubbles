function createViewBubbleSort(el) {
   BaseView.apply(this, arguments);

   this.selectedBranch;

   this.drawArray = function (array) {

      var el = $('<div>');
      el.addClass("startArray");

      for (var i = 0; i < array.length; i++) {
         var elArray = $("<a>");
         elArray.html(array[i]);
         elArray.addClass("arrayElement");
         elArray.attr('id', "element" + i);

         el.append(elArray);
      }

      this.mainel.appendChild(el[0]);
   }

   this.drawActionArray = function (array) {

      var el = $('<div>');
      el.addClass("actionArray");
      el.attr('id', "actionArray");

      for (var i = 0; i < array.length; i++) {
         var elArray = $("<div>");
         elArray.html('<a>' + array[i] + '<a>');
         elArray.addClass("actionArrayElement");
         elArray.attr('id', "actionelement" + i);
         el.append(elArray);
         el.posx = el.left;
      }

      this.mainel.appendChild(el[0]);
   }

   this.selectElements = function (index1, index2) {
      this.removeSelect();

      var el1 = $("#actionelement" + index1);
      var el2 = $("#actionelement" + index2);

      el1.addClass("select");
      el2.addClass("select");
   }

   this.swapElements = function (index1, index2) {

      this.removeSelect();

      var el1 = $("#actionelement" + index1);
      var el2 = $("#actionelement" + index2);

      el1.attr('id', "actionelement" + index2);
      el2.attr('id', "actionelement" + index1);

      el2.insertBefore(el1, el2);
   }

   this.removeSelect = function (index1, index2) {
      $('.actionArrayElement').removeClass('select');
   }
}

createViewBubbleSort.prototype = Object.create(BaseView.prototype);