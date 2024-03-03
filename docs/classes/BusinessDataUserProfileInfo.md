[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataUserProfileInfo

# Class: BusinessDataUserProfileInfo

## Implements

- [`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataUserProfileInfo.md#constructor)

### Properties

- [image\_url](BusinessDataUserProfileInfo.md#image_url)
- [location](BusinessDataUserProfileInfo.md#location)
- [name](BusinessDataUserProfileInfo.md#name)
- [reviews\_count](BusinessDataUserProfileInfo.md#reviews_count)
- [url](BusinessDataUserProfileInfo.md#url)

### Methods

- [init](BusinessDataUserProfileInfo.md#init)
- [toJSON](BusinessDataUserProfileInfo.md#tojson)
- [fromJS](BusinessDataUserProfileInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataUserProfileInfo**(`data?`): [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md) |

#### Returns

[`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

#### Defined in

main.ts:200006

## Properties

### image\_url

• `Optional` **image\_url**: `string`

URL to the reviewer’s profile picture

#### Implementation of

[IBusinessDataUserProfileInfo](../interfaces/IBusinessDataUserProfileInfo.md).[image_url](../interfaces/IBusinessDataUserProfileInfo.md#image_url)

#### Defined in

main.ts:199998

___

### location

• `Optional` **location**: `string`

country of the reviewer

#### Implementation of

[IBusinessDataUserProfileInfo](../interfaces/IBusinessDataUserProfileInfo.md).[location](../interfaces/IBusinessDataUserProfileInfo.md#location)

#### Defined in

main.ts:200000

___

### name

• `Optional` **name**: `string`

the name of the reviewer

#### Implementation of

[IBusinessDataUserProfileInfo](../interfaces/IBusinessDataUserProfileInfo.md).[name](../interfaces/IBusinessDataUserProfileInfo.md#name)

#### Defined in

main.ts:199994

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Implementation of

[IBusinessDataUserProfileInfo](../interfaces/IBusinessDataUserProfileInfo.md).[reviews_count](../interfaces/IBusinessDataUserProfileInfo.md#reviews_count)

#### Defined in

main.ts:200002

___

### url

• `Optional` **url**: `string`

URL to the reviewer’s profile

#### Implementation of

[IBusinessDataUserProfileInfo](../interfaces/IBusinessDataUserProfileInfo.md).[url](../interfaces/IBusinessDataUserProfileInfo.md#url)

#### Defined in

main.ts:199996

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

main.ts:200015

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

main.ts:200036

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

#### Defined in

main.ts:200029
