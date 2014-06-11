/** 
 * jQuery plugin to trigger an event after the success of the Konami Code
 *    up up down down left right left right b a
 * 
 * @author      ShevAbam (http://www.shevarezo.fr)
 * @date        21 june 2013
 * @version     1.0
 * 
 * [ Usage ]
 * 
    <script>
        $(function(){
            $(window).konami({
                run: function(){
                    alert('Good job !');
                }
            });
        });
    </script>
 * 
 */

(function($){
    
    $.fn.konami = function(options) {
        
        // Options
    	var settings = $.extend({
            'run': null     // Function that triggers the success of the code
    	}, options);
        
        var cheatCode = [38,38,40,40,37,39,37,39,66,65];
        var userCode  = [];
        
        return this.each(function(){

            $(this).keyup(function(e){

                userCode.push(e.keyCode);

                if (userCode.toString().indexOf(cheatCode) >= 0)
                {
                    settings.run();
                    
                    userCode = [];
                }

            });

        });
    }

})(jQuery);