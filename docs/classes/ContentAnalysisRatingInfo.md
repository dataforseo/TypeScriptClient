[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisRatingInfo

# Class: ContentAnalysisRatingInfo

content rating rating related to content_info

## Implements

- [`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisRatingInfo.md#constructor)

### Properties

- [max\_rating\_value](ContentAnalysisRatingInfo.md#max_rating_value)
- [name](ContentAnalysisRatingInfo.md#name)
- [rating\_count](ContentAnalysisRatingInfo.md#rating_count)
- [rating\_value](ContentAnalysisRatingInfo.md#rating_value)
- [relative\_rating](ContentAnalysisRatingInfo.md#relative_rating)

### Methods

- [init](ContentAnalysisRatingInfo.md#init)
- [toJSON](ContentAnalysisRatingInfo.md#tojson)
- [fromJS](ContentAnalysisRatingInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisRatingInfo**(`data?`): [`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisRatingInfo`](../interfaces/IContentAnalysisRatingInfo.md) |

#### Returns

[`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

#### Defined in

[main.ts:156337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156337)

## Properties

### max\_rating\_value

• `Optional` **max\_rating\_value**: `string`

maximum value for the rating name

#### Implementation of

[IContentAnalysisRatingInfo](../interfaces/IContentAnalysisRatingInfo.md).[max_rating_value](../interfaces/IContentAnalysisRatingInfo.md#max_rating_value)

#### Defined in

[main.ts:156331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156331)

___

### name

• `Optional` **name**: `string`

rating name
here you can find the following elements: Max5, Percents, CustomMax

#### Implementation of

[IContentAnalysisRatingInfo](../interfaces/IContentAnalysisRatingInfo.md).[name](../interfaces/IContentAnalysisRatingInfo.md#name)

#### Defined in

[main.ts:156325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156325)

___

### rating\_count

• `Optional` **rating\_count**: `number`

number of votes

#### Implementation of

[IContentAnalysisRatingInfo](../interfaces/IContentAnalysisRatingInfo.md).[rating_count](../interfaces/IContentAnalysisRatingInfo.md#rating_count)

#### Defined in

[main.ts:156329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156329)

___

### rating\_value

• `Optional` **rating\_value**: `number`

the value of the rating

#### Implementation of

[IContentAnalysisRatingInfo](../interfaces/IContentAnalysisRatingInfo.md).[rating_value](../interfaces/IContentAnalysisRatingInfo.md#rating_value)

#### Defined in

[main.ts:156327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156327)

___

### relative\_rating

• `Optional` **relative\_rating**: `number`

relative rating

#### Implementation of

[IContentAnalysisRatingInfo](../interfaces/IContentAnalysisRatingInfo.md).[relative_rating](../interfaces/IContentAnalysisRatingInfo.md#relative_rating)

#### Defined in

[main.ts:156333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156333)

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

[main.ts:156346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156346)

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

[main.ts:156367](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156367)

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

#### Defined in

[main.ts:156360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156360)
