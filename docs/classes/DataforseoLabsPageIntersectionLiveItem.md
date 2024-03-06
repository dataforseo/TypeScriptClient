[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsPageIntersectionLiveItem

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

[main.ts:97150](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97150)

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

[main.ts:97146](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97146)

___


### keyword\_data

• `Optional` **keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the returned keyword

#### Implementation of

[IDataforseoLabsPageIntersectionLiveItem](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md).[keyword_data](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md#keyword_data)

#### Defined in

[main.ts:97142](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97142)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsPageIntersectionLiveItem](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md).[se_type](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md#se_type)

#### Defined in

[main.ts:97140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97140)

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

[main.ts:97159](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97159)

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

[main.ts:97184](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97184)

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

[main.ts:97177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97177)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")