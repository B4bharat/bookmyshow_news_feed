import articleDetails from './articleDetails';

export default {
  all: () => articleDetails(),
  get: function(id) {
    return this.all().find(function(article) {
      return article.id === id;
    });
  }
};