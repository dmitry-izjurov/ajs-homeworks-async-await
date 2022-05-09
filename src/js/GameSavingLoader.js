import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const readFunc = await read();
        return await json(readFunc);
      } catch (e) {
        return console.log(e);
      }
    })();
  }
}
