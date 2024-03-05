[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataSocialMediaPinterestLiveResultInfo

# Class: BusinessDataSocialMediaPinterestLiveResultInfo

## Implements

- [`IBusinessDataSocialMediaPinterestLiveResultInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataSocialMediaPinterestLiveResultInfo.md#constructor)

### Properties

- [page\_url](BusinessDataSocialMediaPinterestLiveResultInfo.md#page_url)
- [pins\_count](BusinessDataSocialMediaPinterestLiveResultInfo.md#pins_count)
- [type](BusinessDataSocialMediaPinterestLiveResultInfo.md#type)

### Methods

- [init](BusinessDataSocialMediaPinterestLiveResultInfo.md#init)
- [toJSON](BusinessDataSocialMediaPinterestLiveResultInfo.md#tojson)
- [fromJS](BusinessDataSocialMediaPinterestLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataSocialMediaPinterestLiveResultInfo**(`data?`): [`BusinessDataSocialMediaPinterestLiveResultInfo`](BusinessDataSocialMediaPinterestLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataSocialMediaPinterestLiveResultInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md) |

#### Returns

[`BusinessDataSocialMediaPinterestLiveResultInfo`](BusinessDataSocialMediaPinterestLiveResultInfo.md)

#### Defined in

[main.ts:205717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205717)

## Properties

### page\_url

• `Optional` **page\_url**: `string`

URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveResultInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md).[page_url](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md#page_url)

#### Defined in

[main.ts:205709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205709)

___

### pins\_count

• `Optional` **pins\_count**: `number`

number of pins for the related page_url
pins on Pinterest correspond to content saves;
this field shows the number of content saves made from the related page_url using the Pinterest Save Button

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveResultInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md).[pins_count](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md#pins_count)

#### Defined in

[main.ts:205713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205713)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveResultInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md).[type](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md#type)

#### Defined in

[main.ts:205706](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205706)

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

[main.ts:205726](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205726)

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

[main.ts:205745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205745)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataSocialMediaPinterestLiveResultInfo`](BusinessDataSocialMediaPinterestLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataSocialMediaPinterestLiveResultInfo`](BusinessDataSocialMediaPinterestLiveResultInfo.md)

#### Defined in

[main.ts:205738](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205738)
