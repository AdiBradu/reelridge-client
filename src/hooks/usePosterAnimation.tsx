export const usePosterAnimation = () => {
  console.log('usePosterAnimation render');

  const handleAnimation = () => {
    const animationEndCallback = () => {
      poster?.removeEventListener('animationend', animationEndCallback);
      poster?.classList.remove('animatePoster');
    };

    const poster = document.getElementById('poster');

    poster?.classList.add('animatePoster');
    poster?.addEventListener('animationend', animationEndCallback);
  };

  return { handleAnimation };
};
