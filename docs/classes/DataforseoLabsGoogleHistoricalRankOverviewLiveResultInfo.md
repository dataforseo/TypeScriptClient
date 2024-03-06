[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#constructor)

### Properties

- [items](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#items)
- [items\_count](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#items_count)
- [language\_code](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#language_code)
- [location\_code](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#location_code)
- [se\_type](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#se_type)
- [target](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#target)
- [total\_count](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#total_count)

### Methods

- [init](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo**(`data?`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Defined in

[main.ts:96534](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96534)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsGoogleHistoricalRankOverviewLiveItem`](DataforseoLabsGoogleHistoricalRankOverviewLiveItem.md)[]

contains historical ranking and traffic data

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[items](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#items)

#### Defined in

[main.ts:96530](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96530)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[items_count](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#items_count)

#### Defined in

[main.ts:96528](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96528)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#language_code)

#### Defined in

[main.ts:96524](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96524)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#location_code)

#### Defined in

[main.ts:96522](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96522)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[se_type](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#se_type)

#### Defined in

[main.ts:96518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96518)

___


### target

• `Optional` **target**: `string`

target domain in a POST array

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[target](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#target)

#### Defined in

[main.ts:96520](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96520)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md).[total_count](../interfaces/IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md#total_count)

#### Defined in

[main.ts:96526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96526)

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

[main.ts:96543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96543)

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

[main.ts:96570](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96570)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.md)

#### Defined in

[main.ts:96563](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96563)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")