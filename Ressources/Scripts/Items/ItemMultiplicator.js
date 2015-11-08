//item ItemMultiplicator
//multiplie le nombre degold par click
function ItemMultiplicator(cost,Multiplicator) {
    this.Cost=cost;
    this.Multiplicator=Multiplicator;
}

ItemMultiplicator.prototype=new Item;

ItemMultiplicator.prototype.setMultiplicator= function () {
    return this.Cost;
};

ItemMultiplicator.prototype.getMultiplicator= function () {
    return this.Cost;
};


