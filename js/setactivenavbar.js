$(function(){
    $("#nav-placeholder").load("nav.html");
    var zaza = location.pathname.split('/');
    console.log(zaza);
    var current = zaza[zaza.length-1];
    $('#navbarText li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1)
        {
            $this.addClass('active');
        }
    })
})	