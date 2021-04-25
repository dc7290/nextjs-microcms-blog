/* eslint-disable */
import { AspidaClient, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './authors'
import { Methods as Methods1 } from './banner'
import { Methods as Methods2 } from './blog'
import { Methods as Methods3 } from './categories'
import { Methods as Methods4 } from './partners'
import { Methods as Methods5 } from './popular-articles'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://undefined.microcms.io/api/v1' : baseURL).replace(/\/$/, '')
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
      get: (option: { query?: Methods2['get']['query'], headers: Methods2['get']['reqHeaders'], config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH2, GET, option).json(),
      $get: (option: { query?: Methods2['get']['query'], headers: Methods2['get']['reqHeaders'], config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    categories: {
      get: (option: { query?: Methods3['get']['query'], headers: Methods3['get']['reqHeaders'], config?: T }) =>
        fetch<Methods3['get']['resBody']>(prefix, PATH3, GET, option).json(),
      $get: (option: { query?: Methods3['get']['query'], headers: Methods3['get']['reqHeaders'], config?: T }) =>
        fetch<Methods3['get']['resBody']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    partners: {
      get: (option: { query?: Methods4['get']['query'], headers: Methods4['get']['reqHeaders'], config?: T }) =>
        fetch<Methods4['get']['resBody']>(prefix, PATH4, GET, option).json(),
      $get: (option: { query?: Methods4['get']['query'], headers: Methods4['get']['reqHeaders'], config?: T }) =>
        fetch<Methods4['get']['resBody']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods4['get']['query'] }) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    popular_articles: {
      get: (option: { query?: Methods5['get']['query'], headers: Methods5['get']['reqHeaders'], config?: T }) =>
        fetch<Methods5['get']['resBody']>(prefix, PATH5, GET, option).json(),
      $get: (option: { query?: Methods5['get']['query'], headers: Methods5['get']['reqHeaders'], config?: T }) =>
        fetch<Methods5['get']['resBody']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods5['get']['query'] }) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
