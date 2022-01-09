export const animateFadeZoomIn = (
  className: string,
  animName: string,
  ms: number
) => {
  (
    document.getElementsByClassName(className)[0] as HTMLBodyElement
  ).style.animation = animName + " " + ms + "ms ease-in-out";
  setTimeout(() => {
    (
      document.getElementsByClassName(className)[0] as HTMLBodyElement
    ).style.animation = "";
  }, ms);
};
