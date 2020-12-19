import { ADD_OPEATION_LOG, DELETE_ALL_OPRATION_LOGS } from "../actions";

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPEATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt
      }
      return [operationLog,...state]
    case DELETE_ALL_OPRATION_LOGS:
      return []
    default:
      return state
  }
}
export default operationLogs