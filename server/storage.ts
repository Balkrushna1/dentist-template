import { type ContactFormData } from "@shared/schema";

export interface IStorage {
  // Add methods here if needed in the future
}

export class MemStorage implements IStorage {
  constructor() {}
}

export const storage = new MemStorage();
