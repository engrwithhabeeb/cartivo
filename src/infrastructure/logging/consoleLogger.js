export const logger = {
  error: (message) => {
    const logMessage =
      message instanceof Error ? message.stack || message.message : message;
    console.error(`[ERROR] ${new Date().toISOString()}: ${logMessage}`);
  },
  warn: (message) => {
    console.warn(`[WARN] ${new Date().toISOString()}: ${message}`);
  },
};
