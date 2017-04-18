import React from 'react';
import assert from 'assert';
import isClassComponent, { isPureClassComponent } from './';

const element = React.createElement('div', { children: 'hi' });

const FuncComponent = (props) => element;

function FuncComponent2(props) {
    return element;
}

class ClassComponent extends React.Component {
    render() {
        return element;
    }
}

class ClassComponent2 extends React.PureComponent {
    render() {
        return element;
    }
}

const ClassComponent3 = React.createClass({
    render() {
        return element;
    }
});

assert.equal(isClassComponent(FuncComponent), false);
assert.equal(isClassComponent(FuncComponent2), false);
assert.equal(isClassComponent(ClassComponent), true);
assert.equal(isClassComponent(ClassComponent2), true);
assert.equal(isClassComponent(ClassComponent3), true);

assert.equal(isPureClassComponent(ClassComponent), false);
assert.equal(isPureClassComponent(ClassComponent2), true);

console.log('OK');
