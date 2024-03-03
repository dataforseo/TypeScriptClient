[Documentation](../README.md) / [Exports](../modules.md) / UserProfileInfo

# Class: UserProfileInfo

## Implements

- [`IUserProfileInfo`](../interfaces/IUserProfileInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](UserProfileInfo.md#constructor)

### Properties

- [avatar](UserProfileInfo.md#avatar)
- [locations](UserProfileInfo.md#locations)
- [name](UserProfileInfo.md#name)
- [reviews\_count](UserProfileInfo.md#reviews_count)
- [url](UserProfileInfo.md#url)

### Methods

- [init](UserProfileInfo.md#init)
- [toJSON](UserProfileInfo.md#tojson)
- [fromJS](UserProfileInfo.md#fromjs)

## Constructors

### constructor

• **new UserProfileInfo**(`data?`): [`UserProfileInfo`](UserProfileInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IUserProfileInfo`](../interfaces/IUserProfileInfo.md) |

#### Returns

[`UserProfileInfo`](UserProfileInfo.md)

#### Defined in

main.ts:175674

## Properties

### avatar

• `Optional` **avatar**: `string`

URL to the profile picture of the reviewer

#### Implementation of

[IUserProfileInfo](../interfaces/IUserProfileInfo.md).[avatar](../interfaces/IUserProfileInfo.md#avatar)

#### Defined in

main.ts:175664

___

### locations

• `Optional` **locations**: `string`

country of the reviewer

#### Implementation of

[IUserProfileInfo](../interfaces/IUserProfileInfo.md).[locations](../interfaces/IUserProfileInfo.md#locations)

#### Defined in

main.ts:175670

___

### name

• `Optional` **name**: `string`

the name of the reviewer

#### Implementation of

[IUserProfileInfo](../interfaces/IUserProfileInfo.md).[name](../interfaces/IUserProfileInfo.md#name)

#### Defined in

main.ts:175662

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Implementation of

[IUserProfileInfo](../interfaces/IUserProfileInfo.md).[reviews_count](../interfaces/IUserProfileInfo.md#reviews_count)

#### Defined in

main.ts:175668

___

### url

• `Optional` **url**: `string`

URL to the reviewer’s profile

#### Implementation of

[IUserProfileInfo](../interfaces/IUserProfileInfo.md).[url](../interfaces/IUserProfileInfo.md#url)

#### Defined in

main.ts:175666

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

main.ts:175683

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

main.ts:175704

___

### fromJS

▸ **fromJS**(`data`): [`UserProfileInfo`](UserProfileInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`UserProfileInfo`](UserProfileInfo.md)

#### Defined in

main.ts:175697
