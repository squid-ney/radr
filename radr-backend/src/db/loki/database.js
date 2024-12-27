"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lokijs_1 = __importDefault(require("lokijs"));
class LokiDatabase {
    constructor() {
        this.db = new lokijs_1.default('radr.db');
    }
    getVariants() {
        throw new Error('Method not implemented.');
    }
    getVariantById(id) {
        throw new Error('Method not implemented.');
    }
}
