import { mount } from 'avoriaz';
import VueInfoCard from '@/InfoCard';

describe('AppBody', () => {
  // Inspect the component instance on mount.
  it('correctly sets the message when created', () => {
    const wrapper = mount(VueInfoCard);
    expect(wrapper.contains('.front')).to.equal(true);
  });
/*
  // Check if it renders the button text properly for Google AdWords.
  it('renders correct text for given title', () => {
    expect(mountedComponent.$el.querySelector('.row .container').textContent).to.equal(title);
  });
  */
});

