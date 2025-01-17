[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageRedirectChainsItem

# Interface: IOnPageRedirectChainsItem

Defined in: main.ts:170108

## Indexable

\[`key`: `string`\]: `any`

## Properties

### chain?

> `optional` **chain**: [`BaseOnPageLinkItemInfo`](../classes/BaseOnPageLinkItemInfo.md)[]

Defined in: main.ts:170113

contains links that form a chain

***

### is\_redirect\_loop?

> `optional` **is\_redirect\_loop**: `boolean`

Defined in: main.ts:170111

indicates if redirects in chain start and end at the same URL
if true, the last URL from the chain redirects back to the original URL
