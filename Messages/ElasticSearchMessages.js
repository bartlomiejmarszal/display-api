const { Client } = require('@elastic/elasticsearch');

class ElasticsearchAdapter {
  constructor(config) {
    this.client = new Client(config);
  }

  async getMessages() {
    const { body } = await this.client.search({
      index: 'messages',
      body: {
        query: {
          match_all: {}
        }
      }
    });

    return body.hits.hits.map(hit => hit._source);
  }
}

module.exports = ElasticsearchAdapter;