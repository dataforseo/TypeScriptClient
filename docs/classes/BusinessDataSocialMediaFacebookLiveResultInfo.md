[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataSocialMediaFacebookLiveResultInfo

# Class: BusinessDataSocialMediaFacebookLiveResultInfo

## Implements

- [`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataSocialMediaFacebookLiveResultInfo.md#constructor)

### Properties

- [like\_count](BusinessDataSocialMediaFacebookLiveResultInfo.md#like_count)
- [page\_url](BusinessDataSocialMediaFacebookLiveResultInfo.md#page_url)
- [type](BusinessDataSocialMediaFacebookLiveResultInfo.md#type)

### Methods

- [init](BusinessDataSocialMediaFacebookLiveResultInfo.md#init)
- [toJSON](BusinessDataSocialMediaFacebookLiveResultInfo.md#tojson)
- [fromJS](BusinessDataSocialMediaFacebookLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataSocialMediaFacebookLiveResultInfo**(`data?`): [`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md) |

#### Returns

[`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Defined in

main.ts:211437

## Properties

### like\_count

• `Optional` **like\_count**: `number`

number of likes for the related page_url
this field shows the number of likes a page received through the Facebook Like Button embed

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveResultInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[like_count](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#like_count)

#### Defined in

main.ts:211433

___

### page\_url

• `Optional` **page\_url**: `string`

URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveResultInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[page_url](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#page_url)

#### Defined in

main.ts:211430

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveResultInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[type](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#type)

#### Defined in

main.ts:211427

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

main.ts:211446

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

main.ts:211465

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Defined in

main.ts:211458
