/**
    This is the example app using the Gmailr API.

    In this file, you have access to the Gmailr object.
 */

Gmailr.debug = true; // Turn verbose debugging messages on 

Gmailr.init(function(G) {
    G.insertCss(getData('css_path'));
    G.insertTop($("<div id='gmailr'><span>Gmailr Status:</span> <span id='status'>Loaded.</span> </div>"));

    G.observe('composeOpened', function(cw) {
        status("You opened Compose!");
    });

    G.observe('composeOpened', function(cw) {
        var newSendButton = $("<div id='gmailr-send-button' class='T-I J-J5-Ji aoO T-I-atl L3' role='button' tabindex='1' style='-webkit-user-select: none;'>I do nothing!</div>");
        G.insertAfterSendButton(cw, newSendButton);
    });

    var status = function(msg) {
        G.$('#gmailr #status').html(msg);
    };

    G.observe('archive', function(num) {
        status('You archived ' + num + ' emails.');
    });

    G.observe('delete', function(c) {
        status('You deleted ' + c + ' emails.');
    });

    G.observe('spam', function(c) {
        status('You marked ' + c + ' emails as spam.');
    });

    G.observe('compose', function() {
        status('You composed an email.');
    });

    G.observe('reply', function(c) {
        status('You replied to an email.');
    });

    G.observe('applyLabel', function(label,emails) {
       status("you applied label " + label + " to " + emails.length + " email(s)");
    });
});
