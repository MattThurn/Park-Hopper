module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
  // this helper gets a random image for the hero banner
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
