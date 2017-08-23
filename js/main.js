$(document).ready(function($) {
  console.log('Hi there! Hope you like my portfolio. More details on github, if you like: https://github.com/javeddc/portfolio');

  $('#accordion').find('.accordion-toggle').click(function() {
    $(this).next().slideToggle(400);
    $(".accordion-content").not($(this).next()).slideUp(400);
  });

  var waves = new SineWaves({
    el: document.getElementById('waves'),
    speed: 1,
    width: function() {
      return $(window).width();
    },
    height: function() {
      return $(window).height();
    },
    ease: function(percent, amplitude) {
      return Math.sin((percent) + 100) * 200;
    },
    wavesWidth: '150%',
    waves: [
      {
        timeModifier: 4,
        lineWidth: 6,
        amplitude: -25,
        wavelength: 50
      }, {
        timeModifier: 2,
        lineWidth: 6,
        amplitude: -50,
        wavelength: 100
      }, {
        timeModifier: 1,
        lineWidth: 6,
        amplitude: -100,
        wavelength: 100
      }, {
        timeModifier: 2,
        lineWidth: 6,
        amplitude: -50,
        wavelength: 200
      }, {
        timeModifier: 0.25,
        lineWidth: 6,
        amplitude: -80,
        wavelength: 400
      }
    ],
    resizeEvent: function() {
      var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradient.addColorStop(0, "rgba(193, 213, 51, 1)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.05)");
      gradient.addColorStop(1, "rgba(193, 213, 51, 1)");
      var index = -1;
      var length = this.waves.length;
      while (++index < length) {
        this.waves[index].strokeStyle = gradient;
      }
      index = void 0;
      length = void 0;
      gradient = void 0;
    }
  });
});
