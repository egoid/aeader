(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
    .controller('readCtrl', readCtrl)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];
  readCtrl.$inject = ['$scope', '$timeout'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }
  function readCtrl($scope, $timeout) {
      var text = 'Winds somewhere safe to sea.’” He looked again at the open port.  Swinburne had furnished the key.  Life was ill, or, rather, it had become ill—an unbearable thing.  “That dead men rise up never!”  That line stirred him with a profound feeling of gratitude.  It was the one beneficent thing in the universe.  When life became an aching weariness, death was ready to soothe away to everlasting sleep.  But what was he waiting for?  It was time to go. He arose and thrust his head out the port-hole, looking down into the milky wash.  The Mariposa was deeply loaded, and, hanging by his hands, his feet would be in the water.  He could slip in noiselessly.  No one would hear.  A smother of spray dashed up, wetting his face.  It tasted salt on his lips, and the taste was good.  He wondered if he ought to write a swan-song, but laughed the thought away.  There was no time.  He was too impatient to be gone. Turning off the light in his room so that it might not betray him, he went out the port-hole feet first.  His shoulders stuck, and he forced himself back so as to try it with one arm down by his side.  A roll of the steamer aided him, and he was through, hanging by his hands.  When his feet touched the sea, he let go.  He was in a milky froth of water.  The side of theMariposa rushed past him like a dark wall, broken here and there by lighted ports.  She was certainly making time.  Almost before he knew it, he was astern, swimming gently on the foam-crackling surface. A bonita struck at his white body, and he laughed aloud.  It had taken a piece out, and the sting of it reminded him of why he was there.  In the work to do he had forgotten the purpose of it.  The lights of the Mariposa were growing dim in the distance, and there he was, swimming confidently, as though it were his intention to make for the nearest land a thousand miles or so away. It was the automatic instinct to live.  He ceased swimming, but the moment he felt the water rising above his mouth the hands struck out sharply with a lifting movement.  The will to live, was his thought, and the thought was accompanied by a sneer.  Well, he had will,—ay, will strong enough that with one last exertion it could destroy itself and cease to be. He changed his position to a vertical one.  He glanced up at the quiet stars, at the same time emptying his lungs of air.  With swift, vigorous propulsion of hands and feet, he lifted his shoulders and half his chest out of water.  This was to gain impetus for the descent.  Then he let himself go and sank without movement, a white statue, into the sea.  He breathed in the water deeply, deliberately, after the manner of a man taking an anaesthetic.  When he strangled, quite involuntarily his arms and legs clawed the water and drove him up to the surface and into the clear sight of the stars. The will to live, he thought disdainfully, vainly endeavoring not to breathe the air into his bursting lungs.  Well, he would have to try a new way.  He filled his lungs with air, filled them full.  This supply would take him far down.  He turned over and went down head first, swimming with all his strength and all his will.  Deeper and deeper he went.  His eyes were open, and he watched the ghostly, phosphorescent trails of the darting bonita.  As he swam, he hoped that they would not strike at him, for it might snap the tension of his will.  But they did not strike, and he found time to be grateful for this last kindness of life. Down, down, he swam till his arms and leg grew tired and hardly moved.  He knew that he was deep.  The pressure on his ear-drums was a pain, and there was a buzzing in his head.  His endurance was faltering, but he compelled his arms and legs to drive him deeper until his will snapped and the air drove from his lungs in a great explosive rush.  The bubbles rubbed and bounded like tiny balloons against his cheeks and eyes as they took their upward flight.  Then came pain and strangulation.  This hurt was not death, was the thought that oscillated through his reeling consciousness.  Death did not hurt.  It was life, the pangs of life, this awful, suffocating feeling; it was the last blow life could deal him. His wilful hands and feet began to beat and churn about, spasmodically and feebly.  But he had fooled them and the will to live that made them beat and churn.  He was too deep down.  They could never bring him to the surface.  He seemed floating languidly in a sea of dreamy vision.  Colors and radiances surrounded him and bathed him and pervaded him.  What was that?  It seemed a lighthouse; but it was inside his brain—a flashing, bright white light.  It flashed swifter and swifter.  There was a long rumble of sound, and it seemed to him that he was falling down a vast and interminable stairway.  And somewhere at the bottom he fell into darkness.  That much he knew.  He had fallen into darkness.  And at the instant he knew, he ceased to know.'.split(' ');
      $scope.text = text[0];
      $scope.counter = 0;
      $scope.onTimeout = function(){
          $scope.counter++;
          $scope.text= text[$scope.counter]
          if ($scope.counter < text.length) {
              mytimeout = $timeout($scope.onTimeout,175);
          }
      }
      var mytimeout = $timeout($scope.onTimeout,175);
      $scope.reset= function(){
          $scope.counter = 0;
          mytimeout = $timeout($scope.onTimeout,175);
      }          
  };
})();
