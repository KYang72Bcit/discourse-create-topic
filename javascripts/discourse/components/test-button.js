import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import { inject as service } from "@ember/service";
export default Component.extend({
  router: service(),

  @discourseComputed("currentUser")
  hideLoggedIn(currentUser) {
    console.log(currentUser? "true":"false");
    return (
      (currentUser ? true : false)
    );
  },


});