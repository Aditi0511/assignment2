import {shout} from 'jquery';
import {shout} from 'lib.mjs';
import {shout} from 'modules/lib.mjs';

$('#toggle_icon').toggle(function() {
    $('#toggle_icon').text('-');
    $('#toggle_text').slideToggle();
    }, function() {
    $('#toggle_icon').text('+');
    $('#toggle_text').slideToggle();
    });
