# babel-plugin-react-version

This plugin transforms the following keywords to react version
specific calls:

- `$RVfindDomNode` -> `require('react-dom').findDOMNode` or `require('react').findDOMNode`
- `$RVTransitionGroup` -> `require('react-addons-transition-group')` or `require('react/addons').addons.TransitionGroup`
- `$RVTestUtils` -> `require('react-addons-test-utils')` or `require('react/addons').addons.TestUtils`
- `$RVRenderer` -> `require('react-dom')` or `require('react')`

