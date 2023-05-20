export const useImageUrl = () => {
  const pageWidth = window.innerWidth;

  const posterImageBaseUrl = "https://image.tmdb.org/t/p/";
  const backdropImageBaseUrl = "https://image.tmdb.org/t/p/";

  const posterPathUrl = () => {
    if (pageWidth > 1360) {
      return `${posterImageBaseUrl}w300`;
    } else if ((pageWidth < 1360) & (pageWidth > 550)) {
      return `${posterImageBaseUrl}w500`;
    } else if (pageWidth < 451) {
      return `${posterImageBaseUrl}w154`;
    } else {
      return `${posterImageBaseUrl}w342`;
    }
  };

  const posterPathInSingleMovie = () => {
    if (pageWidth > 1200) {
      return `${posterImageBaseUrl}w500`;
    } else if (pageWidth > 785) {
      return `${posterImageBaseUrl}w342`;
    }
    return `${posterImageBaseUrl}w154`;
  };

  const backdropPathUrl = () => {
    if (pageWidth > 780) {
      return `${backdropImageBaseUrl}w1280/`;
    } else if (pageWidth > 300) {
      return `${backdropImageBaseUrl}w780/`;
    } else return `${backdropImageBaseUrl}w300/`;
  };

  return { posterPathUrl, posterPathInSingleMovie, backdropPathUrl };
};
