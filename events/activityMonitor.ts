import childProcess from 'node:child_process';
import EventEmitter from 'node:events';

export const activityMonitor = (command: string): EventEmitter => {
  const emitter = new EventEmitter();

  setInterval(() => {
    childProcess.exec(command, (error: Error | null, stdout: string) => {
      console.clear();
      emitter.emit('writeOutCurrentProcess', stdout);

      if (error !== null) {
        emitter.emit(
          'error',
          new Error(`Something went wrong: ${error}`)
        );
        return;
      }
    });
  }, 100);

  return emitter;
}
