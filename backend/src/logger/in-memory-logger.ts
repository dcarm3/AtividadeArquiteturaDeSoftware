import { Injectable } from "@nestjs/common";
import { Logger as LoggerInterface } from "./logger.interface";

@Injectable()
export class InMemoryLogger implements LoggerInterface {
  private logs: string[] = [];

  addLog(message: string) {
    const timestamp = this.getFormattedDateTime();
    const log = `[${timestamp}] ${message}`;
    this.logs.push(log);
    return log;
  }

  getLogs(): string[] {
    return this.logs;
  }

  private getFormattedDateTime(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }
}
