
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'surface': '#F4F5F7',
          'text-primary': '#3A3A3A',
          'attention': '#E97171',
          'info' : '#2EC1AC',
          'btn' : '#B88E2F',
          
        },
        boxShadow: {
          'button': '2.9px 2.8px 4.5px rgba(0, 0, 0, 0.07),7.9px 7.8px 12.4px rgba(0, 0, 0, 0.1),19px 18.7px 29.8px rgba(0, 0, 0, 0.13),63px 62px 99px rgba(0, 0, 0, 0.2)',
        
        }
      },
    },
    plugins: [],
  }