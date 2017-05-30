import articleDetails from './articleDetails';

export default {
  all: () => articleDetails(),
  get: function(id) {
    return articleDetails.find(function(article) {
      return article.id === id;
    });
  }
};