[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsSerpCompetitorsLiveItem

# Class: DataforseoLabsSerpCompetitorsLiveItem

## Implements

- [`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsSerpCompetitorsLiveItem.md#constructor)

### Properties

- [avg\_position](DataforseoLabsSerpCompetitorsLiveItem.md#avg_position)
- [domain](DataforseoLabsSerpCompetitorsLiveItem.md#domain)
- [etv](DataforseoLabsSerpCompetitorsLiveItem.md#etv)
- [keywords\_count](DataforseoLabsSerpCompetitorsLiveItem.md#keywords_count)
- [keywords\_positions](DataforseoLabsSerpCompetitorsLiveItem.md#keywords_positions)
- [median\_position](DataforseoLabsSerpCompetitorsLiveItem.md#median_position)
- [rating](DataforseoLabsSerpCompetitorsLiveItem.md#rating)
- [relevant\_serp\_items](DataforseoLabsSerpCompetitorsLiveItem.md#relevant_serp_items)
- [se\_type](DataforseoLabsSerpCompetitorsLiveItem.md#se_type)
- [visibility](DataforseoLabsSerpCompetitorsLiveItem.md#visibility)

### Methods

- [init](DataforseoLabsSerpCompetitorsLiveItem.md#init)
- [toJSON](DataforseoLabsSerpCompetitorsLiveItem.md#tojson)
- [fromJS](DataforseoLabsSerpCompetitorsLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsSerpCompetitorsLiveItem**(`data?`): [`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md) |

#### Returns

[`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)

#### Defined in

[main.ts:87683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87683)

## Properties

### avg\_position

• `Optional` **avg\_position**: `number`

the average position of the domain for the specified keywords
the arithmetic mean of values in the keywords_positions array

#### Implementation of

[IDataforseoLabsSerpCompetitorsLiveItem](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[avg_position](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#avg_position)

#### Defined in

[main.ts:87653](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87653)

___


### domain

• `Optional` **domain**: `string`

domain name of the detected SERP competitor

#### Implementation of

[IDataforseoLabsSerpCompetitorsLiveItem](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[domain](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#domain)

#### Defined in

[main.ts:87650](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87650)

___


### etv

• `Optional` **etv**: `number`

estimated traffic volume
represents the estimated monthly traffic that specified keywords are driving to the website
calculated as the sum of the products of the specified keywords’ search volume values and CTR (click-through-rate) rates at certain positions in SERP
learn more about how the metric is calculated in this help center article

#### Implementation of

[IDataforseoLabsSerpCompetitorsLiveItem](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[etv](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#etv)

#### Defined in

[main.ts:87665](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87665)

___


### keywords\_count

• `Optional` **keywords\_count**: `number`

the number of specified keywords the domain has positions for in SERPs

#### Implementation of

[IDataforseoLabsSerpCompetitorsLiveItem](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[keywords_count](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#keywords_count)

#### Defined in

[main.ts:87667](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87667)

___


### keywords\_positions

• `Optional` **keywords\_positions**: `Object`

keyword positions
SERP positions the related domain holds in SERP for the specified keywords

#### Index signature

▪ [key: `string`]: `number`[]

#### Implementation of

[IDataforseoLabsSerpCompetitorsLiveItem](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[keywords_positions](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#keywords_positions)

#### Defined in

[main.ts:87679](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87679)

___


### median\_position

• `Optional` **median\_position**: `number`

the median position of the domain for the specified keywords
the median of the values in the keywords_positions array

#### Implementation of

[IDataforseoLabsSerpCompetitorsLiveItem](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[median_position](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#median_position)

#### Defined in

[main.ts:87656](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87656)

___


### rating

• `Optional` **rating**: `number`

the margin between the greatest possible and actual keyword positions
represents the relative visibility rate of the domain in SERP for the specified keywords
calculated as sum(100-keywords_positions)

#### Implementation of

[IDataforseoLabsSerpCompetitorsLiveItem](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[rating](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#rating)

#### Defined in

[main.ts:87660](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87660)

___


### relevant\_serp\_items

• `Optional` **relevant\_serp\_items**: `number`

the number of SERP elements relevant to the domain
represents the number of search results in SERP relevant to the domain for the specified keywords

#### Implementation of

[IDataforseoLabsSerpCompetitorsLiveItem](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[relevant_serp_items](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#relevant_serp_items)

#### Defined in

[main.ts:87676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87676)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsSerpCompetitorsLiveItem](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[se_type](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#se_type)

#### Defined in

[main.ts:87648](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87648)

___


### visibility

• `Optional` **visibility**: `number`

SERP visibility rate
represents the website visibility rate based on the SERP positions of the specified keywords
Keywords with positions in the range from 1 to 10 are assigned the visibility index from 1 to 0.1, respectively
Keywords with positions in the range from 11 to 20 have the fixed visibility index of 0.05
keywords with positions from 20 to 100 have the visibility index equal to 0

#### Implementation of

[IDataforseoLabsSerpCompetitorsLiveItem](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[visibility](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#visibility)

#### Defined in

[main.ts:87673](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87673)

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

[main.ts:87692](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87692)

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

[main.ts:87724](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87724)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)

#### Defined in

[main.ts:87717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L87717)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")