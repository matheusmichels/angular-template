import { isNullOrUndefined } from 'util';

export const removeNullAndUndefinedProperties = (obj) => {
    const copyObj = { ...obj };
    Object.keys(copyObj).forEach(key => {
        if (copyObj[key] === null || copyObj[key] === undefined) {
            delete copyObj[key];
        }
    });

    return copyObj;
}