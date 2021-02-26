export class ObjectsService {

    constructor() { }

    changeKey = (object: Object, key, newKey) => {
        const clonedObj = Object.assign({}, object);
        const targetKey = clonedObj[key];
        delete clonedObj[key];
        clonedObj[newKey] = targetKey;
        return clonedObj;
    };

    changeAllKeys(list_array = []) {
        let newLst = [];

        list_array.forEach((element: Object) => {
            let keys = Object.keys(element)

            keys.forEach((key, idx) => {
                element = this.changeKey(element, key, `item${idx}`)
            });
            newLst.push(element)
        });
        return newLst;
    }

}
