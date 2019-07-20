class FakeDb {
  constructor() {
    // Check if instance exists
    if (!FakeDb.instance) {
      // 
      const roomHolder = {};

      this.createNewRoom = (roomId, roomName) => {
        if (roomHolder[roomId] !== undefined) {
          throw new Error(`Room with ${roomId} already exists`);
        }

        roomHolder[roomId] = roomName;

        console.log('*********************************') 
        console.log(JSON.stringify(roomHolder, null, 2))
        console.log('*********************************')
      }

      this.getRoomForId = (roomId) => {
        return roomHolder[roomId]
      }

      this.getRoomId = (roomName) => {
        let roomId = undefined;
        Object.keys(roomHolder).forEach(key => {
          if (roomHolder[key] === roomName) {
            roomId = key;
          }
        });
        return roomId
      }

      this.getRandomNumber = () => {
        let min = 1000;
        let max = 9999;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

      FakeDb.instance = this;
    }

    return FakeDb.instance;
  }
}

const instance = new FakeDb();

Object.freeze(instance);

export default instance;