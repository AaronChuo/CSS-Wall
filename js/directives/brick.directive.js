/**
 * Brick Directive
 * @desc An item of wall
 * @example <brick snapshot="" title="" author=""></brick>
 * @author Aaron Chuo
 */

'use strict';

angular
  .module('CSS-Wall.directive', [])
  .directive('brick', brick);

  /** Implement */
  function brick() {

    /** Setter */
    var directive = {
      templateUrl: 'js/directives/templates/brick.tpl.html',
      restrict: 'EA',
      link: link
    };
    return directive;

    /** Link Function */
    function link(scope, ele, attr) {
      scope.work = {
        snapshot: attr.snapshot,
        title: attr.title,
        author: attr.author
      };
    }
  }