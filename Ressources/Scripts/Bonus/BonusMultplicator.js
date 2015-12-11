//Bonus BonusMultiplicator
//multiplie le nombre degold par click
function BonusMultiplicator(cost,Multiplicator) {
    this.Cost=cost;
    this.Multiplicator=Multiplicator;
}

BonusMultiplicator.prototype=new Bonus;

BonusMultiplicator.prototype.setMultiplicator= function () {

    return this.Cost;
};

BonusMultiplicator.prototype.getMultiplicator= function () {

    return this.Cost;
};

