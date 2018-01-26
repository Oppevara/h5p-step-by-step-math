/**
 * Step By Step Math Content Type
 */

 var H5P = H5P || {};

 /**
  * Step By Step Math Exercises module
  * @param  {H5P.jQuery} $ jQuery used by H5P Core
  * @return {function}   StepByStepMath constructor
  */
 H5P.StepByStepMath = (function($) {
   /**
    * StepByStepMath constructor
    * @param       {object} options Object with current data and configurations
    * @param       {integer} id      Unique identifier
    * @constructor
    */
   function StepByStepMath (options, id) {
     this.options = options;
     this.id = id;
   }

   /**
    * Returns title
    * @return {string} Title text
    */
   StepByStepMath.prototype.getTitle = function() {
     return this.options.title;
   };

   /**
    * Returns description
    * @return {string} Description text
    */
   StepByStepMath.prototype.getDescription = function() {
     return this.options.description;
   };

   /**
    * Checks if description is set and not empty
    * @return {boolean} Description is set or not
    */
   StepByStepMath.prototype.hasDescription = function() {
     var description = this.getDescription() || '';
     description = description.trim();

     return description && description.length > 0;
   };

   /**
    * Returns exercise type
    * @return {string} Exercise type
    */
   StepByStepMath.prototype.getType = function() {
     return this.options.type;
   };

   /**
    * Returns number of attempts
    * @return {integer} Number of attempts
    */
   StepByStepMath.prototype.getAttempts = function() {
     return this.options.attempts;
   };

   /**
    * Creates and fills container with content
    * @param  {object} $container Container node
    * @return {void}
    */
   StepByStepMath.prototype.attach = function($container) {
     var self = this;
     self.$container = $container;

     $container.addClass('h5p-step-by-step-math');
     $('<h3>', {
       'class': 'h5p-step-by-step-math-title',
       'text': self.getTitle()
     }).appendTo($container);

     if (self.hasDescription()) {
       $('<div>', {
         'class': 'h5p-step-by-step-math-description',
         'html': self.getDescription()
       }).appendTo($container);
     }

     // TODO These two are not required and should be replaced with exercise itself
     $('<div>', {
       'class': 'h5p-step-by-step-math-type',
       'text': self.getType()
     }).appendTo($container);
     $('<div>', {
       'class': 'h5p-step-by-step-math-attempts',
       'text': self.getAttempts()
     }).appendTo($container);
   };

   return StepByStepMath;
 })(H5P.jQuery);
