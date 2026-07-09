const ProgressStorage = {
  key: "iospath-progress",

  load() {
    const fallback = {
      completedTopicIds: [],
      githubLinks: {},
      topicNotes: {},
      favoriteResources: [],
      questionStats: {
        knownIds: [],
        reviewIds: []
      }
    };

    try {
      const stored = localStorage.getItem(this.key);
      return stored ? { ...fallback, ...JSON.parse(stored) } : fallback;
    } catch (error) {
      return fallback;
    }
  },

  save(progress) {
    localStorage.setItem(this.key, JSON.stringify(progress));
  },

  reset() {
    localStorage.removeItem(this.key);
  }
};
