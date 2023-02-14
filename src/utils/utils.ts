export const autoScroll = async (id: string) => {
  const div = document.getElementById(id);
  div && div.scrollTo(0, 0);

  div?.scrollTo({
    top: 0,
    left: div.scrollWidth,
    behavior: 'smooth',
  });
};
