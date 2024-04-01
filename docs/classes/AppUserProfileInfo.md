[Documentation](../README.md) / [Exports](../modules.md) / AppUserProfileInfo

# Class: AppUserProfileInfo

## Implements

- [`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppUserProfileInfo.md#constructor)

### Properties

- [profile\_image\_url](AppUserProfileInfo.md#profile_image_url)
- [profile\_name](AppUserProfileInfo.md#profile_name)

### Methods

- [init](AppUserProfileInfo.md#init)
- [toJSON](AppUserProfileInfo.md#tojson)
- [fromJS](AppUserProfileInfo.md#fromjs)

## Constructors

### constructor

• **new AppUserProfileInfo**(`data?`): [`AppUserProfileInfo`](AppUserProfileInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md) |

#### Returns

[`AppUserProfileInfo`](AppUserProfileInfo.md)

#### Defined in

main.ts:186615

## Properties

### profile\_image\_url

• `Optional` **profile\_image\_url**: `string`

URL to the reviewer’s profile image

#### Implementation of

[IAppUserProfileInfo](../interfaces/IAppUserProfileInfo.md).[profile_image_url](../interfaces/IAppUserProfileInfo.md#profile_image_url)

#### Defined in

main.ts:186611

___

### profile\_name

• `Optional` **profile\_name**: `string`

profile name of the reviewer

#### Implementation of

[IAppUserProfileInfo](../interfaces/IAppUserProfileInfo.md).[profile_name](../interfaces/IAppUserProfileInfo.md#profile_name)

#### Defined in

main.ts:186609

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

main.ts:186624

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

main.ts:186642

___

### fromJS

▸ **fromJS**(`data`): [`AppUserProfileInfo`](AppUserProfileInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppUserProfileInfo`](AppUserProfileInfo.md)

#### Defined in

main.ts:186635
