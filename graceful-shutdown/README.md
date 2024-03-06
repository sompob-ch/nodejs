# Graceful Shutdown with Node.js

What is a Graceful Shutdown? \
A graceful shutdown involves carefully handling the shutdown signal, completing the in-progress tasks, closing the active connections, and then finally allowing the application to terminate. \
This ensures that the system resources are properly freed and that the application does not exit while it's in the middle of important tasks.

Why is a Graceful Shutdown Important? \
Handling shutdown signals in your applications allows you to manage resources properly, provide a better user experience, and help your system degrade more gracefully. \
Not handling these signals can lead to issues like data loss or corruption, incomplete transactions, resource leaks, and unexpected behavior.

Listening for Shutdown Signals \
In Node.js, we can listen to process-level signals, such as SIGINT and SIGTERM. \
These signals are emitted when the process is requested to shut down, whether by manual user interruption (SIGINT from Ctrl+C) or system-level termination (SIGTERM from Docker or another process manager). \
To listen for these signals, we can use the process.on method and provide a callback function that will be executed when these signals are received.

## how to run

```bash
docker compose up

docker stop graceful-shutdown-app-1

# show log SIGTERM signal received.
```

## Ref

- https://dev.to/yusadolat/nodejs-graceful-shutdown-a-beginners-guide-40b6