import { System, SystemCommand } from './types/SystemTypes.ts'
import { activityMonitor } from './events/activityMonitor.ts'
import { logActivity } from './events/logActivity.ts'
import os from 'os';
import fs from 'fs';

const systemType = os.type();
const liveActivity = activityMonitor(SystemCommand[systemType as System])
const logger = logActivity();
let logData = '';


liveActivity.on('writeOutCurrentProcess', (currentProcess: string): void => {
    console.log(`${currentProcess}`);
    logData = logData + currentProcess;
});

logger.on('createLogFile', (): void => {
    fs.writeFile('logs/activityMonitor.log', logData, () => logData = '');
})
