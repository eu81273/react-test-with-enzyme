import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Foo from '../src/Foo';

describe("<Foo />", function () {
    //Shallow Rendering
    //Shallow rendering 은 컴포넌트 단위로 테스트할 경우에 유용하다. (하위 컴포넌트의 동작에 대해서 간접적으로 테스트하지 않는 경우)
    it("contains spec with an expectation", function () {
        expect(shallow(<Foo />).is('.foo')).to.equal(true);
    });

    //Full DOM Rendering
    //Full DOM rendering 은 DOM api 들과 상호작용을 하는 경우나 리액트 컴포넌트의 전체 라이프사이클(componentDidMount 등)을 테스트할 필요가 있을 때 적합하다.
    it("contains spec with an expectation", function () {
        expect(mount(<Foo />).find('.foo').length).to.equal(1);
    });

    //Shallow Rendering + simulate
    it('simulates click events', () => {
        const wrapper = shallow(<Foo/>);

        expect(wrapper.text()).to.equal('0');
        wrapper.find('.foo').simulate('click');
        expect(wrapper.text()).to.equal('1');
    });
});
