import './app/configs/database';
import params from './app/configs/params';
import http from 'http';
import App from './app/app';
const PID = process.pid;

const server = http.createServer(App());

server.listen(params.apiPort, () => {
    console.info(`Listening ${server.address().port} port. Process: ${PID}`);
});
