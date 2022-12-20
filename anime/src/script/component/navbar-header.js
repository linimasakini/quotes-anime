class navbarHeader extends HTMLElement{
    connectedCallback(){
        this.render()
    }
    render(){
        this.innerHTML = `<nav class="navbar bg-light">
  <div class="container-fluid justify-content-start">
    <a class="navbar-brand" href="#">Random Anime Quotes</a>
  </div>
</nav>`;
    }
}

customElements.define('navbar-header', navbarHeader);