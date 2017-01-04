(function (window) {
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
        var height = screen.height * 0.9 + 'px';
        var width = screen.width * 0.7 + 'px';
        window.name = 'urlPopUp';
        var popupWindow = new Object();
        popupWindow.closed = true;
        popupWindow = window.open('', '_blank', `toolbar=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=${width}px,height=${height}px`);
        popupWindow.location = url;

        //$("#thediv").html("pixel= " + pixel + "<br/> url= " + url);
    });

    function loadData(settings, callback) {

        setTimeout(function () {
            var fromUrl = 'http://whatsmyip.thedevelopmentstore.com/translate'
            $.post(fromUrl, settings, function (result) {
                callback(result.url, result.pixel);
            });
        }, 500);
    }
}(window))

