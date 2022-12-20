class rest extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode: 'open'});
    }

    set ress(item){
        this._ress = item;
        this.render();
    }

    render(){
        this.shadowDom.innerHTML = '';
        this.shadowDom.innerHTML = `
        <style>
        *{
            margin: 0px;
            padding: 0px;
            color: #fff;
        }
        
        .cards{
            width: 20%;
            background-color: rgb(180, 58, 58);
            margin-left: auto;
            margin-right: auto;
            margin-top: 5rem;
            border-radius: 5px;
            padding-left: 5px;
            padding-right: 5px;
        }
        
        .flow h1{
            width: 100%;
            text-align: center;
            animation: glow 1s ease-in-out infinite alternate;
        }
        
        .title{
            text-align: center;
            animation: glow 1s ease-in-out infinite alternate;
        }
        
        .des{
            text-align: center;
            margin-top: 30px;
            margin-bottom: 30px;
            padding-bottom: 30px;
            animation: glow 1s ease-in-out infinite alternate;
            font-style: italic;
        }
        
        @-webkit-keyframes glow {
            from {
              text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60000, 0 0 40px #fff000, 0 0 50px #e60000, 0 0 60px #e60000, 0 0 70px #e60000;
            }
            
            to {
              text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ffffff, 0 0 50px #000, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
            }
        }</style>
        <div class="cards">
        <div class="flow">
            <h1>${this._ress.anime}</h1>
        </div>
        <div class="title">
            <h4>${this._ress.character}</h4>
        </div>
        <div class="des">
            <p>${this._ress.quote}</p>
        </div>
    </div>`;
    }
}

customElements.define('quote-list', rest);