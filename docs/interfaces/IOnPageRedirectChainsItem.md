[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageRedirectChainsItem

# Interface: IOnPageRedirectChainsItem

## Implemented by

- [`OnPageRedirectChainsItem`](../classes/OnPageRedirectChainsItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [chain](IOnPageRedirectChainsItem.md#chain)
- [is\_redirect\_loop](IOnPageRedirectChainsItem.md#is_redirect_loop)

## Properties

### chain

• `Optional` **chain**: [`BaseOnPageLinkItemInfo`](../classes/BaseOnPageLinkItemInfo.md)[]

contains links that form a chain

#### Defined in

[main.ts:149054](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149054)

___

### is\_redirect\_loop

• `Optional` **is\_redirect\_loop**: `boolean`

indicates if redirects in chain start and end at the same URL
if true, the last URL from the chain redirects back to the original URL

#### Defined in

[main.ts:149052](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149052)
