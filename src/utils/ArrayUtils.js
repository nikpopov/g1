import { updateState } from './Utils';
import objectPath from 'object-path';

if (Array.prototype.flatMap === undefined) {
	Array.prototype.flatMap = function(lambda) {
		return Array.prototype.concat.apply([], this.map(lambda));
	};
}

/**
 * This class implements some basic array operations using object immutability
 */
class ArrayUtils {

	static copy(arr) {
		return [...arr];
	}

	static append(arr, item) {
		return [...arr, item];
	}

	static prepend(arr, item) {
		return [item, ...arr];
	}

	static concat(arr1, arr2) {
		return [...arr1, ...arr2];
	}

	static remove(arr, index, number = 1) {
		if (index < 0 || index >= arr.length) {
			return arr; // do nothing if index is out of bounds
		} else {
			return [
				...arr.slice(0, index),
				...arr.slice(index + number)
			];
		}
	}

	static removeItem(arr, item) {
		return ArrayUtils.remove(arr, arr.indexOf(item));
	}

	static removeItemByRule(arr, finder) {
		return ArrayUtils.remove(arr, arr.findIndex(finder));
	}

	static insert(arr, item, position = -1) {
		if (position < 0 || position >= arr.length) {
			// append to the end of array if position is out of bounds
			return ArrayUtils.append(arr, item);
		} else {
			return [
				...arr.slice(0, position),
				item,
				...arr.slice(position)
			];
		}
	}

	static replace(arr, item, position = -1) {
		if (position < 0 || position >= arr.length) {
			// do nothing if position is out of bounds
			return arr;
		} else {
			return [
				...arr.slice(0, position),
				item,
				...arr.slice(position + 1)
			];
		}
	}

	static moveItemUp(arr, item) {
		const position = (typeof item === 'number') ? item : arr.indexOf(item);
		if (position <= 0 || position > arr.length) {
			// do nothing if position is out of bounds
			return arr;
		} else {
			return ArrayUtils.swap(arr, position, position - 1);
		}
	}

	static moveItemDown(arr, item) {
		const position = (typeof item === 'number') ? item : arr.indexOf(item);
		if (position < 0 || position >= arr.length - 1) {
			// do nothing if position is out of bounds
			return arr;
		} else {
			return ArrayUtils.swap(arr, position, position + 1);
		}
	}

	static moveItem(arr, start, stop) {
		if (start < 0 || start > arr.length - 1 || stop < 0 || stop > arr.length - 1) {
			return arr;
		} else {
			const newArr = [];
			const min = Math.min(start, stop);
			const max = Math.max(start, stop);
			for (let k = 0; k < arr.length; k++) {
				if (k === start) continue;
				if (k === stop) {
					newArr.push(arr[max]);
					newArr.push(arr[min]);
				} else {
					newArr.push(arr[k]);
				}
			}
			return newArr;
		}
	}

	static updateItemProperties(arr, finder, payload) {
		let itemIndex;
		if (typeof finder === 'function') {
			itemIndex = arr.findIndex(finder);
		} else if (typeof finder === 'number') {
			itemIndex = finder;
		} else if (typeof finder === 'object') {
			itemIndex = arr.indexOf(finder);
		} else {
			return arr;
		}
		return ArrayUtils.replace(arr, updateState(arr[itemIndex], payload), itemIndex);
	}

	static updateAllItemsProperties(arr, payload) {
		return arr.map((item) => updateState(item, payload));
	}

	static init(arr) {
		return arr.slice(0, arr.length - 1);
	}

	static sort(arr, sorter) {
		const result = arr.slice();
		result.sort(sorter);
		return result;
	}

	static intersperse(arr, value) {
		return arr.reduce((result, element, index) => {
			result.push(element);
			if (index < arr.length - 1) {
				result.push(value);
			}
			return result;
		}, []);
	}

	/**
	 * Return true - means everything is OK (there is no duplicates)
	 * Return false if there is any duplicate
	 */
	static checkForDuplicates(arr, field) {
		const newArr = [];
		for (let i = 0, len = arr.length; i < len; i++) {
			let value;
			if (field) {
				value = arr[i][field];
			} else {
				value = arr[i];
			}
			if (newArr.indexOf(value) !== -1) {
				return false;
			} else {
				newArr.push(value);
			}
		}
		return true;
	}

	static findWhere(arr, predicate) {
		return arr.find((item) => Object.keys(predicate).reduce((result, prop) => result && predicate[prop] === item[prop], true));
	}

	static addUnique(arr, value) {
		return Array.from(new Set(arr).add(value));
	}

	static merge(a, b, predicate) {
		const c = [...a];
		for (let i = 0; i < b.length; i++) {
			const index = c.findIndex(predicate(b[i]));
			if (index !== -1) {
				c[index] = b[i];
			} else {
				c.push(b[i]);
			}
		}
		return c;
	}

	static parseFromString(str = '', delimiter = ',') {
		if (str === '') {
			return [];
		}
		return str.split(delimiter).map((value) => value.trim());
	}
}

export const sorter = (prop, asc = true, getValue = (o, p) => {
	if (typeof o[p] !== 'undefined') {
		if (typeof o[p] === 'string') {
			return o[p].toLowerCase();
		} else {
			return o[p];
		}
	} else {
		return '';
	}
}) => (a, b) => {
	const propA = getValue(a, prop);
	const propB = getValue(b, prop);
	if (propA < propB) {
		return asc ? -1 : 1;
	} else if (propA > propB) {
		return asc ? 1 : -1;
	} else {
		return 0;
	}
};

export const sorter2 = (prim, sec, asc = true) => (a, b) => {
	const propA = [typeof a[prim] !== 'undefined' ? a[prim] : '', typeof a[sec] !== 'undefined' ? a[sec] : ''];
	const propB = [typeof b[prim] !== 'undefined' ? b[prim] : '', typeof b[sec] !== 'undefined' ? b[sec] : ''];
	if (propA < propB) {
		return asc ? -1 : 1;
	} else if (propA > propB) {
		return asc ? 1 : -1;
	} else {
		return 0;
	}
};

export const textPredicate = (value, string) => value.search(new RegExp(string, 'ig')) !== -1;

export const makeArray = (obj) => (obj instanceof Array ? obj : [obj]);

export const intSequence = (N, start = 0) => new Array(N - start + 1).fill(1).map((_, i) => i);

export default ArrayUtils;
