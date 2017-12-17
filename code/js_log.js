/**
 * log4js，类似与Java的log4j
 */
const log4js = require('log4js')

const config = {
    appenders: {
        stdout: { type: 'stdout' },
        cheese: { type: 'file', filename: 'cheese.log' },
    },
    categories: {
        default: {
            appenders: ['stdout', 'cheese'],
            level: 'info',
        }
    }
}
log4js.configure(config)
const logger = log4js.getLogger()
logger.info('info日志')
logger.debug('debug日志')
