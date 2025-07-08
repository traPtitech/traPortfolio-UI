// https://github.com/traPtitech/traQ_S-UI/blob/983c6f89f3246509011f8ca4d76e2ba24e0beb2b/src/lib/basic/array.ts

/**
 * 配列をクエリで検索し、優先順位付けしてマッチするキーの一覧を返す
 * 
 * 大文字小文字を区別せずに検索を行う
 * 
 * 優先度の計算:
 *  - 完全一致: +3 ポイント
 *  - 前方一致: +2 ポイント
 *  - 部分一致: +1 ポイント
 * 
 *
 * @param arr 検索対象のキーの配列
 * @param _queries 検索クエリの配列
 * @param f キーから検索対象の文字列を取得する関数
 * @returns マッチしたキーのうち、優先度が正のものを優先度の降順で返す 
 */
export const searchListCaseInsensitive = <T>(
  arr: readonly T[],
  _queries: string[],
  f: (v: T) => string
): T[] => {
  const queries = _queries.map(query => query.toLowerCase())
  return arr
    .map(value => {
      const valLower = f(value).toLowerCase()
      const priority = queries.reduce((acc, query) => {
        if (valLower === query) return acc + 3
        if (valLower.startsWith(query)) return acc + 2
        if (valLower.includes(query)) return acc + 1
        return acc
      }, 0)
      return { value, priority }
    })
    .filter(({ priority }) => priority > 0)
    .toSorted((a, b) => b.priority - a.priority)
    .map(({ value }) => value)
}
