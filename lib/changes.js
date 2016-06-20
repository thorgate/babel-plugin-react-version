module.exports = {
    'RVfindDomNode': {
        '15.x': 'require(\'react-dom\').findDOMNode',
        '0.14.x': 'require(\'react-dom\').findDOMNode',
        '0.13.x': 'require(\'react\').findDOMNode'
    },
    'RVTransitionGroup': {
        '15.x': 'require(\'react-addons-transition-group\')',
        '0.14.x': 'require(\'react-addons-transition-group\')',
        '0.13.x': 'require(\'react/addons\').addons.TransitionGroup'
    },
    'RVTestUtils': {
        '15.x': 'require(\'react-addons-test-utils\')',
        '0.14.x': 'require(\'react-addons-test-utils\')',
        '0.13.x': 'require(\'react/addons\').addons.TestUtils'
    },
    'RVRenderer': {
        '15.x': 'require(\'react-dom\')',
        '0.14.x': 'require(\'react-dom\')',
        '0.13.x': 'require(\'react\')'
    }
};

