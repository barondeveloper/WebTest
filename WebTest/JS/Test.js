(function () {
    if (!window.jQuery) {
        //no jQuery
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js";
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    var settings = { 
        ua: navigator.userAgent,// 'Mozilla%2F5.0%20(Windows%20NT%206.1%3B%20WOW64%3B%20rv%3A13.0)%20Gecko%2F20100101%20Firefox%2F13.0.1',
        url: 'http%3A%2F%2Ftest.com%2F%3Fq%3Dbest%2Bdeals',//location.href,//
        //user_ip: '185.120.124.62',
        subid:'test',
        query: 'best+deals'
    };

    loadData(settings, function (url, pixel) {
        $("#thediv").html("pixel= " + pixel + "<br/> url= " + url);
    });

    function loadData(settings, callback) {

        setTimeout(function () {
            var fromUrl = 'http://whatsmyip.thedevelopmentstore.com/translate'
            $.post(fromUrl, settings, function (result) {
                callback(result.url, result.pixel);
            });
        }, 500);
    }
} ())

