[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataSocialMediaFacebookLiveRequestInfo

# Class: BusinessDataSocialMediaFacebookLiveRequestInfo

## Implements

- [`IBusinessDataSocialMediaFacebookLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataSocialMediaFacebookLiveRequestInfo.md#constructor)

### Properties

- [tag](BusinessDataSocialMediaFacebookLiveRequestInfo.md#tag)
- [targets](BusinessDataSocialMediaFacebookLiveRequestInfo.md#targets)

### Methods

- [init](BusinessDataSocialMediaFacebookLiveRequestInfo.md#init)
- [toJSON](BusinessDataSocialMediaFacebookLiveRequestInfo.md#tojson)
- [fromJS](BusinessDataSocialMediaFacebookLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataSocialMediaFacebookLiveRequestInfo**(`data?`): [`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataSocialMediaFacebookLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md) |

#### Returns

[`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)

#### Defined in

[main.ts:205899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205899)

## Properties

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveRequestInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md).[tag](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md#tag)

#### Defined in

[main.ts:205895](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205895)

___

### targets

• `Optional` **targets**: `string`[]

target URLs
required field
target page should be specified with its absolute URL (including http:// or https://)
example:
https://dataforseo.com/
Note: you can specify 10 targets maximum. You will be charged per earch URL you specify in this array

#### Implementation of

[IBusinessDataSocialMediaFacebookLiveRequestInfo](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md).[targets](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md#targets)

#### Defined in

[main.ts:205889](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205889)

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

[main.ts:205908](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205908)

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

[main.ts:205930](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205930)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)

#### Defined in

[main.ts:205923](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205923)
