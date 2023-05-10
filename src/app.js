import json from './parser';
import read from './reader';

class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then((data) => {
        json(data).then((valueString) => {
          let stringJSON = {};
          try {
            stringJSON = JSON.parse(valueString, (key, value) => {
              if (key === 'created') {
                return new Date(value);
              }
              if (['id', 'level', 'points'].includes(key)) {
                return Number(value);
              }
              return value;
            });
          } catch (SyntaxError) {
            reject(new Error('Wrong string format!'));
          }

          resolve(stringJSON);
        });
      });
    });
  }
}
