var DEBUG = true;
function log(msg){
    if(DEBUG)
    console.log(msg);
}

var SOUND_RES = {
    'fire': 'sounds/fire.wav',
    'GODS': {
        'BEAST_666': [
            'sounds/music/beast/ghost_bc-infestissumam.mp3',
            'sounds/music/beast/ghost_bc-infestissumam.mp3',
            ],
        'SATAN': [
            'sounds/music/satan/Gay Satanic Hippie - Bauchweh.mp3',
            ],
        'GOD': [
            'sounds/music/god/Gay Satanic Hippie - Bach On Crack (Back On Crack Remix).mp3',
            ],
    }
}

var SOUND_PLAYERS = {
    'fire': new Howl({ src: [SOUND_RES['fire']], loop: true, }),
    'GODS': {}
}

_.keys(SOUND_RES['GODS']).map(function(god){ 
        var d = {}; 
        d[god] = SOUND_RES['GODS'][god].map(function(file){ return new Howl({ src: [file], format: ['mp3'], loop: true }); });
        SOUND_PLAYERS['GODS'] = _.extend(SOUND_PLAYERS['GODS'], d);
});

var SOUNDS = {
    shrine: {
        'default': {
            'fire': {
                play : function(){
                    SOUND_PLAYERS['fire'].play();
                },
                stop : function(){
                    SOUND_PLAYERS['fire'].stop();
                },
                pause : function(){
                    SOUND_PLAYERS['fire'].pause();
                }
            }
        }
    }
}

function classify(name){
    return name.replace(/ /gi,'_');
}

function process_shrine(shrine, msg){
    log('SHRINE:'+ shrine['class'] + '|GOD:'+ shrine['god'] +'|ACTION:' + shrine['action'] + '|PAYLOAD:' + msg);
    var el_msg = $('<span/>', {'class': 'fire shrine-msg ' + shrine['action']}).text(msg);
    $('.shrine.' + shrine['class']).append(el_msg);
    var dur = 666 * 66;
    $(el_msg).stop().animate({'top': '0'}, Math.floor(dur * 0.5)).fadeTo( dur, 0 , function() {
        el_msg.detach();
   });
}

function mantra(god){

    var mantras = {
        'TAHUTI': [
            "AS ABOVE SO IT IS BELOW",
            "ALL POWER IS WITHIN U",
            "WHO WRITES, CAN CREATE",
            "SEEK THE DOOR",
            "LOOK WITHIN, I AM HE",
        ],
        'NYAMIYONGA': [
            "I AM H THAT RIGNS VR LIF AND DATH",
            "IJA KUZIMU",
            "IJA BMZI",
        ],
        'SET': [
            "I AM WITHIN AND BEYOND YOU THE HIGHEST OF LIFE",
            "THE ESSENCE OF MY BEING IS ENSHRINED WITHIN YOU",
            "I CALL UPON YOU TO RISE IN YOUR GLORY",
            "BEHOLD THE GENIUS OF YOUR CREATION",
        ],
        'ENKYA_YA_ENKYA': [
            "NINYE MANDWA IGURU NENSI",
        ],
        'SATAN': [
            "DEATH TO THE WEAKLING, WEALTH TO THE STRONG",
            "I STAND FORTH TO CHALLENGE THE WISDOM OF THE WORLD",
            "I QUESTION ALL THINGS",
            "ANNIHILATE THEM, OR THEY WILL US",
            "HATE YOUR ENEMIES WITH A WHOLE HEART",
            "GIVE BLOW FOR BLOW, SCORN FOR SCORN, DOOM FOR DOOM",
            "LIFE IS THE GREAT INDULGENCE - DEATH, THE GREAT ABSTINENCE",
            "NO HEAVEN OF GLORY BRIGHT, AND NO HELL WHERE SINNERS ROAST",
            "CHOOSE YE THIS DAY, THIS HOUR, FOR NO REDEEMER LIVETH",
            "I AM MINE OWN REDEEMER",
            "BLESSED ARE THE STRONG, FOR THEY SHALL POSSESS THE EARTH",
            "BLESSED ARE THE POWERFUL, FOR THEY SHALL BE REVERENCED AMONG MEN",
            "I AM HE THAT KILLETH THE JEHOVAH IN YOU"
        ],
        'LUCIFER': [
            "I AM THE WAY",
            "I AM THE TRUTH",
            "I AM THE LIGHT",
        ],
        'LEVIATAN': [
            "I SET LOOSE THE DESIRES IN YOU",
            "MAY YOU BE OVERWHELMED WITH JOY",
            "I UNLEASH LUST UNTO YOU",
            "THE CHAINS OF VIRTUE BE LOOSENED!",
            "INDULGE OR PERISH",
        ],
        'BELIAL': [
            "YOUR WILL BE DONE",
            "IF YOU CAN'T WILL, YOU DESERVE TO DIE",
            "I GIVE TO YOU THE POWER TO BE",
            "ON THIS EARTH, BE BLESSED",
            "DRINK OF MY POWER, YOU WILL NOT THIRST",
            "BE PRAGMATIC MAN, BE PRAGMATIC!",
            "FUCK FATANSY, HEAVEN AND HELL ARE HERE RIGHT NOW",
            "CREATE YOUR DESTINY",
            "USE YOUR MIND",
            "THINK, STUPID!",
        ],
        'BEAST_666': [
            "I AM THE WAY",
            "I AM THE TRUTH",
            "I AM THE LIGHT",
            "I AM THE TRUE CHRIST",
            "FUCK THE NAZARENE",
            "FUCK THE POPE",
            "FUCK THE BLOODY MARY",
            "I DEBAPTIZE YOU NOW",
            "EAT OF ME, DRINK OF ME",
        ],
        'DAEMON': [
            "I AM THAT I AM",
            "IN ME IS THE POWER",
            "I, GOD",
            "I, SERVE NONE",
        ]
    };

    return mantras[god][Math.floor(Math.random()*mantras[god].length)] || "IF YOU DON'T CREATE YOUR OWN GODS YOU WILL BE A SLAVE TO ANOTHER MAN'S";

}

