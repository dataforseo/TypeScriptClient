[Documentation](../README.md) / [Exports](../modules.md) / OnPageRedirectChainsItem

# Class: OnPageRedirectChainsItem

## Implements

- [`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageRedirectChainsItem.md#constructor)

### Properties

- [chain](OnPageRedirectChainsItem.md#chain)
- [is\_redirect\_loop](OnPageRedirectChainsItem.md#is_redirect_loop)

### Methods

- [init](OnPageRedirectChainsItem.md#init)
- [toJSON](OnPageRedirectChainsItem.md#tojson)
- [fromJS](OnPageRedirectChainsItem.md#fromjs)

## Constructors

### constructor

• **new OnPageRedirectChainsItem**(`data?`): [`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageRedirectChainsItem`](../interfaces/IOnPageRedirectChainsItem.md) |

#### Returns

[`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Defined in

main.ts:154429

## Properties

### chain

• `Optional` **chain**: [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)[]

contains links that form a chain

#### Implementation of

[IOnPageRedirectChainsItem](../interfaces/IOnPageRedirectChainsItem.md).[chain](../interfaces/IOnPageRedirectChainsItem.md#chain)

#### Defined in

main.ts:154425

___

### is\_redirect\_loop

• `Optional` **is\_redirect\_loop**: `boolean`

indicates if redirects in chain start and end at the same URL
if true, the last URL from the chain redirects back to the original URL

#### Implementation of

[IOnPageRedirectChainsItem](../interfaces/IOnPageRedirectChainsItem.md).[is_redirect_loop](../interfaces/IOnPageRedirectChainsItem.md#is_redirect_loop)

#### Defined in

main.ts:154423

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:154438

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:154460

___

### fromJS

▸ **fromJS**(`data`): [`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageRedirectChainsItem`](OnPageRedirectChainsItem.md)

#### Defined in

main.ts:154453
