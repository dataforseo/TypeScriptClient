[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataSocialMediaRedditLiveRequestInfo

# Class: BusinessDataSocialMediaRedditLiveRequestInfo

## Implements

- [`IBusinessDataSocialMediaRedditLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataSocialMediaRedditLiveRequestInfo.md#constructor)

### Properties

- [tag](BusinessDataSocialMediaRedditLiveRequestInfo.md#tag)
- [targets](BusinessDataSocialMediaRedditLiveRequestInfo.md#targets)

### Methods

- [init](BusinessDataSocialMediaRedditLiveRequestInfo.md#init)
- [toJSON](BusinessDataSocialMediaRedditLiveRequestInfo.md#tojson)
- [fromJS](BusinessDataSocialMediaRedditLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataSocialMediaRedditLiveRequestInfo**(`data?`): [`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataSocialMediaRedditLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md) |

#### Returns

[`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)

#### Defined in

[main.ts:206157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206157)

## Properties

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBusinessDataSocialMediaRedditLiveRequestInfo](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md).[tag](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md#tag)

#### Defined in

[main.ts:206153](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206153)

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

[IBusinessDataSocialMediaRedditLiveRequestInfo](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md).[targets](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md#targets)

#### Defined in

[main.ts:206147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206147)

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

[main.ts:206166](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206166)

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

[main.ts:206188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206188)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)

#### Defined in

[main.ts:206181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206181)
