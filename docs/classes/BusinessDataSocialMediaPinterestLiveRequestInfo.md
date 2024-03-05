[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataSocialMediaPinterestLiveRequestInfo

# Class: BusinessDataSocialMediaPinterestLiveRequestInfo

## Implements

- [`IBusinessDataSocialMediaPinterestLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataSocialMediaPinterestLiveRequestInfo.md#constructor)

### Properties

- [tag](BusinessDataSocialMediaPinterestLiveRequestInfo.md#tag)
- [targets](BusinessDataSocialMediaPinterestLiveRequestInfo.md#targets)

### Methods

- [init](BusinessDataSocialMediaPinterestLiveRequestInfo.md#init)
- [toJSON](BusinessDataSocialMediaPinterestLiveRequestInfo.md#tojson)
- [fromJS](BusinessDataSocialMediaPinterestLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataSocialMediaPinterestLiveRequestInfo**(`data?`): [`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataSocialMediaPinterestLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md) |

#### Returns

[`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)

#### Defined in

[main.ts:205639](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205639)

## Properties

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveRequestInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md).[tag](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md#tag)

#### Defined in

[main.ts:205635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205635)

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

[IBusinessDataSocialMediaPinterestLiveRequestInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md).[targets](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md#targets)

#### Defined in

[main.ts:205629](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205629)

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

[main.ts:205648](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205648)

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

[main.ts:205670](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205670)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)

#### Defined in

[main.ts:205663](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205663)
