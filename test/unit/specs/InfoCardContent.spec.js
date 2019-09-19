import { mount, shallow } from 'avoriaz';
import InfoCardContent from '@/InfoCardContent';
import Trend from 'vuetrend';

describe('InfoCardContent', () => {
  // Inspect the content classes.
  it('contains info-card, title and body classes', () => {
    // Build and mount the component.
    const wrapper = mount(InfoCardContent);

    // Check if the main classes exist in the component.
    expect(wrapper.hasClass('info-card')).to.equal(true);
    expect(wrapper.contains('.title')).to.equal(true);
    expect(wrapper.contains('.body')).to.equal(true);
  });

  // Inspect the title of the card body.
  it('renders title properly', () => {
    // Build and mount the component.
    const wrapper = mount(InfoCardContent, {
      propsData: {
        title: 'MyCardTitle',
        type: 'graph',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    });

    // Check the title of the component.
    const title = wrapper.first('.title');
    expect(title.text()).to.equal('MyCardTitle');
  });

  // Inspect the trend component on conditional rendering.
  it('renders trend component properly', () => {
    // Build the shallow component.
    const wrapper = shallow(InfoCardContent, {
      propsData: {
        title: 'MyCardTitle',
        type: 'graph',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    });

    // Check for existance of the trend component.
    expect(wrapper.contains(Trend)).to.equal(true);
  });

  // Inspect the text part of the component body.
  it('renders text component properly', () => {
    // Build and mount the component.
    const textData = 'lorem ipsum dolor sit amet.';
    const wrapper = mount(InfoCardContent, {
      propsData: {
        title: 'MyCardTitle',
        data: textData,
      },
    });

    // Get and check if the body contains a paragraph element.
    const body = wrapper.first('.body');
    expect(body.contains('p')).to.equal(true);

    // Check if body paragraph contains the proper value.
    expect(body.first('p').text()).to.equal(textData);
  });

  // Inspect the String object as the data type.
  it('renders text component properly with String object', () => {
    // Build and mount the component.
    const textData = new String('lorem ipsum dolor sit amet.'); // eslint-disable-line
    const wrapper = mount(InfoCardContent, {
      propsData: {
        title: 'MyCardTitle',
        data: textData,
      },
    });

    // Get and check if the body contains a paragraph element.
    const body = wrapper.first('.body');
    expect(body.contains('p')).to.equal(true);

    // Check if body paragraph contains the proper value.
    expect(body.first('p').text()).to.equal(textData.toString());
  });
});

