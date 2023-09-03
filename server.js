const io = require('socket.io')(5000, {
  cors : {
      origin : ['http://localhost:3000'],
      methods: ["GET", "POST"]
  }
})

const drones = [
{
  id: 1,
  currentLocation: [123, 123],
  waypoints: [
    [123, 123],
    [123, 123],
  ],
},
{
  id: 2,
  currentLocation: [123, 123],
  waypoints: [
    [123, 123],
    [123, 123],
  ],
},
{
  id: 3,
  currentLocation: [123, 123],
  waypoints: [
    [123, 123],
    [123, 123],
  ],
},
{
  id: 1,
  currentLocation: [123, 123],
  waypoints: [
    [123, 123],
    [123, 123],
  ],
},
{
  id: 1,
  currentLocation: [123, 123],
  waypoints: [
    [123, 123],
    [123, 123],
  ],
},
{
  id: 1,
  currentLocation: [123, 123],
  waypoints: [
    [123, 123],
    [123, 123],
  ],
},
];

io.on('connection', (socket) => {
console.log('A user connected');
socket.emit('drones', drones);
socket.on('disconnect', () => {
  console.log('A user disconnected');
});
});