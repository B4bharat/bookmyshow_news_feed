import articleDetails from './articleDetails';

export const articleAPI = {
  all: () => articleDetails,
  get: function(id) {
    return articleDetails.find(function(article) {
      return article.id === id;
    });
  }
};