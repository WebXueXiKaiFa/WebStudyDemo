define(['angularAMD'],
  function(angularAMD) {
      angularAMD.factory('UserService', [
      function() {
        return {
          getUser: function() {
            return 'testUser';
          }
        };
      }]);
  });
