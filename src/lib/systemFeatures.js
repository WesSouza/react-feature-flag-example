const mockedFeatures = ['version2'];

export const getSystemFeatures = () => new Promise(resolve =>
  setTimeout(() => resolve(mockedFeatures), 100)
);
