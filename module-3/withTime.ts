import EventEmitter from './eventEmitter.ts'

export default class WithTime extends EventEmitter {
    async execute(asyncFunc: Function, ...args: any[]) {
        // emit event start, end, data received
        // call asyncFunc with args specified
        // compute the time it takes to execute asyncFunc

        this.addListener('start', () => console.time('timer'));

        this.addListener('end', () => console.timeEnd('timer'));

        this.emit('start');

        await asyncFunc(...args);

        this.emit("end");
    }
}
