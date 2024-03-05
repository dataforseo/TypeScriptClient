[dataforseo-client](../README.md) / [Exports](../modules.md) / TrendsMapDataInfo

# Class: TrendsMapDataInfo

## Implements

- [`ITrendsMapDataInfo`](../interfaces/ITrendsMapDataInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TrendsMapDataInfo.md#constructor)

### Properties

- [geo\_id](TrendsMapDataInfo.md#geo_id)
- [geo\_name](TrendsMapDataInfo.md#geo_name)
- [max\_value\_index](TrendsMapDataInfo.md#max_value_index)
- [values](TrendsMapDataInfo.md#values)

### Methods

- [init](TrendsMapDataInfo.md#init)
- [toJSON](TrendsMapDataInfo.md#tojson)
- [fromJS](TrendsMapDataInfo.md#fromjs)

## Constructors

### constructor

• **new TrendsMapDataInfo**(`data?`): [`TrendsMapDataInfo`](TrendsMapDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITrendsMapDataInfo`](../interfaces/ITrendsMapDataInfo.md) |

#### Returns

[`TrendsMapDataInfo`](TrendsMapDataInfo.md)

#### Defined in

[main.ts:120602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120602)

## Properties

### geo\_id

• `Optional` **geo\_id**: `string`

Google Trends location identifier
you can use this field for matching obtained results with location parameters specified in the request
example:
US-NY

#### Implementation of

[ITrendsMapDataInfo](../interfaces/ITrendsMapDataInfo.md).[geo_id](../interfaces/ITrendsMapDataInfo.md#geo_id)

#### Defined in

[main.ts:120584](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120584)

___

### geo\_name

• `Optional` **geo\_name**: `string`

Google Trends location name
you can use this field for matching obtained results with location parameters specified in the request

#### Implementation of

[ITrendsMapDataInfo](../interfaces/ITrendsMapDataInfo.md).[geo_name](../interfaces/ITrendsMapDataInfo.md#geo_name)

#### Defined in

[main.ts:120587](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120587)

___

### max\_value\_index

• `Optional` **max\_value\_index**: `number`

max value among comparable terms
represents the maximum value if you specified more than two keywords in a POST array
if you specified only one keyword, the value will be null

#### Implementation of

[ITrendsMapDataInfo](../interfaces/ITrendsMapDataInfo.md).[max_value_index](../interfaces/ITrendsMapDataInfo.md#max_value_index)

#### Defined in

[main.ts:120598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120598)

___

### values

• `Optional` **values**: `number`[]

relative keyword popularity rate in a given location
represents the location-specific keyword popularity rate over the given time range
if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords
a value of 100 is the peak popularity for the term
a value of 50 means that the term is half as popular
a value of 0 means there was not enough data for this term

#### Implementation of

[ITrendsMapDataInfo](../interfaces/ITrendsMapDataInfo.md).[values](../interfaces/ITrendsMapDataInfo.md#values)

#### Defined in

[main.ts:120594](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120594)

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

[main.ts:120611](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120611)

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

[main.ts:120635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120635)

___

### fromJS

▸ **fromJS**(`data`): [`TrendsMapDataInfo`](TrendsMapDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TrendsMapDataInfo`](TrendsMapDataInfo.md)

#### Defined in

[main.ts:120628](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120628)
