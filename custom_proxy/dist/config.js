var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'node:fs/promises';
import { parse } from 'yaml';
import { rootConfigSchema } from './config_schema.js';
export function parseConfig(filepath) {
    return __awaiter(this, void 0, void 0, function* () {
        const configContent = yield fs.readFile(filepath, 'utf-8');
        const confiParsed = parse(configContent);
        return JSON.stringify(confiParsed);
    });
}
export function validateConfig(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const validateConfig = yield rootConfigSchema.parseAsync(JSON.parse(config));
        return validateConfig;
    });
}
