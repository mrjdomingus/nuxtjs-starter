module.exports = function (context, req) {
    context.log('RedirectLogin function processed a request.');

    context.res = {
      // status: 200, /* Defaults to 200 */
      body: req.body
  };
  context.done();
};
