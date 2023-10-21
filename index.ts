import express from 'express';
import ZKHLIB from 'zkh-lib';

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  let obj = new ZKHLIB('10.1.75.68', 4370, 5200, 5000);
  try {
    await obj.createSocket();
    const logs = await obj.getAttendances();
    console.log(logs);
    const users = await obj.getUsers;
    console.log(users);
    await obj.disconnect();
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running -> http://localhost:${PORT}`);
});
