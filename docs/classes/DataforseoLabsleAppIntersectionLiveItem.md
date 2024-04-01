[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsleAppIntersectionLiveItem

# Class: DataforseoLabsleAppIntersectionLiveItem

## Implements

- [`IDataforseoLabsleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsleAppIntersectionLiveItem.md#constructor)

### Properties

- [intersection\_result](DataforseoLabsleAppIntersectionLiveItem.md#intersection_result)
- [keyword\_data](DataforseoLabsleAppIntersectionLiveItem.md#keyword_data)
- [se\_type](DataforseoLabsleAppIntersectionLiveItem.md#se_type)

### Methods

- [init](DataforseoLabsleAppIntersectionLiveItem.md#init)
- [toJSON](DataforseoLabsleAppIntersectionLiveItem.md#tojson)
- [fromJS](DataforseoLabsleAppIntersectionLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsleAppIntersectionLiveItem**(`data?`): [`DataforseoLabsleAppIntersectionLiveItem`](DataforseoLabsleAppIntersectionLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md) |

#### Returns

[`DataforseoLabsleAppIntersectionLiveItem`](DataforseoLabsleAppIntersectionLiveItem.md)

#### Defined in

main.ts:112259

## Properties

### intersection\_result

• `Optional` **intersection\_result**: `Object`

contains SERP data for the returned keyword
data will be provided in separate arrays for each app ID you specified in the app_ids object when setting a task;
depending on the number of specified app IDs, it can contain from 1 to 20 arrays named respectively

#### Index signature

▪ [key: `string`]: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Implementation of

[IDataforseoLabsleAppIntersectionLiveItem](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md).[intersection_result](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md#intersection_result)

#### Defined in

main.ts:112255

___

### keyword\_data

• `Optional` **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[IDataforseoLabsleAppIntersectionLiveItem](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md).[keyword_data](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md#keyword_data)

#### Defined in

main.ts:112251

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsleAppIntersectionLiveItem](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md).[se_type](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md#se_type)

#### Defined in

main.ts:112249

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

main.ts:112268

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

main.ts:112293

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsleAppIntersectionLiveItem`](DataforseoLabsleAppIntersectionLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsleAppIntersectionLiveItem`](DataforseoLabsleAppIntersectionLiveItem.md)

#### Defined in

main.ts:112286
