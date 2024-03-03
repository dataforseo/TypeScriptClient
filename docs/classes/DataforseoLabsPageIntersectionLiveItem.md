[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsPageIntersectionLiveItem

# Class: DataforseoLabsPageIntersectionLiveItem

## Implements

- [`IDataforseoLabsPageIntersectionLiveItem`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsPageIntersectionLiveItem.md#constructor)

### Properties

- [intersection\_result](DataforseoLabsPageIntersectionLiveItem.md#intersection_result)
- [keyword\_data](DataforseoLabsPageIntersectionLiveItem.md#keyword_data)
- [se\_type](DataforseoLabsPageIntersectionLiveItem.md#se_type)

### Methods

- [init](DataforseoLabsPageIntersectionLiveItem.md#init)
- [toJSON](DataforseoLabsPageIntersectionLiveItem.md#tojson)
- [fromJS](DataforseoLabsPageIntersectionLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsPageIntersectionLiveItem**(`data?`): [`DataforseoLabsPageIntersectionLiveItem`](DataforseoLabsPageIntersectionLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsPageIntersectionLiveItem`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md) |

#### Returns

[`DataforseoLabsPageIntersectionLiveItem`](DataforseoLabsPageIntersectionLiveItem.md)

#### Defined in

main.ts:97294

## Properties

### intersection\_result

• `Optional` **intersection\_result**: `Object`

contains data on the SERP elements found for the returned keyword
data will be provided in separate arrays for each URL you specified in the pages object when setting a task;
depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively

#### Index signature

▪ [key: `string`]: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

#### Implementation of

[IDataforseoLabsPageIntersectionLiveItem](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md).[intersection_result](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md#intersection_result)

#### Defined in

main.ts:97290

___

### keyword\_data

• `Optional` **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[IDataforseoLabsPageIntersectionLiveItem](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md).[keyword_data](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md#keyword_data)

#### Defined in

main.ts:97286

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsPageIntersectionLiveItem](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md).[se_type](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md#se_type)

#### Defined in

main.ts:97284

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

main.ts:97303

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

main.ts:97328

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsPageIntersectionLiveItem`](DataforseoLabsPageIntersectionLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsPageIntersectionLiveItem`](DataforseoLabsPageIntersectionLiveItem.md)

#### Defined in

main.ts:97321
