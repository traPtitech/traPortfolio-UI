/* eslint-disable no-restricted-imports */
import { Apis } from '/@/lib/apis/generated'

const apis = new Apis({ basePath: '/api/v1' })

export default apis
export * from '/@/lib/apis/generated'
