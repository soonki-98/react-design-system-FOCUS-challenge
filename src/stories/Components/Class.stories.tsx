import { Story } from "@storybook/react/types-6-0";
import Classes from "@components/Classes";
import { md_recommend, time_deal } from "@static/data/classDatas";
import { CoverRatio } from "@class101/ui";
import { popular_event } from "@static/data/event";

export default {
  title: "Components/Classes",
  container: Classes,
};

const Template: Story = ({ data, title, imageRatio }) => {
  return <Classes data={data} title={title} imageRatio={imageRatio} />;
};

export const Default = Template.bind({});
Default.args = {
  data: time_deal,
  title: "오늘의 특가! TIMEDEAL",
};

export const MDClass = Template.bind({});
MDClass.args = {
  data: md_recommend,
  title: "MD 추천 클래스",
  imageRatio: CoverRatio.RATIO_3X4,
};

export const PopularEvent = Template.bind({});
PopularEvent.args = {
  data: popular_event,
  title: "진행중인 인기 이벤트",
  imageRatio: CoverRatio.RATIO_16X10,
};
