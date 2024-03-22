import EventEmitter from './eventEmitter.ts'
import WithTime from './withTime.ts'

const myEmitter = new EventEmitter();

function c1() {
    console.log('an event occurred!');
}

function c2() {
    console.log('yet another event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne

// Register eventOnce for one time execution
myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));
myEmitter.once('init', () => console.log('init once fired'));

// Register for 'status' event with parameters
myEmitter.on('status', (code: string, msg: string)=> console.log(`Got ${code} and ${msg}`));


myEmitter.emit('eventOne');

// Emit 'eventOnce' -> After this the eventOnce will be
// removed/unregistered automatically
myEmitter.emit('eventOnce');


myEmitter.emit('eventOne');
myEmitter.emit('init');
myEmitter.emit('init'); // Will not be fired
myEmitter.emit('eventOne');
myEmitter.emit('status', 200, 'ok');

// Get listener's count
console.log(myEmitter.listenerCount());

// Get array of rawListeners//
// Event registered with 'once()' will not be available here after the
// emit has been called
console.log(myEmitter.rawListeners('eventOne'));

// Get listener's count after remove one or all listeners of 'eventOne'
myEmitter.off('eventOne');
console.log(myEmitter.listenerCount());
myEmitter.off('eventOne');
console.log(myEmitter.listenerCount());

const withTime = new WithTime();

withTime.addListener('begin', () => console.log('About to execute'));
withTime.addListener('end', () => console.log('Done with execute'));

const fetchFromUrl = async (url: string, cb: Function): Promise<any> => {
    // fetch from https://jsonplaceholder.typicode.com/posts/1
    // transform to JSON
    const response = await fetch(url);
    return response.json();
}

withTime.execute(fetchFromUrl, 'https://jsonplaceholder.typicode.com/posts/1');

console.log(withTime.rawListeners("end"));
