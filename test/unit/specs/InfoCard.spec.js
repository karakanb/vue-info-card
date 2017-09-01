import { mount, shallow } from 'avoriaz';
import VueInfoCard from '@/InfoCard';
import InfoCardBody from '@/InfoCardContent';

describe('InfoCard', () => {
  // Inspect the flip wrappers and container classes.
  it('contains the main classes', () => {
    // Build and mount the component.
    const wrapper = mount(VueInfoCard);

    // Check if the main classes exist in the component.
    expect(wrapper.hasClass('flip-container')).to.equal(true);
    expect(wrapper.contains('.flipper')).to.equal(true);
    expect(wrapper.contains('.front')).to.equal(true);
    expect(wrapper.contains('.back')).to.equal(true);
  });

  // Check if the parent component contains the body component.
  it('contains body component', () => {
    const wrapper = shallow(VueInfoCard);
    expect(wrapper.contains(InfoCardBody)).to.equal(true);
  });
});

