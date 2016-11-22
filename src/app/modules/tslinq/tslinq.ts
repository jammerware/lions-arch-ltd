interface Predicate {
    (value: any): boolean;
}

interface Array<T> {
    any(predicate: Predicate): boolean;
}

Array.prototype.any = function(predicate: Predicate): boolean {
    for (let item of this) {
        if (predicate(item)) { return true; }
    }
    return false;
};