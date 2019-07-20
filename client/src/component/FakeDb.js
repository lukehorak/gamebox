// class FakeDb {
//   constructor() {
//     // Check if instance exists
//     if (!FakeDb.instance) {
//       // 
//       init(this);

//       FakeDb.instance = this;
//     }

//     const init = (that) => {
//       const roomHolder = {};
//       that.createNewRoom = (roomId, roomName) => {
//         if (roomHolder[roomId] !== undefined) {
//           throw new Error(`Room with ${roomId} already exists`);
//         }

//         roomHolder[roomId] = roomName;
//       }

//       that.getRoomForId = (roomId) => {
//         return roomHolder[roomId]
//       }

//       that.getRoomId = (roomName) => {
//         let roomId = undefined;
//         Object.keys(roomHolder).forEach(key => {
//           if (roomHolder[key] === roomName) {
//             roomId = key;
//           }
//         });
//         return roomId
//       }

//       that.getRandomNumber = () => {
//         const min = 1000;
//         const max = 9999;
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min)) + min;
//       }
//     }

//     return FakeDb.instance;
//   }
// }

// const instance = new FakeDb();
// Object.freeze(instance);

// export default instance;