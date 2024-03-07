import EventEmitter from 'node:events';

export const logActivity = (): EventEmitter => {
    const emitter = new EventEmitter();

    setInterval(() => {
        emitter.emit('createLogFile');
    }, 1000 * 60);

    return emitter;
}
