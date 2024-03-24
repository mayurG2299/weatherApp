const fs = require('fs');
const path = require('path');

// Function to log requests
module.exports.logRequest = (rootDirectory) => {
    return function (req, res, next) {

        const shouldLog = req.method === 'GET' && req.originalUrl.startsWith(`/${process.env.NODE_ENV}/weather`);
        console.log("shouldLog", shouldLog)

        if (shouldLog) {
            const logsFolderPath = path.join(rootDirectory, 'logs')
            if (!fs.existsSync(logsFolderPath)) {
                fs.mkdirSync(logsFolderPath, { recursive: true });
            }

            // Construct the path to the log file

            const logFilePath = path.join(rootDirectory, 'logs', 'request.log');

            // Create the log file if it doesn't exist
            if (!fs.existsSync(logFilePath)) {
                fs.writeFileSync(logFilePath, ''); // Create an empty file
            }

            const logMessage = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}`;

            // Append log message to a log file
            fs.appendFile(logFilePath, logMessage + '\n', (err) => {
                if (err) {
                    console.error('Error writing to log file:', err);
                }
            });

            // Capture the response details
            const originalSend = res.send;
            res.send = function (data) {
                console.log(data)
                const responseLogData = `${new Date().toISOString()} - Response sent: ${JSON.stringify(data)}\n`;
                fs.appendFileSync(logFilePath, responseLogData);
                originalSend.call(res, data);
            };

        }

        next();
    };
}

