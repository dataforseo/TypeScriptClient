[**Documentation**](../README.md)

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

##### data?

[`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md)

#### Returns

[`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Defined in

main.ts:169993

## Properties

### chain?

> `optional` **chain**: [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)[]

contains links that form a chain

#### Implementation of

[`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md).[`chain`](../interfaces/IOnPageRedirectChainsItem.md#chain)

#### Defined in

main.ts:169989

***

### is\_redirect\_loop?

> `optional` **is\_redirect\_loop**: `boolean`

indicates if redirects in chain start and end at the same URL
if true, the last URL from the chain redirects back to the original URL

#### Implementation of

[`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md).[`is_redirect_loop`](../interfaces/IOnPageRedirectChainsItem.md#is_redirect_loop)

#### Defined in

main.ts:169987

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:170002

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:170024

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Parameters

##### data

`any`

#### Returns

[`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Defined in

main.ts:170017
