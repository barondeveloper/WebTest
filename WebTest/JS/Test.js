(function () {
    if (!window.jQuery) {
        //no jQuery
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js";
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    // var link = 'http://xml.vudhaserve.com/search?feed=76743&auth=LdhZFu&subid=test&ua=Mozilla%2F5.0%20(Windows%20NT%206.1%3B%20WOW64%3B%20rv%3A13.0)%20Gecko%2F20100101%20Firefox%2F13.0.1&url=http%3A%2F%2Ftest.com%2F%3Fq%3Dbest%2Bdeals&user_ip=' + ip+'&query=best+deals';
    var settings = {
        link:'http://xml.vudhaserve.com/search',
        feed: "76743",
        uath: 'LdhZFu',
        ua: navigator.userAgent,// 'Mozilla%2F5.0%20(Windows%20NT%206.1%3B%20WOW64%3B%20rv%3A13.0)%20Gecko%2F20100101%20Firefox%2F13.0.1',
        url: 'http%3A%2F%2Ftest.com%2F%3Fq%3Dbest%2Bdeals',//location.href,//
        user_ip: '185.120.124.62',
        query: 'best+deals'
    };

    loadData(settings, function (url, pixel) {
        $("#thediv").html("pixel= " + pixel + "<br/> url= " + url);
    });

    function loadData  (settings, callback) {
        setTimeout(function () {
            var link = settings.link;
            link = link + '?feed=' + settings.feed;
            link = link + '&auth=' + settings.uath;
            link = link + '&ua=' + settings.ua;
            link = link + '&url=' + settings.url;
            link = link + '&user_ip=' + settings.user_ip;
            link = link + '&query=' + settings.query;

            $.get(link, {}, function (data) {
                var nodes = data.documentElement.childNodes;
                for (var i = 0; i < nodes.length; i++) {
                    var node = nodes[i];
                    if (node.localName === "listing") {
                        var pixel = node.getAttribute("pixel");
                        var url = node.getAttribute("url");
                        callback(url, pixel);
                    }
                }
            });
        }, 700);
    }



} ())

