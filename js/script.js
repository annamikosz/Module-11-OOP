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
      var $board = $('<div id="' + self.id + '">').addClass('board'),
        boardTitle = $('<h1>').addClass('title').text(self.name),
        boardColumnContainer = $('<div>').addClass('column-container'),
        boardAddColumn = $('<button>').addClass('create-column').text('Add a column'),
        boardAddBoard = $('<button>').addClass('create-board').text('Add a board'),
        boardDeleteBoard = $('<button>').addClass('delete-board').text('x');
  
    //ADDING EVENTS
    boardAddColumn.click(function(){
      var name = prompt('Enter a column name');
      var column = new Column(name);
      self.addColumn(column);
    }); 

    boardDeleteBoard.click(function(){
      self.removeBoard();
    });

    //CONSTRUCTION BOARD ELEMENTS
    $board.append(boardTitle)
      .append(boardColumnContainer)
      .append(boardAddColumn)
      .append(boardAddBoard)
      .append(boardDeleteBoard);

    $('body').append($board);

    //RETURN BOARD
    return $board;
    }
  }

  Board.prototype.removeBoard = function() {
    this.$element.remove();
  };

  Board.prototype.addColumn = function(column) {
    this.$element.find('.column-container').append(column.$element);
    initSortable();
  };

  function initSortable() {
    $('.column-card-list').sortable({
      connectWith: '.column-card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }

  $('#add-board').click(function() {
    var board = new Board(prompt('Board name:'));
  });
}); //END