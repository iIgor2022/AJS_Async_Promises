import GameSaving from './GameSaving';
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((value) => {
        try {
          const stringJSON = JSON.parse(value);
          return new GameSaving(stringJSON.id, stringJSON.created, stringJSON.userInfo);
        } catch (SyntaxError) {
          throw new Error('Wrong string format!');
        }
      });
  }
}
