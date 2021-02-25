const validateUrl = (url) => new URL(url);

const isImageUrl = (url) => {
  const regex = /[*.](jpg|png|jpeg)$/;
  return regex.test(url);
};

const validateImageUrl = (url) => {
  try {
    validateUrl(url);

    if (isImageUrl(url)) {
      return true;
    }

    throw new Error('Image url is invalid');
  } catch {
    throw new Error('Image url is invalid');
  }
};

module.exports = validateImageUrl;
