[dataforseo-client](../README.md) / [Exports](../modules.md) / TrendsGraphDataInfo

# Class: TrendsGraphDataInfo

## Implements

- [`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TrendsGraphDataInfo.md#constructor)

### Properties

- [date\_from](TrendsGraphDataInfo.md#date_from)
- [date\_to](TrendsGraphDataInfo.md#date_to)
- [missing\_data](TrendsGraphDataInfo.md#missing_data)
- [timestamp](TrendsGraphDataInfo.md#timestamp)
- [values](TrendsGraphDataInfo.md#values)

### Methods

- [init](TrendsGraphDataInfo.md#init)
- [toJSON](TrendsGraphDataInfo.md#tojson)
- [fromJS](TrendsGraphDataInfo.md#fromjs)

## Constructors

### constructor

• **new TrendsGraphDataInfo**(`data?`): [`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md) |

#### Returns

[`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)

#### Defined in

[main.ts:120405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120405)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

start date of the corresponding time range
in the UTC format: “yyyy-mm-dd”

#### Implementation of

[ITrendsGraphDataInfo](../interfaces/ITrendsGraphDataInfo.md).[date_from](../interfaces/ITrendsGraphDataInfo.md#date_from)

#### Defined in

[main.ts:120388](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120388)

___

### date\_to

• `Optional` **date\_to**: `string`

end date of the corresponding time range
in the UTC format: “yyyy-mm-dd”

#### Implementation of

[ITrendsGraphDataInfo](../interfaces/ITrendsGraphDataInfo.md).[date_to](../interfaces/ITrendsGraphDataInfo.md#date_to)

#### Defined in

[main.ts:120391](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120391)

___

### missing\_data

• `Optional` **missing\_data**: `boolean`

indicates whether the data is unavailable
if true the data on the graph in the Google Trends interface is missing and thus labelled with a dotted line

#### Implementation of

[ITrendsGraphDataInfo](../interfaces/ITrendsGraphDataInfo.md).[missing_data](../interfaces/ITrendsGraphDataInfo.md#missing_data)

#### Defined in

[main.ts:120396](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120396)

___

### timestamp

• `Optional` **timestamp**: `number`

a point in time in the Unix time format

#### Implementation of

[ITrendsGraphDataInfo](../interfaces/ITrendsGraphDataInfo.md).[timestamp](../interfaces/ITrendsGraphDataInfo.md#timestamp)

#### Defined in

[main.ts:120393](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120393)

___

### values

• `Optional` **values**: `number`[]

relative keyword popularity rate at a specific timestamp
represents the keyword popularity rate over the given time range
if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords
a value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. A score of 0 means there was not enough data for this term

#### Implementation of

[ITrendsGraphDataInfo](../interfaces/ITrendsGraphDataInfo.md).[values](../interfaces/ITrendsGraphDataInfo.md#values)

#### Defined in

[main.ts:120401](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120401)

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

[main.ts:120414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120414)

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

[main.ts:120439](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120439)

___

### fromJS

▸ **fromJS**(`data`): [`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)

#### Defined in

[main.ts:120432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120432)