$(document).ready(function(){

    var shrines = {
        'default': {
            'class': 'default',
            'god': 'GOD',
            'action': 'DEFAULT'
        }

    }

    // know when to play music, what music to play, and when to go silent...
    var active_music = null;
    function load_music(god){
        var players = SOUND_PLAYERS['GODS'][god];

        if(!players)
            players = SOUND_PLAYERS['GODS']['GOD'];

        if(!active_music){
            active_music = players[Math.floor(Math.random()*players.length)];
        }
        else {
            active_music.stop();
            active_music = players[Math.floor(Math.random()*players.length)];
        }

        if(active_music){
            active_music.play();
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
            case 'shrine-default-god': {
                var god = $('.shrine.'+shrine).data('god');
                if(god != choice){
                    var cipher = $('.shrine.'+shrine).find('.cipher').clone();
                    $('.shrine.'+shrine).empty();// resets shrine...
                    $('.shrine.'+shrine).removeClass('god-'+classify(god));
                    $('.cipher.'+shrine).removeClass('god-'+classify(god));
                    shrines['default']['god'] = choice;
                    $('.shrine.'+shrine).data('god',choice);
                    $('.shrine.'+shrine).addClass('god-'+classify(choice));
                    cipher.text(mantra(classify(choice)));
                    $('.shrine.'+shrine).append(cipher);
                    $('.cipher.'+shrine).addClass('god-'+classify(choice));
                    load_music(classify(choice));
                }
                break;
            }
            case 'shrine-default-action': {
                var action = $('.shrine.'+shrine).data('action');
                if(action != choice){
                    $('.shrine.'+shrine).removeClass('action-'+classify(action));
                    shrines['default']['action'] = choice;
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

    // know when to play music, what music to play, and when to go silent...
	$('#collapse-shrine-shrine').on('hidden.bs.collapse', function (e) {
        SOUNDS.shrine['default']['fire'].pause();
        if(active_music){
            active_music.pause();
        }
	});
	$('#collapse-shrine-shrine').on('shown.bs.collapse', function (e) {
        SOUNDS.shrine['default']['fire'].play();
        if(active_music){
            active_music.play();
        }
	});

    SOUNDS.shrine['default']['fire'].play();
    load_music('GOD');

    // hmm, no cheating...
    $(".shrine").on("contextmenu",function(e){
        return false;
    });
    $(".shrine").bind('cut copy paste', function (e) {
        e.preventDefault();
    });

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
