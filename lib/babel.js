var changes = require('./changes');


function reactVersion(orig) {
    if (!orig || typeof orig !== 'string' || (!/^013|4$/.test(orig) && orig !== '15')) {
        throw new Error(
            'Invalid react version: ' + orig + '. Valid versions are: `013`, `014` and `15`.'
        );
    }

    if (orig.startsWith('15')) {
        return orig + '.x';
    }

    return orig[0] + '.' + orig.substring(1) + '.x';
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
