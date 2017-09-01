import { mount, shallow } from 'avoriaz';
import VueInfoCard from '@/InfoCard';
import InfoCardBody from '@/InfoCardContent';

describe('InfoCard', () => {
  // Inspect the flip wrappers and container classes.
  it('contains flip container classes', () => {
    const wrapper = mount(VueInfoCard);
    expect(wrapper.hasClass('flip-container')).to.equal(true);
    expect(wrapper.contains('.flipper')).to.equal(true);
  });

  // Inspect the faces of the card.
  it('contains front and back faces', () => {
    const wrapper = mount(VueInfoCard);
    expect(wrapper.contains('.front')).to.equal(true);
    expect(wrapper.contains('.back')).to.equal(true);
  });

  // Check if it contains the body component.
  it('contains body component', () => {
    const wrapper = shallow(VueInfoCard);
    expect(wrapper.contains(InfoCardBody)).to.equal(true);
  });
});

