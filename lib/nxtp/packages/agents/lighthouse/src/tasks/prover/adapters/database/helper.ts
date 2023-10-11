import { Database } from "@connext/nxtp-adapters-database";
import { DBHelper } from "@connext/nxtp-utils";

export class SpokeDBHelper implements DBHelper {
  constructor(private domain: string, private count: number, private db: Database) {}

  public async getCount(): Promise<number> {
    return this.count;
  }

  public async getNode(index: number): Promise<string | undefined> {
    return await this.db.getSpokeNode(this.domain, index, this.count);
  }

  public async getNodes(start: number, end: number): Promise<string[]> {
    return await this.db.getSpokeNodes(this.domain, start, end, this.count);
  }

  public async getRoot(path: string): Promise<string | undefined> {
    return await this.db.getRoot(this.domain, path);
  }

  public async putRoot(path: string, hash: string): Promise<void> {
    return await this.db.putRoot(this.domain, path, hash);
  }
}

export class HubDBHelper implements DBHelper {
  constructor(private domain: string, private count: number, private db: Database) {}

  public async getCount(): Promise<number> {
    return this.count;
  }

  public async getNode(index: number): Promise<string | undefined> {
    return await this.db.getHubNode(index, this.count);
  }

  public async getNodes(start: number, end: number): Promise<string[]> {
    return await this.db.getHubNodes(start, end, this.count);
  }

  public async getRoot(path: string): Promise<string | undefined> {
    return await this.db.getRoot(this.domain, path);
  }

  public async putRoot(path: string, hash: string): Promise<void> {
    return await this.db.putRoot(this.domain, path, hash);
  }
}
