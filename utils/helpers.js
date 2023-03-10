module.exports = {
  format_date: (date) => {

    return date.toLocaleDateString();
  },



  format_amount: (amount) => {

    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },

  get_image: () => {
    const images = [
      '../../public/images/hero-cacti.png',
      '../../public/images/hero-glacier.png',
      '../../public/images/hero-waterfall.png',
      '../../public/images/hero-zions.png',
      '../../public/images/hero-canyon.png',
      '../../public/images/hero-arches.png',
      '../../public/images/hero-bryce.png',
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    return randomImage;
  },
};
