interface Document {
  mozCancelFullScreen?: () => Promise<void>;
  webkitExitFullscreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
  mozFullScreenElement?: Element;
  webkitFullscreenElement?: Element;
  msFullscreenElement?: Element;
}

interface HTMLElement {
  mozRequestFullScreen?: () => Promise<void>;
  webkitRequestFullScreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}
