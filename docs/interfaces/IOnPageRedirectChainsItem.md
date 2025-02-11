[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageRedirectChainsItem

# Interface: IOnPageRedirectChainsItem

Defined in: main.ts:170272

## Indexable

\[`key`: `string`\]: `any`

## Properties

### chain?

> `optional` **chain**: [`BaseOnPageLinkItemInfo`](../classes/BaseOnPageLinkItemInfo.md)[]

Defined in: main.ts:170277

contains links that form a chain

***

### is\_redirect\_loop?

> `optional` **is\_redirect\_loop**: `boolean`

Defined in: main.ts:170275

indicates if redirects in chain start and end at the same URL
if true, the last URL from the chain redirects back to the original URL
