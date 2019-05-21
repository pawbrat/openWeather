import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Search from '@/components/Search.vue';

describe('Search', () => {
  const wrapper = mount(Search);
  it('contains search button', () => {
    expect(wrapper.html()).contain('<button>search</button>')
	})
}
);