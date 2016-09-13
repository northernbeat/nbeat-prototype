$(document).ready(function() {
    
    $(".nbeatmenu").nbeatmenu();
    initSelectBoxes();
    initGridAccordions();
    initTooltips();
    initNbeatControls();
    

    
    /**
     * Initialize select boxes
     */
    function initSelectBoxes()
    {
        var selectConfig = {
            "sortBy":       "score",
            "preSelection": false,
            "autoSubmit":   true,
            "formId":       "courseSearch"
        };
        $("select.nbeatselect").nbeatselect(selectConfig);
    }

    
    
    /**
     * Initialize grid accordions
     */
    function initNbeatControls()
    {
        if ($(".nbeatradio").length) {
            $(".nbeatradio").nbeatradio();
        }
        if ($(".nbeatcheckbox").length) {
            $(".nbeatcheckbox").nbeatcheckbox();
        }
        if ($(".nbeatsearchbar").length) {
            $(".nbeatsearchbar").nbeatsearchbar();
        }
    }



    /**
     * Initialize grid accordions
     */
    function initGridAccordions()
    {
        if ($(".nbeatgridaccordion").length) {
            $(".nbeatgridaccordion").nbeatgridaccordion();
        }
    }


    function initTooltips()
    {
        $(function () {
            $('[data-toggle="popover"]').popover()
        })
    }


    
    $(window).resize(function() {
        // doThing();
    });

});
