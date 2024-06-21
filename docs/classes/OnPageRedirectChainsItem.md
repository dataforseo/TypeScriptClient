**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageRedirectChainsItem

# Class: OnPageRedirectChainsItem

## Implements

- [`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageRedirectChainsItem(data)

> **new OnPageRedirectChainsItem**(`data`?): [`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Parameters

• **data?**: [`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md)

#### Returns

[`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Source

main.ts:157448

## Properties

### chain?

> **`optional`** **chain**: [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)[]

contains links that form a chain

#### Implementation of

[`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md).[`chain`](../interfaces/IOnPageRedirectChainsItem.md#chain)

#### Source

main.ts:157444

***

### is\_redirect\_loop?

> **`optional`** **is\_redirect\_loop**: `boolean`

indicates if redirects in chain start and end at the same URL
if true, the last URL from the chain redirects back to the original URL

#### Implementation of

[`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md).[`is_redirect_loop`](../interfaces/IOnPageRedirectChainsItem.md#is_redirect_loop)

#### Source

main.ts:157442

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:157457

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:157479

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Source

main.ts:157472
