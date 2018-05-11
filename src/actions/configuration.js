/*
 * Action types
 */
export const UPDATE_SYSTEM_VALUES = "UPDATE_SYSTEM_VALUES";

/*
 * Action creators
 */
export function updateSystemValues(values) {
  return {
    type: UPDATE_SYSTEM_VALUES,
    systemValues: values
  };
}
