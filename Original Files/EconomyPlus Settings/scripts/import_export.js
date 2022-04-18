function getFile(event) {
    const input = event.target
    if ('files' in input && input.files.length > 0) {
        placeFileContent(input.files[0])
    }
}


function importSettings(text) {
    settings_array = text.split("\n");
    //console.log(settings_array)
    let accepted = false
    for (let setting of settings_array) {
        if (!setting.includes("scoreboard players set")) {
            if (setting.includes("data merge storage")) {
                //Expect "" to be correct for currency_icon and similar
                const words = setting.split('"')
                sessionStorage.setItem(words[1], words[3])
            }
            continue
        }
        accepted = true
        const words = setting.split(' ')
        sessionStorage.setItem(words[3].replace('#ep.', ''), words[5])
    }
    output()
    return accepted
}

function fileAcceptedResponse(response) {
    if (response) {
        //TODO: Add Success
    } 
    else
    {
        //TODO: Add Failure
    }
}

function placeFileContent(file) {
    readFileContent(file).then(content => {
        result = importSettings(content)
        fileAcceptedResponse(result)
    }).catch(error => console.log(error))
}

function readFileContent(file) {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result)
        reader.onerror = error => reject(error)
        reader.readAsText(file)
    })
}

function resolveSetting(a, b) {
    if(a === null) {
        return b
    } else {
        return a
    }
}

