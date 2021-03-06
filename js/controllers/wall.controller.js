/**
 * @fileoverview Wall controller.
 * @author Aaron Chuo
 */

'use strict';

angular
  .module('CSS-Wall.controller', [])
  .controller('wallController', wallController);

  /** Injection */
  wallController.$inject = [];

  function wallController() {
    var viewModel = this;

    /** View model */
    viewModel.bricks = getBrick();

    /**
     * Get all bricks.
     * @return {Array} bricks
     */
    function getBrick() {
      return [
        {snapshot: 'http://images.free-extras.com/pics/m/mickey_mouse-1097.jpg', title: 'Mickey', author: 'Disney'},
        {snapshot: '', title: 'Jedi Master', author: 'StarWars'},
        {snapshot: '', title: 'Brown', author: 'LINE'},
        {snapshot: '', title: 'Chopper', author: 'OnePiece'},
        {snapshot: '', title: 'Agricola', author: 'UweRoseberg'},
        {snapshot: '', title: 'CrazyChuo', author: 'Aaron'}
      ];
    }

  }