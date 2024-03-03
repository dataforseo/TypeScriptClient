[Documentation](../README.md) / [Exports](../modules.md) / Pages

# Class: Pages

## Implements

- [`IPages`](../interfaces/IPages.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](Pages.md#constructor)

### Properties

- [page](Pages.md#page)
- [similarity](Pages.md#similarity)

### Methods

- [init](Pages.md#init)
- [toJSON](Pages.md#tojson)
- [fromJS](Pages.md#fromjs)

## Constructors

### constructor

• **new Pages**(`data?`): [`Pages`](Pages.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPages`](../interfaces/IPages.md) |

#### Returns

[`Pages`](Pages.md)

#### Defined in

main.ts:147699

## Properties

### page

• `Optional` **page**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

information about the page with duplicate content

#### Implementation of

[IPages](../interfaces/IPages.md).[page](../interfaces/IPages.md#page)

#### Defined in

main.ts:147695

___

### similarity

• `Optional` **similarity**: `number`

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
can take values from 0 to 10

#### Implementation of

[IPages](../interfaces/IPages.md).[similarity](../interfaces/IPages.md#similarity)

#### Defined in

main.ts:147693

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

main.ts:147708

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

main.ts:147730

___

### fromJS

▸ **fromJS**(`data`): [`Pages`](Pages.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Pages`](Pages.md)

#### Defined in

main.ts:147723
