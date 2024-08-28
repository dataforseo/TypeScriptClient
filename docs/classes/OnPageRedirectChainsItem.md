[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / OnPageRedirectChainsItem

# Class: OnPageRedirectChainsItem

## Implements

- [`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageRedirectChainsItem()

> **new OnPageRedirectChainsItem**(`data`?): [`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Parameters

• **data?**: [`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md)

#### Returns

[`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Defined in

main.ts:162395

## Properties

### chain?

> `optional` **chain**: [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)[]

contains links that form a chain

#### Implementation of

[`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md).[`chain`](../interfaces/IOnPageRedirectChainsItem.md#chain)

#### Defined in

main.ts:162391

***

### is\_redirect\_loop?

> `optional` **is\_redirect\_loop**: `boolean`

indicates if redirects in chain start and end at the same URL
if true, the last URL from the chain redirects back to the original URL

#### Implementation of

[`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md).[`is_redirect_loop`](../interfaces/IOnPageRedirectChainsItem.md#is_redirect_loop)

#### Defined in

main.ts:162389

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:162404

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:162426

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Defined in

main.ts:162419
