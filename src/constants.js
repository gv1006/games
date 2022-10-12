class Constants {
  
  static get MAX_CHANCES() {
    return 9;
  }
  
  static get ROW_SIZE() {
    return 3;
  }

  static get COLUMN_SIZE() {
    return 3;
  }

  static get GAME_STATUS() {
    return {
      CONTINUE: 0,
      WIN: 1,
      TIE: 2
    };
  };
}

export default Constants;