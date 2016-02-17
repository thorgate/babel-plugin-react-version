var changes = require('./changes');


function reactVersion(orig) {
    if (!orig || typeof orig !== 'string' || !/^013|4$/.test(orig)) {
        throw new Error('Invalid react version: ' + orig);
    }

    return orig[0] + '.' + orig.substring(1) + '.0';
}



module.exports = function(t) {
  return {
    visitor: {
      Identifier: function(path, state) {
          if (path.node.name) {
              var nodeName = path.node.name.substring(1);

              Object.keys(changes).forEach(function(change) {
                  if (typeof changes[nodeName] !== 'undefined') {
                      path.replaceWithSourceString(changes[nodeName][reactVersion(state.opts.v || state.opts.version)]);
                  }
              });
          }
      }
    }
  };
}
