/**
 * Dolphin Entry Point!
 */

Error.stackTraceLimit = Infinity;

import { EventEmitter } from 'events';
EventEmitter.defaultMaxListeners = 128;

import boot from './boot';

export default function() {
    return boot();
}