$(function() {
  function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (i = 0; i < 10; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }
  function Column(name) {
    var self = this;

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();

    function createColumn() {
      // CREATING COMPONENTS OF COLUMNS
      var $column = $('<div>').addClass('column');
      var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
      var $columnCardList = $('<ul>').addClass('column-card-list');
      var $columnDelete = $('<button>').addClass('btn-delete').text('x');
      var $columnAddCard = $('<button>').addClass('add-card').text('Add a card');

      // ADDING EVENTS
      $columnDelete.click(function() {
        self.removeColumn();
      });
      $columnAddCard.click(function(event) {
        self.addCard(new Card(prompt('Enter the name of the card')));
      });

      // CONSTRUCTION COLUMN ELEMENT
      $column.append($columnTitle)
        .append($columnDelete)
        .append($columnAddCard)
        .append($columnCardList);

      // RETURN OF CREATED COLUMN
      return $column;
    }
  }

  Column.prototype = {
    addCard: function(card) {
      this.$element.children('ul').append(card.$element);
    },
    removeColumn: function() {
      this.$element.remove();
    }
  };
  
  // CLASS CARD
  function Card(description) {
    var self = this;

    this.id = randomString();
    this.description = description;
    this.$element = createCard();


    function createCard() { 
    //CREATING THE BLOCKS
      var $card = $('<li>').addClass('card');
      var $cardDescription = $('<p>').addClass('card-description').text(self.description);
    var $cardDelete = $('<button>').addClass('btn-delete').text('x');
  
    //ADD EVENT
    $cardDelete.click(function(){
      self.removeCard();
    });

    //CONSTRUCTION AND RETURN OF CREATED CARD
    $card.append($cardDelete).append($cardDescription);
    return $card;

    }
  }
  Card.prototype = {
    removeCard: function() {
      this.$element.remove();
    }
  };

  //BOARD
  function Board(name){
    var self = this;

    this.id = randomString();
    this.name = name;
    this.$element = createBoard();

    function createBoard(){
      //CREATING BLOCKS
      var $board = $('<div>').addClass('board'),
        boardTitle = $('<h1>').addClass('title').text(self.name),
        boardColumnContainer = $('<div>').addClassgrunt('column-container'),
        boardAddColumn = $('<button>').addClass('create-column').text('Add a column'),
        boardAddBoard = $('<button>').addClass('create-board').text('Add a board'),
        boardDeleteBoard = $('<button>').addClass('delete-board').text('x');
  
    //ADDING EVENTS
    $boardAddColumn.click(function(){
    var name = prompt('Enter a column name');
    var column = new Column(name);
    board.addColumn(column);
  });
    $boardAddBoard.click(function(event){
      self.addBoard(new Board(prompt('Enter the name of the board')));

    });
    $boardDeleteBoard.click(function(){
      self.removeBoard();
    });

    //CONSTRUCTION BOARD ELEMENTS
    $board.append($boardTitle)
    .append($boardColumnContainer)
    .append($boardAddColumn)
    .append($boardAddBoard)
    .append($boardDeleteBoard);

    //RETURN BOARD
    return $board;
    }
  }


  
  Board.prototype = {
    addColumn: function(column) {
      this.$element.append(column.$element);
      initSortable();
    },
    $element: $('#board .column-container'),

    removeBoard: function() {
      this.$element.remove();
    },

    addBoard: function(board) {
      this.$element.append(board.$element);
    }
  };

  function initSortable() {
    $('.column-card-list').sortable({
      connectWith: '.column-card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }
  /*var board = {
    name: 'Kanban Board',
    addColumn: function(column) {
      this.$element.append(column.$element);
      initSortable();
    },
    $element: $('#board .column-container')
  };
 
 //DRAG'N'DROP
  function initSortable() {
    $('.column-card-list').sortable({
      connectWith: '.column-card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }

  //ADD EVENT FOR THE BUTTON ".create-column" - INSERT NEW COLUMNS INTO THE ARRAY
  $('.create-column').click(function(){
    var name = prompt('Enter a column name');
    var column = new Column(name);
    board.addColumn(column);
  });
  

  // CREATE COLUMN
  var todoColumn = new Column('To do');
  var doingColumn = new Column('Doing');
  var doneColumn = new Column('Done');

  // ADDING COLUMNS TO THE ARRAY
  board.addColumn(todoColumn);
  board.addColumn(doingColumn);
  board.addColumn(doneColumn);

  // CREATING NEW CARDS
  var card1 = new Card('New task');
  var card2 = new Card('Create kanban boards');

  // ADDING CARDS TO THE COLUMNS
  todoColumn.addCard(card1);
  doingColumn.addCard(card2);*/

}); //END