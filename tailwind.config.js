/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'russian-violet' : '#150F3F',
        'mettalic-gold' : '#D1AB29',
        'sheen-gold' : '#C09D4B',
        'ecru' : '#D7C18E',
        'tiger-eye' : '#AD6827',
        'earth-yellow' : '#D4A66A',
        'antique-bronze' : '#967154',
        'olive' : '#40422D',
        'metalic-grey' : '#48493B',
        'dark-grey' : '#37372B',
        'coyote' : '#85602B',
        'arylide-yellow' : '#E5C973',
        'lavender' : '#E3DFFF',
        'poly-green' : '#214E34'

      },
      backgroundImage: (theme) => ({
        "hero-image": "url(../public/about.jpg)",
        "logo": "url(../public/logo-law.png)",
        "about-image": "url(../public/about01.jpeg)"
      }),
      fontFamily : {
        noto: ["NotoSansSymbol"],
        reem: ["ReemKufi"]
      },
    },
  },
  plugins: [],
}
