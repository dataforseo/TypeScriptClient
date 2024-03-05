[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleAppCompetitorsLiveItem

# Class: DataforseoLabsAppleAppCompetitorsLiveItem

## Implements

- [`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleAppCompetitorsLiveItem.md#constructor)

### Properties

- [app\_id](DataforseoLabsAppleAppCompetitorsLiveItem.md#app_id)
- [avg\_position](DataforseoLabsAppleAppCompetitorsLiveItem.md#avg_position)
- [competitor\_metrics](DataforseoLabsAppleAppCompetitorsLiveItem.md#competitor_metrics)
- [full\_metrics](DataforseoLabsAppleAppCompetitorsLiveItem.md#full_metrics)
- [intersections](DataforseoLabsAppleAppCompetitorsLiveItem.md#intersections)
- [se\_type](DataforseoLabsAppleAppCompetitorsLiveItem.md#se_type)
- [sum\_position](DataforseoLabsAppleAppCompetitorsLiveItem.md#sum_position)

### Methods

- [init](DataforseoLabsAppleAppCompetitorsLiveItem.md#init)
- [toJSON](DataforseoLabsAppleAppCompetitorsLiveItem.md#tojson)
- [fromJS](DataforseoLabsAppleAppCompetitorsLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleAppCompetitorsLiveItem**(`data?`): [`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md) |

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Defined in

[main.ts:111441](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111441)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the competitor app

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveItem](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[app_id](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#app_id)

#### Defined in

[main.ts:111420](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111420)

___

### avg\_position

• `Optional` **avg\_position**: `number`

average position of the app in App Store SERP
Note: average position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveItem](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[avg_position](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#avg_position)

#### Defined in

[main.ts:111424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111424)

___

### competitor\_metrics

• `Optional` **competitor\_metrics**: [`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

metrics for intersecting keywords
ranking data relevant to the keywords that the provided competitor application shares with the app in a POST request;
note: in this array ranking data is provided for the returned competitor’s app_id

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveItem](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[competitor_metrics](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#competitor_metrics)

#### Defined in

[main.ts:111434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111434)

___

### full\_metrics

• `Optional` **full\_metrics**: [`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

metrics for all keywords of the application
full overview of ranking data relevant to all keywords that the provided app_id is ranking for

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveItem](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[full_metrics](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#full_metrics)

#### Defined in

[main.ts:111437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111437)

___

### intersections

• `Optional` **intersections**: `number`

number of intersecting keywords

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveItem](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[intersections](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#intersections)

#### Defined in

[main.ts:111430](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111430)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveItem](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[se_type](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#se_type)

#### Defined in

[main.ts:111418](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111418)

___

### sum\_position

• `Optional` **sum\_position**: `number`

sum of all app positions in App Store SERP
Note: sum position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveItem](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[sum_position](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#sum_position)

#### Defined in

[main.ts:111428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111428)

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

[main.ts:111450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111450)

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

[main.ts:111473](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111473)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Defined in

[main.ts:111466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111466)
