import { state, increase, decrease, get } from './actions'

/**
 * @typedef {object} Item
 * @prop {number} value
 */

/**
 * @typedef {object} State
 * @prop {Item} wind
 * @prop {Item} temperature
 * @prop {Item} humidity
 */

/**
 * @callback Action
 * @param {State}
 * @returns {State}
 */

/**
 * @callback Update
 * @param {Action}
 */

/**
 * @typedef {object} Store
 * @prop {Update} update
 */



increase(state);

decrease(state);

get(state, key);

state = {
    value: 1,
}

export const createStore = (initial) => {
    let state = [initial]

    const update = (action) => {
        if (typeof action !== 'function') {
            throw new Error('action is required to be a function')
        }

        const prev = Object.freeze({ ...state[0] })
        const next = Object.freeze({ ...action(prev) })

        state.unshift(next)
    }

    return {
        update,
    }
}
