**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOnPageRedirectChainsItem

# Interface: IOnPageRedirectChainsItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### chain?

> **`optional`** **chain**: [`BaseOnPageLinkItemInfo`](../classes/BaseOnPageLinkItemInfo.md)[]

contains links that form a chain

#### Source

main.ts:154489

***

### is\_redirect\_loop?

> **`optional`** **is\_redirect\_loop**: `boolean`

indicates if redirects in chain start and end at the same URL
if true, the last URL from the chain redirects back to the original URL

#### Source

main.ts:154487
