import http from 'node:http'
import { getUser, createUser, deleteUser } from './userController';

const server = http.createServer((req, res) => {
  if (req.url === '/api/users' && req.method === 'POST') {
    createUser(req, res);
  } else if (req.url?.match(/\/api\/users\/\w+/) && req.method === 'GET') {
    const id = parseInt(req.url.split('/')[3]);
    getUser(req, res, id);
  } else if (req.url?.match(/\/api\/users\/\w+/) && req.method === 'DELETE') {
    const id = parseInt(req.url.split('/')[3]);
    deleteUser(req, res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Route Not Found: Please use the api/users endpoint',
      })
    );
  }
});

server.listen(8000, () => console.log(`Server running on port 8000`));
