var DEBUG = true;
function log(msg){
    if(DEBUG)
    console.log(msg);
}

function classify(name){
    return name.replace(/ /gi,'_');
}

function process_shrine(shrine, msg){
    log('SHRINE:'+ shrine['class'] + '|GOD:'+ shrine['god'] +'|ACTION:' + shrine['action'] + '|PAYLOAD:' + msg);
    var el_msg = $('<span/>', {'class': 'shrine-msg ' + shrine['action']}).text(msg);
    $('.shrine.' + shrine['class']).append(el_msg);
    var opacity = 1, dur = 666 * 100, steps = 666;
    var incr = opacity * 1.0 / (steps||1);
    setInterval(function(){
        opacity -= incr;
        el_msg.css({'opacity': opacity});
    },Math.floor(dur/steps));
    setTimeout(function(){
        el_msg.detach();
    },dur);
}

$(document).ready(function(){

    var shrines = {
        'worship': {
            'class': 'worship',
            'god': 'GOD',
            'action': 'DEFAULT'
        }

    }

    $('.choose-list a').click(function(){
        var choice = $(this).text();
        var selector = $(this).closest('ul');
        var category = selector.data('choose');
        var shrine = selector.data('shrine');
        var trigger = $(this).closest('ul').siblings('button')
        trigger.find('.chosen').text(choice);
        log('CHOICE|CATEGORY:' + category + '|CHOICE:' + choice);
        switch(category){
            case 'shrine-worship-god': {
                var god = $('.shrine.'+shrine).data('god');
                if(god != choice){
                    $('.shrine.'+shrine).empty();// resets shrine...
                    $('.shrine.'+shrine).removeClass('god-'+classify(god));
                    shrines['worship']['god'] = choice;
                    $('.shrine.'+shrine).data('god',choice);
                    $('.shrine.'+shrine).addClass('god-'+classify(choice));
                }
                break;
            }
            case 'shrine-worship-action': {
                var action = $('.shrine.'+shrine).data('action');
                if(action != choice){
                    $('.shrine.'+shrine).removeClass('action-'+classify(action));
                    shrines['worship']['action'] = choice;
                    $('.shrine.'+shrine).data('action',choice);
                    $('.shrine.'+shrine).addClass('action-'+classify(choice));
                }
                break;
            }

        }
    });

    $('.shrine-in').enterKey(function(){
        var msg = $(this).val();
        var target_shrine = $(this).data('shrine');
        log('MSG|SHRINE: ' + target_shrine + '|MSG:' + msg)
        process_shrine(shrines[target_shrine], msg)
        $(this).val(null);
    });

    $('.shrine-in:first').focus();

});

// just a plugin (src: SO)
$.fn.enterKey = function(fnc) {
  return this.each(function() {
    $(this).keypress(function(ev) {
      var keycode = (ev.keyCode ? ev.keyCode : ev.which);
      if (keycode == '13') {
        fnc.call(this, ev);
      }
    })
  })
}
