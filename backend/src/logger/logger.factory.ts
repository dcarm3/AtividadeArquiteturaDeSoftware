import { InMemoryLogger } from "./in-memory-logger";
import { Logger } from "./logger.interface";

export type LoggerType = "memory";
//se tudo der certo, adicionar talvez 'file', 'cloud', etc.

export class LoggerFactory {
  static createLogger(type: LoggerType): Logger {
    switch (type) {
      case "memory":
        return new InMemoryLogger();
      default:
        throw new Error(`Logger do tipo ${type} não é suportado.`);
    }
  }
}
