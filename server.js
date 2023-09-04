const io = require('socket.io')(5000, {
  cors : {
      origin : ['http://localhost:3000'],
      methods: ["GET", "POST"]
  }
})

const drones = [
{
  name : "abc",
  id: 1,
  currentLocation: [123, 123],
  waypoints: [
    [123, 123],
    [123, 123],
  ],
},
{
  name : "abc",
  id: 2,
  currentLocation: [123, 123],
  waypoints: [
    [123, 123],
    [123, 123],
  ],
},
{
  name : "abc",
  id: 3,
  currentLocation: [123, 123],
  waypoints: [
    [123, 123],
    [123, 123],
  ],
},
{
  name : "abc",
  id: 4,
  currentLocation: [123, 123],
  waypoints: [
    [123, 123],
    [123, 123],
  ],
},
{
  name : "abc",
  id: 6,
  currentLocation: [123, 123],
  waypoints: [
    [123, 123],
    [123, 123],
  ],
},
{
  name : "abc",
  id: 7,
  currentLocation: [123, 123],
  waypoints: [
    [123, 123],
    [123, 123],
  ],
},
];

io.on('connection', (socket) => {
socket.emit('drones', drones);
socket.on('disconnect', () => {
  console.log('A user disconnected');
});
});