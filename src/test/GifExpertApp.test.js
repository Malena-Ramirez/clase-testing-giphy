import { shallow } from "enzyme"
import { GifExpertApp } from "../GifExpertApp"
import React from 'react';

describe('Pruebas en <GifExpertApp /> ', () => {

  test('Debe mostrarse correctamente ', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe mostrarse una lista de categorias ', () => {
    const categories = ['one punch', 'dragon ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  })

})