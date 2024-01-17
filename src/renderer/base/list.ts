/*
 * Copyright: (c) 2024, Alex Kaul
 * GNU General Public License v3.0 or later (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

export type List<T> = ReadonlyArray<T>;

/**
 * Adds Item to List
 * @param list List
 * @param item Item to add
 * @param index Index to add item to (if undefined, then add to the end of the list)
 * @returns A new list
 */
export function addItemToList<T>(list: List<T>, item: T, index?: number): List<T> {
  if (index === undefined) {
    return [
      ...list,
      item
    ]
  } else {
    const newList = list.slice();
    newList.splice(index, 0, item);
    return newList;
  }
}

/**
 * Removes Item
 * @param list List
 * @param index Index of item to remove
 * @returns A new list
 */
export function removeItemFromList<T>(list: List<T>, index: number): List<T> {
  if (index < 0 || index > list.length - 1) {
    return list;
  }
  const newList = list.slice();
  newList.splice(index, 1);
  return newList;
}

/**
 * Moves Item
 * @param list List
 * @param fromIndex Index to move item from
 * @param toIndex Index to move item to (if undefined, then move to the end of the list)
 * @returns A new list
 */
export function moveItemInList<T>(list: List<T>, fromIndex: number, toIndex?: number): List<T> {
  if (fromIndex === toIndex) {
    return list;
  }
  const newList = list.slice();
  newList.splice(toIndex ?? newList.length - 1, 0, newList.splice(fromIndex, 1)[0]);
  return newList;
}