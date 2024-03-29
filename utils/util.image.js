export const checkImageUrl = (url) => {
  if (!url || typeof url !== 'string') return false;

  const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
  
  return pattern.test(url);
}

export const basicLogo = 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg';