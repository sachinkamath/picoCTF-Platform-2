// Generated by CoffeeScript 1.9.3
var renderShellServers;

renderShellServers = _.template($("#shell-servers-template").remove().text());

$(function() {
  return apiCall("GET", "/api/user/shell_servers", {}).done(function(data) {
    if (data.data) {
      return $("#shell-servers").html(renderShellServers({
        servers: data.data
      }));
    }
  });
});
