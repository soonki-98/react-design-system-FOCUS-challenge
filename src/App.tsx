import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import GlobalStlye from "./static/styles/global";
import { BottomCarousel, TopCarousel } from "./components/Carousel";
import { top_event } from "./static/data/topEventCarousel";
import Classes from "./components/Classes";
import { time_deal, md_recommend, open_soon } from "./static/data/classDatas";
import styled from "styled-components";
import { CoverRatio } from "@class101/ui";
import { bottom_event, popular_event } from "./static/data/event";
import "./App.css";
import { useCallback, useEffect, useState } from "react";

const ClassWrapper = styled.div`
  max-width: 1176px;
  margin: 0 auto;
  padding: 0 24px;
  h4 {
    padding: 5px;
  }
`;

function App() {
  const [cliendWidth, setClientWidth] = useState<string>("desktop");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const resizeComponent = useCallback(() => {
    const bodyWidth = window.innerWidth;
    if (bodyWidth > 1024) {
      setClientWidth("desktop");
    } else if (bodyWidth > 767) {
      setClientWidth("tablet");
    } else {
      setClientWidth("mobile");
    }
  }, []);

  const closeTooltip = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openTooltip = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("resize", resizeComponent);
    return () => {
      window.removeEventListener("resize", resizeComponent);
    };
  }, [resizeComponent]);

  return (
    <>
      <GlobalStlye />
      <div className="App">
        <Header isOpen={isOpen} openTooltip={openTooltip} closeTooltip={closeTooltip} />
        <NavigationBar />
        <div
          style={
            isOpen ? { background: "rgba(0, 0, 0, 0.37)" } : { background: "rgba(0, 0, 0, 0)" }
          }
        >
          <TopCarousel data={top_event} />
          <ClassWrapper>
            <Classes
              data={time_deal}
              title="오늘의 특가! TIMEDEAL"
              slidesToShow={cliendWidth === "desktop" ? 4 : 2}
              heart={true}
              arrows={cliendWidth !== "desktop" ? false : true}
            />
            <Classes
              data={md_recommend}
              title="MD 추천 클래스"
              imageRatio={CoverRatio.RATIO_3X4}
              slidesToShow={cliendWidth === "desktop" ? 4 : 2}
              heart={true}
              arrows={cliendWidth !== "desktop" ? false : true}
            />
            <Classes
              data={popular_event}
              title="진행중인 인기 이벤트"
              imageRatio={CoverRatio.RATIO_16X10}
              slidesToShow={cliendWidth === "desktop" ? 3 : 1}
              arrows={cliendWidth !== "desktop" ? false : true}
            />
            <Classes
              data={open_soon}
              title="오픈 예정 클래스"
              slidesToShow={cliendWidth === "desktop" ? 4 : 2}
              heart={true}
              arrows={cliendWidth !== "desktop" ? false : true}
            />
          </ClassWrapper>
          <BottomCarousel data={bottom_event} />
        </div>
      </div>
    </>
  );
}

export default App;
