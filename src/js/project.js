$(document).ready(function() {

    initSearchBar();
    
    $("#a11y-nav").a11yJumpMenu();
    adjustWideboxes();
    markEmptyTableCells();
    handleContentIndicator();
    setPlaylistStatus();
    registerEventHandlers();
    handleVideoProgress();
    initDragend();
    
    if ($("#signup-bar").length) {
        $("#signup-bar").scrollToFixed();
    }
    $("#toggle-mainmenu").click(function() {
        $("#header").toggleClass("inverted");
        changeLogo();
        toggleMenuLinks();
    });

    $(window).resize(function() {
        adjustWideboxSpacing();
        changeLogo();
    });

    $("#showSignup").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $("#newsletter-signup").modal()
    });

    $(document).keydown(function(e) {
        if (e.keyCode == 27) { // esc
            if ($("#header").hasClass("inverted")) {
                $("#header").toggleClass("inverted");
                changeLogo();
                toggleMenuLinks();
            }
        }
    });


    
    function registerEventHandlers()
    {
        if ($("#toggle-transcript").length) {
            $("#toggle-transcript").on("click touchstart", function(e) {
                e.preventDefault();
                e.stopPropagation();
                $("#transcript").toggle();
                return false;
            });
        }
    }


    
    /**
     * Initialize the search menu bar
     */
    function initSearchBar()
    {
        var selectConfig = {
            "sortBy":       "score",
            "preSelection": false,
            "autoSubmit":   true,
            "formId":       "courseSearch"
        };
        var inputConfig = {};

        $("select.flexselect").flexselect(selectConfig);
        $("input.flexinput").flexinput(inputConfig);
    }



    function changeLogo()
    {
        var bp = 768;
        var normal = "/img/logo.svg";
        var inverted = "/img/logo-invert.svg";
        var width = $(window).width();
        
        if ($("#header").hasClass("inverted") && width < bp) {
            $("#logo").attr("src", inverted);
        } else {
            $("#logo").attr("src", normal);
        }
    }



    function toggleMenuLinks()
    {
        if ($("#header").hasClass("inverted")) {
            $("#toggle-mainmenu").attr("aria-expanded", true);
            $("#mainmenu").attr("aria-hidden", false);
            $("#mainmenu a").each(function() {
                $(this).attr("tabindex", "0");
            });
        } else {
            $("#toggle-mainmenu").attr("aria-expanded", false);
            $("#mainmenu").attr("aria-hidden", true);
            $("#mainmenu a").each(function() {
                $(this).attr("tabindex", "-1");
            });
        }
    }


    
    function adjustWideboxes()
    {
        setBannerBackgroundImages();
        adjustWideboxSpacing();
    }


    
    function setBannerBackgroundImages()
    {
        $(".banner > .content").each(function() {
            var url = $(this).attr("data-image");
            $(this).css("background-image", "url('" + url + "')");
        });
    }


    
    function adjustWideboxSpacing()
    {
        $(".widebox, .widebox-video").each(function() {
            if ($(this).children(".linkbar").length > 0) {
                var height = $(this).children(".linkbar").first().outerHeight();
                var adjust = 0 - Math.ceil(height / 2);
                
                $(this).children(".header").css("top", adjust + "px");
            }

            var windowWidth = $(window).width();
            var adjustLeft = 0;
            var adjustLinkbar = 18; 
            var adjust = 0;
            
            if (windowWidth > 1200 && windowWidth < 1440) {
                adjust = Math.floor((windowWidth - 1200) / 2);
            } else if (windowWidth >= 1440) {
                adjust = 120;
            }

            adjustLeft = adjust;
            adjustLinkbar += adjust;
                
            $(this).children(".left").css("padding-left", adjustLeft + 18 + "px");
            // $(this).children(".left").css("padding-right", adjustLeft + 18 + "px");
            $(this).children(".linkbar").css("padding-left", adjustLinkbar + "px");
        });
    }


    
    function markEmptyTableCells()
    {
        $(".table-responsive tr td:nth-child(3)").each(function() {
            if (!$(this).text().trim().length) {
                $(this).addClass("empty");
            }
        });
    }



    function handleContentIndicator()
    {
        var wHeight = $(window).height();
        var dHeight = $(document).height();

        // console.log("w: " + wHeight);
        // console.log("d: " + dHeight);

        if (dHeight <= wHeight) {
            $("#content-indicator").fadeOut(50);
        }
        
        $(document).one("scroll resize", function() {
            $("#content-indicator").fadeOut(1000);
        });
    }


    
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

    $(".toggle-alternatives").on("click", function(e) {
        $(".alternatives", this).toggle();
    });


    
    function setPlaylistStatus()
    {
        if ($(".videoplayer .list-lessons .list-item").length) {
            $(".videoplayer .list-lessons .list-item").each(function() {
                var status = $(this).data("status");

                if (status > 0) {
                    setPlaylistItemPercent(this, status);
                    // $(this).removeClass("disabled");
                }                    
            });
        }
    }


    
    function setPlaylistItemPercent(parent, percent)
    {
        // console.log(parent);
        // console.log(percent);
        var el = $(".status", parent)
        el.css("height", percent + "%");
    }


    
    function handleVideoProgress()
    {
        var iframe = $('#player')[0];
        var player = $f(iframe);
        var status = $('#player-status');

        // FIXME: Follow the discussion at
        // https://vimeo.com/forums/api/topic:269061 closely, and
        // update this part when they're done
        player.addEvent('ready', function() {
            player.addEvent('playProgress', onPlayProgress);
        });
    }


    
    function onPlayProgress(data)
    {
        var status   = $('#player-status');
        var playlist = $('#playlist-active');

        var int_played   = Math.floor(data.seconds);
        var int_duration = Math.floor(data.duration);
        var int_percent  = Math.floor(100 * data.percent);

        var d   = moment.duration(int_duration, "seconds");
        var p   = moment.duration(int_played, "seconds");
        var pos = sprintf("%d:%02d / %d:%02d",
                          p.get("minutes"),
                          p.get("seconds"),
                          d.get("minutes"),
                          d.get("seconds"));
        status.text(pos);
        setPlaylistItemPercent(playlist, int_percent);
    }

    $('.same-height-in-row').each(function () {

        if($(window).width() >= 768) {
            
            var $row = $(this).closest('.row'),
                $same = $row.find('.same-height-in-row'),
                highest = 0;

            $same.each(function () {
                var height = $(this).outerHeight();
                if (height > highest) {
                    highest = height;
                }
            });        

            $same.outerHeight(highest);
        }
    });

    function initDragend() {

        $('.dragend').each(function() {

            var $dragend = this;
            
            $('.dragend-pages', $dragend).dragend({
                onSwipeEnd: function() {
                    var $lis = $("li", $dragend);
                    $lis.removeClass("active");
                    $lis.eq(this.page).addClass("active");
                }
            });

            $("ul", $dragend).click(function() {
                var page = $(event.target).data("page");
                $('.dragend-pages', $dragend).dragend({                    
                    scrollToPage: page
                });
                $(event.target).addClass("active");
            });
        });        
    }

});
