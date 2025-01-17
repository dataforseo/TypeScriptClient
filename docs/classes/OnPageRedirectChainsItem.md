[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageRedirectChainsItem

# Class: OnPageRedirectChainsItem

Defined in: main.ts:170052

## Implements

- [`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageRedirectChainsItem()

> **new OnPageRedirectChainsItem**(`data`?): [`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

Defined in: main.ts:170061

#### Parameters

##### data?

[`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md)

#### Returns

[`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

## Properties

### chain?

> `optional` **chain**: [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)[]

Defined in: main.ts:170057

contains links that form a chain

#### Implementation of

[`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md).[`chain`](../interfaces/IOnPageRedirectChainsItem.md#chain)

***

### is\_redirect\_loop?

> `optional` **is\_redirect\_loop**: `boolean`

Defined in: main.ts:170055

indicates if redirects in chain start and end at the same URL
if true, the last URL from the chain redirects back to the original URL

#### Implementation of

[`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md).[`is_redirect_loop`](../interfaces/IOnPageRedirectChainsItem.md#is_redirect_loop)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:170070

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:170092

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

Defined in: main.ts:170085

#### Parameters

##### data

`any`

#### Returns

[`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)
