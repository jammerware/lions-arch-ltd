interface Predicate<T> {
    (value: T): boolean;
}

interface Array<T> {
    any(predicate: Predicate<T>): boolean;
    first(predicate: Predicate<T>): T;
}

Array.prototype.any = function (predicate): boolean {
    for (let item of this) {
        if (predicate(item)) { return true; }
    }
    return false;
};

Array.prototype.first = function (predicate): any {
    for (let item of this) {
        if (predicate(item)) { return item; }
    }

    throw "TsLinq: Couldn't find an object matching the predicate.";
}