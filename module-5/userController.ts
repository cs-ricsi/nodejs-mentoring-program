import { IncomingMessage, ServerResponse } from "http";
import getPostBodyAsync from './utils/getPostBodyAsync'

type User = {
    id: number,
    name: string,
    email: string,
    hobbies: Hobbie[]
};

type Hobbie = string;

let Users: User[] = [];
let id: number = 0;

// @desc    Gets Single User
// @route   GET /api/users/:id
async function getUser(req: IncomingMessage, res: ServerResponse, id: number) {
    try {

        const user = Users.find((user) => user.id === id);

        if (!user) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'User Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(user))
        }
    } catch (error) {
        console.log(error)
    }
}

// @desc    Create a User
// @route   POST /api/users
async function createUser(req: IncomingMessage, res: ServerResponse) {
    try {

        const body: User = await getPostBodyAsync(req);

        const newUser: User = { id: id, name: body.name, email: body.email, hobbies: [] };
        id++;

        Users.push(newUser);

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newUser))

    } catch (error) {
        console.log(error)
    }
}

// @desc    Delete User
// @route   DELETE /api/users/:id
async function deleteUser(req: IncomingMessage, res: ServerResponse, id: number) {
    try {
        const user = Users.find((user) => user.id === id);

        if (!user) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'User Not Found' }))
        } else {
            Users = Users.filter(user => user.id !== id);
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `User ${id} removed` }))
        }
    } catch (error) {
        console.log(error)
    }
}

// @desc    Gets Single User Hobbies
// @route   GET /api/users/:userId/hobbies
async function getUserHobbies(req: IncomingMessage, res: ServerResponse, id: number) {
    try {

        const user = Users.find((user) => user.id === id);

        if (!user?.hobbies.length) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'User Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(user.hobbies))
        }
    } catch (error) {
        console.log(error)
    }
}

export {
    getUser,
    createUser,
    deleteUser,
    getUserHobbies
}