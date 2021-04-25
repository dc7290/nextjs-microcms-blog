import aspida from '@aspida/axios'

import api from '~/src/api/$api'

export const apiClient = api(aspida())
