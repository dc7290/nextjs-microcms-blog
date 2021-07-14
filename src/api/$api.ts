/* eslint-disable */
// prettier-ignore
import { AspidaClient, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './authors'
// prettier-ignore
import { Methods as Methods1 } from './banner'
// prettier-ignore
import { Methods as Methods2 } from './blog'
// prettier-ignore
import { Methods as Methods3 } from './blog/_slug@string'
// prettier-ignore
import { Methods as Methods4 } from './categories'
// prettier-ignore
import { Methods as Methods5 } from './partners'
// prettier-ignore
import { Methods as Methods6 } from './popular-articles'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://clone-microcms.microcms.io/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/authors'
  const PATH1 = '/banner'
  const PATH2 = '/blog'
  const PATH3 = '/categories'
  const PATH4 = '/partners'
  const PATH5 = '/popular-articles'
  const GET = 'GET'

  return {
    authors: {
      get: (option: { query?: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option: { query?: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    banner: {
      get: (option: { query?: Methods1['get']['query'], headers: Methods1['get']['reqHeaders'], config?: T }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option: { query?: Methods1['get']['query'], headers: Methods1['get']['reqHeaders'], config?: T }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    blog: {
      _slug: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          get: (option: { query?: Methods3['get']['query'], headers: Methods3['get']['reqHeaders'], config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query?: Methods3['get']['query'], headers: Methods3['get']['reqHeaders'], config?: T }) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query?: Methods2['get']['query'], headers: Methods2['get']['reqHeaders'], config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH2, GET, option).json(),
      $get: (option: { query?: Methods2['get']['query'], headers: Methods2['get']['reqHeaders'], config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    categories: {
      get: (option: { query?: Methods4['get']['query'], headers: Methods4['get']['reqHeaders'], config?: T }) =>
        fetch<Methods4['get']['resBody']>(prefix, PATH3, GET, option).json(),
      $get: (option: { query?: Methods4['get']['query'], headers: Methods4['get']['reqHeaders'], config?: T }) =>
        fetch<Methods4['get']['resBody']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods4['get']['query'] }) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    partners: {
      get: (option: { query?: Methods5['get']['query'], headers: Methods5['get']['reqHeaders'], config?: T }) =>
        fetch<Methods5['get']['resBody']>(prefix, PATH4, GET, option).json(),
      $get: (option: { query?: Methods5['get']['query'], headers: Methods5['get']['reqHeaders'], config?: T }) =>
        fetch<Methods5['get']['resBody']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods5['get']['query'] }) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    popular_articles: {
      get: (option: { query?: Methods6['get']['query'], headers: Methods6['get']['reqHeaders'], config?: T }) =>
        fetch<Methods6['get']['resBody']>(prefix, PATH5, GET, option).json(),
      $get: (option: { query?: Methods6['get']['query'], headers: Methods6['get']['reqHeaders'], config?: T }) =>
        fetch<Methods6['get']['resBody']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods6['get']['query'] }) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