function output() {
    let output = "## Output for EconomyPlus v8.0\n"
    output += `scoreboard players set #ep.config.SetWorldSpawn ep.config ${resolveSetting(sessionStorage.getItem('config.SetWorldSpawn'), '1')}\n`;
    output += `scoreboard players set #ep.config.SpawnProtectionX ep.config ${resolveSetting(sessionStorage.getItem('config.SpawnProtectionX'), '50')}\n`;
    output += `scoreboard players set #ep.config.SpawnProtectionY ep.config ${resolveSetting(sessionStorage.getItem('config.SpawnProtectionY'), '255')}\n`;
    output += `scoreboard players set #ep.config.SpawnProtectionZ ep.config ${resolveSetting(sessionStorage.getItem('config.SpawnProtectionZ'), '50')}\n`;
    output += `scoreboard players set #ep.interest.enabled ep.config ${resolveSetting(sessionStorage.getItem('interest.enabled'), '1')}\n`;
    output += `scoreboard players set #ep.vault_pay_interest ep.variable ${resolveSetting(sessionStorage.getItem('vault_pay_interest'), '10000')}\n`;
    output += `scoreboard players set #ep.enum.bank.interest_min ep.variable ${resolveSetting(sessionStorage.getItem('enum.bank.interest_min'), '1000')}\n`;
    output += `scoreboard players set #ep.enum.bank.interest_rate ep.variable ${resolveSetting(sessionStorage.getItem('enum.bank.interest_rate'), '1')}\n`;
    output += `scoreboard players set #ep.bank.interest.interval ep.variable ${resolveSetting(sessionStorage.getItem('bank.interest.interval'), '72000')}\n`;
    output += `scoreboard players set #ep.realistic_enabled ep.config ${resolveSetting(sessionStorage.getItem('realistic_enabled'), '1')}\n`;
    output += `scoreboard players set #ep.prevent_seller_if_empty ep.variable ${resolveSetting(sessionStorage.getItem('prevent_seller_if_empty'), '1')}\n`;
    output += `scoreboard players set #ep.vault_minimum ep.variable ${resolveSetting(sessionStorage.getItem('vault_minimum'), '500')}\n`;
    output += `scoreboard players set #ep.loan.enabled ep.config ${resolveSetting(sessionStorage.getItem('loan.enabled'), '1')}\n`;
    output += `scoreboard players set #ep.loan.max_loan ep.variable ${resolveSetting(sessionStorage.getItem('loan.max_loan'), '500000')}\n`;
    output += `scoreboard players set #ep.loan.equity ep.config ${resolveSetting(sessionStorage.getItem('loan.equity'), '15')}\n`;
    output += `scoreboard players set #ep.max_loan_percent ep.variable ${resolveSetting(sessionStorage.getItem('max_loan_percent'), '100')}\n`;
    output += `scoreboard players set #ep.loan.interest_rate ep.variable ${resolveSetting(sessionStorage.getItem('loan.interest_rate'), '25')}\n`;
    output += `scoreboard players set #ep.loan.enabled ep.config ${resolveSetting(sessionStorage.getItem('loan.enabled'), '1')}\n`;
    output += `scoreboard players set #ep.debt.interval ep.variable ${resolveSetting(sessionStorage.getItem('debt.interval'), '72000')}\n`;
    output += `scoreboard players set #ep.debt.rate.black ep.variable ${resolveSetting(sessionStorage.getItem('debt.rate.black'), '0')}\n`;
    output += `scoreboard players set #ep.debt.rate.red ep.variable ${resolveSetting(sessionStorage.getItem('debt.rate.red'), '8')}\n`;
    output += `scoreboard players set #ep.debt.rate.orange ep.variable ${resolveSetting(sessionStorage.getItem('debt.rate.orange'), '4')}\n`;
    output += `scoreboard players set #ep.debt.rate.yellow ep.variable ${resolveSetting(sessionStorage.getItem('debt.rate.yellow'), '2')}\n`;
    output += `scoreboard players set #ep.debt.rate.green ep.variable ${resolveSetting(sessionStorage.getItem('debt.rate.green'), '1')}\n`;
    output += `scoreboard players set #ep.default.credit_score ep.config ${resolveSetting(sessionStorage.getItem('default.credit_score'), '50')}\n`;
    output += `scoreboard players set #ep.config.LowestPaidCreditScore ep.config ${resolveSetting(sessionStorage.getItem('config.LowestPaidCreditScore'), '10')}\n`;
    output += `scoreboard players set #ep.credit_score.black ep.variable ${resolveSetting(sessionStorage.getItem('credit_score.black'), '0')}\n`;
    output += `scoreboard players set #ep.credit_score.red ep.variable ${resolveSetting(sessionStorage.getItem('credit_score.red'), '1')}\n`;
    output += `scoreboard players set #ep.credit_score.orange ep.variable ${resolveSetting(sessionStorage.getItem('credit_score.orange'), '26')}\n`;
    output += `scoreboard players set #ep.credit_score.yellow ep.variable ${resolveSetting(sessionStorage.getItem('credit_score.yellow'), '51')}\n`;
    output += `scoreboard players set #ep.credit_score.green ep.variable ${resolveSetting(sessionStorage.getItem('credit_score.green'), '76')}\n`;
    output += `scoreboard players set #ep.credit_score.pay ep.variable ${resolveSetting(sessionStorage.getItem('credit_score.pay'), '1')}\n`;
    output += `scoreboard players set #ep.credit_score.miss ep.variable ${resolveSetting(sessionStorage.getItem('credit_score.miss'), '5')}\n`;
    output += `scoreboard players set #ep.config.CreditMinPercentPay ep.config ${resolveSetting(sessionStorage.getItem('config.CreditMinPercentPay'), '10')}\n`;
    output += `scoreboard players set #ep.tax.enabled ep.config ${resolveSetting(sessionStorage.getItem('tax.enabled'), '1')}\n`;
    output += `scoreboard players set #ep.tax.min_amount ep.variable ${resolveSetting(sessionStorage.getItem('tax.min_amount'), '1000')}\n`;
    output += `scoreboard players set #ep.tax.rate ep.variable ${resolveSetting(sessionStorage.getItem('tax.rate'), '15')}\n`;
    output += `scoreboard players set #ep.tax.interval ep.variable ${resolveSetting(sessionStorage.getItem('tax.interval'), '72000')}\n`;
    output += `scoreboard players set #ep.reward.enabled ep.config ${resolveSetting(sessionStorage.getItem('reward.enabled'), '1')}\n`;
    output += `scoreboard players set #ep.reward_value ep.variable ${resolveSetting(sessionStorage.getItem('reward_value'), '25')}\n`;
    output += `scoreboard players set #ep.reward.interval ep.variable ${resolveSetting(sessionStorage.getItem('reward.interval'), '72000')}\n`;
    output += `scoreboard players set #ep.player_shop.enabled ep.config ${resolveSetting(sessionStorage.getItem('player_shop.enabled'), '1')}\n`;
    output += `scoreboard players set #ep.market.sign_cost ep.variable ${resolveSetting(sessionStorage.getItem('market.sign_cost'), '25')}\n`;
    output += `scoreboard players set #ep.market.fee ep.variable ${resolveSetting(sessionStorage.getItem('market.fee'), '10')}\n`;
    output += `scoreboard players set #ep.MarketSignTimer ep.config ${resolveSetting(sessionStorage.getItem('MarketSignTimer'), '6000')}\n`;
    output += `scoreboard players set #null null ${resolveSetting(sessionStorage.getItem('MarketSignFloaterDespawn'), '0')}\n`;
    output += `scoreboard players set #null null ${resolveSetting(sessionStorage.getItem('PlayerShopProtection'), '1')}\n`;
    output += `scoreboard players set #ep.auction.enabled ep.variable ${resolveSetting(sessionStorage.getItem('auction.enabled'), '1')}\n`;
    output += `scoreboard players set #ep.auction.fee ep.variable ${resolveSetting(sessionStorage.getItem('auction.fee'), '5')}\n`;
    output += `scoreboard players set #ep.auction.auction_time ep.variable ${resolveSetting(sessionStorage.getItem('auction.auction_time'), '1200')}\n`;
    output += `scoreboard players set #ep.sidebar_statistic ep.config ${resolveSetting(sessionStorage.getItem('sidebar_statistic'), '0')}\n`;
    output += `scoreboard players set #ep.list_statistic ep.config ${resolveSetting(sessionStorage.getItem('list_statistic'), '0')}\n`;
    output += `scoreboard players set #ep.actionbar_statistic ep.config ${resolveSetting(sessionStorage.getItem('actionbar_statistic'), '1')}\n`;
    output += `scoreboard players set #ep.below_name_statistic ep.config ${resolveSetting(sessionStorage.getItem('below_name_statistic'), '0')}\n`;
    output += `scoreboard players set #ep.death.enabled ep.config ${resolveSetting(sessionStorage.getItem('death.enabled'), '1')}\n`;
    output += `scoreboard players set #ep.dead.drop ep.variable ${resolveSetting(sessionStorage.getItem('dead.drop'), '10')}\n`;
    output += `scoreboard players set #ep.dead.void ep.variable ${resolveSetting(sessionStorage.getItem('dead.void'), '5')}\n`;
    output += `scoreboard players set #ep.terminal.pre_teleport_cooldown ep.variable ${resolveSetting(sessionStorage.getItem('terminal.pre_teleport_cooldown'), '100')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_enabled2 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_enabled2'), '1')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_cost2 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_cost2'), '15')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_cooldown2 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_cooldown2'), '6000')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_enabled1 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_enabled1'), '1')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_cost1 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_cost1'), '30')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_cooldown1 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_cooldown1'), '18000')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_enabled4 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_enabled4'), '1')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_cost4 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_cost4'), '30')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_cooldown4 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_cooldown4'), '18000')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_enabled3 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_enabled3'), '1')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_cost3 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_cost3'), '30')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_cooldown3 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_cooldown3'), '18000')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_enabled ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_enabled'), '1')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_cost5 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_cost5'), '30')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_cooldown5 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_cooldown5'), '6000')}\n`;
    output += `scoreboard players set #ep.terminal.teleport_enabled5 ep.variable ${resolveSetting(sessionStorage.getItem('terminal.teleport_enabled5'), '1')}\n`;
    output += `scoreboard players set #ep.bounty.enabled ep.variable ${resolveSetting(sessionStorage.getItem('bounty.enabled'), '1')}\n`;
    output += `scoreboard players set #ep.bounty.travel ep.variable ${resolveSetting(sessionStorage.getItem('bounty.travel'), '0')}\n`;
    output += `scoreboard players set #ep.bounty.payoff ep.variable ${resolveSetting(sessionStorage.getItem('bounty.payoff'), '1')}\n`;
    output += `scoreboard players set #ep.bounty.blacklist ep.variable ${resolveSetting(sessionStorage.getItem('bounty.blacklist'), '0')}\n`;
    output += `scoreboard players set #ep.bounty_percent ep.variable ${resolveSetting(sessionStorage.getItem('bounty_percent'), '90')}\n`;
    output += `scoreboard players set #ep.bounty_decrease ep.variable ${resolveSetting(sessionStorage.getItem('bounty_decrease'), '50')}\n`;
    output += `scoreboard players set #ep.bounty.interval ep.variable ${resolveSetting(sessionStorage.getItem('bounty.interval'), '30000')}\n`;
    output += `scoreboard players set #ep.bounty.return.percent ep.variable ${resolveSetting(sessionStorage.getItem('bounty.return.percent'), '25')}\n`;
    output += `scoreboard players set #ep.money_drop.mobs ep.config ${resolveSetting(sessionStorage.getItem('money_drop.mobs'), '1')}\n`;
    output += `scoreboard players set #ep.money_drop.ore ep.config ${resolveSetting(sessionStorage.getItem('money_drop.ore'), '1')}\n`;
    output += `scoreboard players set #ep.money_drop.farming ep.config ${resolveSetting(sessionStorage.getItem('money_drop.farming'), '1')}\n`;
    output += `scoreboard players set #ep.money_drop.fishing ep.config ${resolveSetting(sessionStorage.getItem('money_drop.fishing'), '1')}\n`;
    output += `scoreboard players set #ep.money_drop.wood ep.config ${resolveSetting(sessionStorage.getItem('money_drop.wood'), '1')}\n`;
    output += `scoreboard objectives modify ep.display_money displayname {"text":"${resolveSetting(sessionStorage.getItem('currency_name'), 'Currency')}", "color":"#D4AF37"}\n`;
    output += `data merge storage ep:config {"currency_name":"${resolveSetting(sessionStorage.getItem('currency_name'), 'Currency')}"}\n`; 
    output += `data merge storage ep:config {"currency_icon":"${resolveSetting(sessionStorage.getItem('currency_icon'), '$')}"}`;

    document.getElementById("output").innerHTML = output;
}

const fileInput = document.getElementById('input-file')
fileInput.addEventListener('change', getFile)
fileInput.addEventListener('click', () => fileInput.value = null)

document.getElementById("Output.copy").onclick = function() {
    document.getElementById("output").select();
    document.execCommand('copy');
}

output()
