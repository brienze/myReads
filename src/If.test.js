import React from 'react';
import { shallow } from 'enzyme';
import If from './If.js';

it('renderiza corretamente',()=>{
  const test = (
    <If test={true}>
      <span>Olá teste</span>
    </If>
  )
  expect(shallow(test)).toMatchSnapshot();
})

it('renderiza corretamente sem elemento filho',()=>{
  const test = (
    <If test={false}>
      <span>Olá teste</span>
    </If>
  )
  expect(shallow(test)).toMatchSnapshot();
})
