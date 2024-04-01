[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleRankedKeywordsLiveResultInfo

# Class: DataforseoLabsGoogleRankedKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#location_code)
- [metrics](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#metrics)
- [metrics\_absolute](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#metrics_absolute)
- [se\_type](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#se_type)
- [target](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#target)
- [total\_count](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleRankedKeywordsLiveResultInfo**(`data?`): [`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleRankedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:89501

## Properties

### items

• `Optional` **items**: [`DataforseoLabsGoogleRankedKeywordsLiveItem`](DataforseoLabsGoogleRankedKeywordsLiveItem.md)[]

contains ranked keywords and related data

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#items)

#### Defined in

main.ts:89497

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#items_count)

#### Defined in

main.ts:89489

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#language_code)

#### Defined in

main.ts:89485

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#location_code)

#### Defined in

main.ts:89482

___

### metrics

• `Optional` **metrics**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[metrics](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#metrics)

#### Defined in

main.ts:89492

___

### metrics\_absolute

• `Optional` **metrics\_absolute**: `Object`

ranking data relevant to the specified domain
ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[metrics_absolute](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#metrics_absolute)

#### Defined in

main.ts:89495

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#se_type)

#### Defined in

main.ts:89477

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[target](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#target)

#### Defined in

main.ts:89479

___

### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleRankedKeywordsLiveResultInfo](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveResultInfo.md#total_count)

#### Defined in

main.ts:89487

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

main.ts:89510

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

main.ts:89551

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveResultInfo`](DataforseoLabsGoogleRankedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:89544
