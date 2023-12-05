import { useState } from "react";
import SubmitButton from "./SubmitButton";

const FullScreenButton = () => {
  const [opened, setOpened] = useState(false);
  const openFullscreen = () => {
    const docEl = document.documentElement;

    if (!docEl) return;
    setOpened(true);

    if (docEl.requestFullscreen) {
      void docEl.requestFullscreen();
    } else if (docEl.mozRequestFullScreen) {
      /* Firefox */
      void docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullScreen) {
      /* Chrome, Safari & Opera */
      void docEl.webkitRequestFullScreen();
    } else if (docEl.msRequestFullscreen) {
      /* IE/Edge */
      void docEl.msRequestFullscreen();
    }
  };

  const closeFullscreen = () => {
    setOpened(false);

    if (document.exitFullscreen) {
      void document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      void document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      void document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      void document.msExitFullscreen();
    }
  };

  return (
    <SubmitButton
      onClick={opened ? closeFullscreen : openFullscreen}
      label={"Full screen"}
    ></SubmitButton>
  );
};

export default FullScreenButton;
