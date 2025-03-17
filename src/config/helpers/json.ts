import { readFileSync } from "node:fs"

/**
 * Reads JSON file and converts its content to Object
 *
 * @param {String} path - the path of JSON file to read
 * @returns {Object} object
 */
export function loadJSON(path: string) {
  return JSON.parse(readFileSync(path, { encoding: "utf-8" }))
}
