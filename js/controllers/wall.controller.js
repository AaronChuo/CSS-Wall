/**
 * Wall controller
 * inject controller, service, directive modules.
 */
/**
 * Kanban Controller
 * @desc Controller for kanban view
 * @author Aaron Chuo
 */

'use strict';

angular
  .module('CSSKanban.controller', [])
  .controller('kanbanController', kanbanController);

  /** Injection */
  kanbanController.$inject = [];

  function kanbanController() {
    var viewModel = this;

    /** Interface */
    //for testing
    viewModel.bricks = getBrick();

    /**
     * Get all bricks
     * @returns {Array} bricks
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