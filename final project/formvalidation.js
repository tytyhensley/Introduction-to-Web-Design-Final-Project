$(function() {
  $("form[name='contact']").validate({
    rules: {
      yourname: "required",
      email: {
        required: true,
        email: true
      },
      yourmessage: "required",    
    },
    messages: {
      yourname: "You forgot your name",
      email: "I need your email",
      yourmessage: "What were you going to say",

    },
    submitHandler: function(form) {
      form.submit();
    }
  });
})