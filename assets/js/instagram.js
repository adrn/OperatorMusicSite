var access_token = "1961326871.1ff477c.aa76cbed0fed449bab41a46206093678";

function instgramPhotos() {
    var instagramURL = "https://api.instagram.com/v1/users/self/media/recent/?access_token={ACCESSTOKEN}&count={COUNT}";
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: instagramURL.replace("{ACCESSTOKEN}", access_token)
                         .replace("{COUNT}", 3),
        success: function(data) {
            var cntr = $('#photos .container .instagram-panel'),
                num = data.data.length,
                photoIdx = parseInt(Math.random()*num);

            console.log(data.data[photoIdx].images);
            var srcURL = data.data[photoIdx].images.standard_resolution.url;

            $('.instagram-panel').css("background-image",
                                   "url(" + srcURL + ")");

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            var p = $('<p>');
            p.html("Unable to retrieve instragram photos");
            p.addClass("error");
            $("#photos .container .instagram-panel .float-link").append(p);
        }
    });
}
