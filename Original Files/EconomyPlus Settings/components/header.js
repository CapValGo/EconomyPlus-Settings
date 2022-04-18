class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="image-container">
          <a href="../settings.html"><img src="assets/EconomyPlus.png" class="logo"></a>
      </div>
    <nav class="menu">
      <ol>
        <li class="menu-item">
          <a href="../settings.html">Core</a>
          <ol class="sub-menu">
            <li class="menu-item"><a href="nav/money_display.html">Money Display</a></li>
            <li class="menu-item"><a href="nav/spawn.html">Spawn</a></li>
            <li class="menu-item"><a href="nav/bank.html">Bank</a></li>
            <li class="menu-item"><a href="nav/vault.html">Vault</a></li>
            <li class="menu-item"><a href="nav/loan.html">Loan</a></li>
            <li class="menu-item"><a href="nav/debt.html">Debt</a></li>
            <li class="menu-item"><a href="nav/tax.html">Tax</a></li>
            <li class="menu-item"><a href="nav/playtime_reward.html">Play Reward</a></li>
            <li class="menu-item"><a href="nav/player_shops.html">Player Shops</a></li>
            <li class="menu-item"><a href="nav/auction.html">Auction</a></li>
            <li class="menu-item"><a href="nav/player_death.html">Player Death</a></li>
          </ol>
        </li>
        <li class="menu-item"><a href="nav/travel.html">Travel</a></li>
        <li class="menu-item"><a href="nav/bounty.html">Bounty</a></li>
        <li class="menu-item"><a href="nav/loot.html">Loot</a></li>
        <li class="menu-item"><a href="https://www.planetminecraft.com/data-pack/economyplus-plugin-claims/" target="_blank">Claim</a></li>
      </ol>
    </nav>
    <nav class="menu">
     <ol>
     <li class="menu-item"><a href="nav/money_display.html">Money Display</a></li>
     <li class="menu-item"><a href="nav/spawn.html">Spawn</a></li>
     <li class="menu-item"><a href="nav/bank.html">Bank</a></li>
     <li class="menu-item"><a href="nav/vault.html">Vault</a></li>
     <li class="menu-item"><a href="nav/loan.html">Loan</a></li>
     <li class="menu-item"><a href="nav/debt.html">Debt</a></li>
     <li class="menu-item"><a href="nav/tax.html">Tax</a></li>
     <li class="menu-item"><a href="nav/playtime_reward.html">Play Reward</a></li>
     <li class="menu-item"><a href="nav/player_shops.html">Player Shops</a></li>
     <li class="menu-item"><a href="nav/auction.html">Auction</a></li>
     <li class="menu-item"><a href="nav/player_death.html">Player Death</a></li>
     </ol>
    </nav>
      <div class="converse">
        <div class="icon-ie">
         <div class="tooltip-ie">Import/Export Settings</div>
           <span><a href="nav/import_export.html"><i class='bx bx-transfer-alt'></i></a></span>
         </div>
      </div>
      `;
    }
}
  
customElements.define('header-component', Header);