export default {
    setupComponent(attrs, component) {
    composerModal = require("discourse/models/composer").default,
    composerController = container.lookup("controller:composer");

    action(function() {
        const controller = container.lookup("controller:navigation/category"),
      category = controller.get("category.id"),
      topicCategory = container
        .lookup("route:topic")
        .get("context.category.id"),
      categoryd = topicCategory ? topicCategory : category;

    composerController.open({
      action: composerModal.CREATE_TOPIC,
      categoryId: categoryd,
      draftKey: composerModal.DRAFT
    });
    }),
        
       
    },
  };