import nats, { Stan } from 'node-nats-streaming';

class Natsu {
  private _client?: Stan;

  get client() {
    if (!this._client) {
      throw new Error(
        'Make a connection first by using .connect(clusterId, clientId, url)'
      );
    }
    return this._client;
  }

  connect(cid: string, clientId: string, url: string): Promise<Stan> {
    this._client = nats.connect(cid, clientId, { url });

    return new Promise((resolve, reject) => {
      this.client.on('connect', () => resolve(this.client));
      this.client.on('error', (err) => reject(err));
    });
  }
}

export const natsu = new Natsu();
