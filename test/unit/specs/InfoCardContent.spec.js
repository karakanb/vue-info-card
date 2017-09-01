import { mount, shallow } from 'avoriaz';
import InfoCardContent from '@/InfoCardContent';
import Trend from 'vuetrend';

describe('InfoCardContent', () => {
  // Inspect the content classes.
  it('contains info-card, title and body classes', () => {
    const wrapper = mount(InfoCardContent);
    expect(wrapper.hasClass('info-card')).to.equal(true);
    expect(wrapper.contains('.title')).to.equal(true);
    expect(wrapper.contains('.body')).to.equal(true);
  });

  // Inspect the title of the card body.
  it('renders title properly', () => {
    const wrapper = mount(InfoCardContent, {
      propsData: {
        title: 'MyCardTitle',
        type: 'graph',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    });

    const title = wrapper.first('.title');
    expect(title.text()).to.equal('MyCardTitle');
  });

  // Inspect the trend component on conditional rendering.
  it('renders trend component properly', () => {
    const wrapper = shallow(InfoCardContent, {
      propsData: {
        title: 'MyCardTitle',
        type: 'graph',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    });
    expect(wrapper.contains(Trend)).to.equal(true);
  });

  // Inspect the text part of the component body.
  it('renders text component properly', () => {
    const textData = 'lorem ipsum dolor sit amet.';
    const wrapper = mount(InfoCardContent, {
      propsData: {
        title: 'MyCardTitle',
        data: textData,
      },
    });
    const body = wrapper.first('.body');
    expect(body.contains('p')).to.equal(true);
    expect(body.first('p').text()).to.equal(textData);
  });

  // Inspect the String object as the data type.
  it('renders text component properly with String object', () => {
    const textData = new String('lorem ipsum dolor sit amet.'); // eslint-disable-line
    const wrapper = mount(InfoCardContent, {
      propsData: {
        title: 'MyCardTitle',
        data: textData,
      },
    });
    const body = wrapper.first('.body');
    expect(body.contains('p')).to.equal(true);
    expect(body.first('p').text()).to.equal(`"${textData.toString()}"`);
  });
});

