import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    async function GameSaving() {
      try {
        const readFunc = await read();
        return await json(readFunc);
      } catch (e) {
        return e;
      }
    }

    return new GameSaving();
  }
}
