export interface Logger {
  addLog(message: string): string;
  getLogs(): string[];
}
