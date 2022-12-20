import './component/main-header.js';
import './component/navbar-header.js';

const main =()=>{
    const baseUrl = 'https://animechan.vercel.app/api/random/anime';

    // eslint-disable-next-line no-undef
    function searchQuotes () {
        // eslint-disable-next-line no-undef
        $.ajax({
            url: baseUrl,
            type: 'get',
            dataType: 'json',
            data: {
                // eslint-disable-next-line no-undef
                'title' : $('#search-input').val()
            },
            success: function(restt){
                const ressult = document.querySelector ('quote-list');
                ressult.ress = restt;
            }
        
        });

    }

    // eslint-disable-next-line no-undef
    $('#search-button').on('click', function(){
        searchQuotes();

        // eslint-disable-next-line no-undef
    });
    // eslint-disable-next-line no-undef
    $('#search-input').on('keyup', function(e){
        if(e.keyCode === 13){
            searchQuotes();
        }
    });

};

export default main;