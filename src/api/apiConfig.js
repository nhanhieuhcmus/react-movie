const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "f1caab63143e7015555fbf075d05adae",
    originalImage: (imgPath) =>
        `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;