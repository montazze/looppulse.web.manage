Template.admin_user_input.settings = function(){
  return {
   position: "bottom",
   limit: 5,
   rules: [
     {
       token: '',
       collection: Meteor.users,
       field: "emails.address",
       template: Template.userPill
     }
   ]
  }
};