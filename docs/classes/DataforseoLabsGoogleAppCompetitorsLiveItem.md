[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleAppCompetitorsLiveItem

# Class: DataforseoLabsGoogleAppCompetitorsLiveItem

## Implements

- [`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleAppCompetitorsLiveItem.md#constructor)

### Properties

- [app\_id](DataforseoLabsGoogleAppCompetitorsLiveItem.md#app_id)
- [avg\_position](DataforseoLabsGoogleAppCompetitorsLiveItem.md#avg_position)
- [competitor\_metrics](DataforseoLabsGoogleAppCompetitorsLiveItem.md#competitor_metrics)
- [full\_metrics](DataforseoLabsGoogleAppCompetitorsLiveItem.md#full_metrics)
- [intersections](DataforseoLabsGoogleAppCompetitorsLiveItem.md#intersections)
- [se\_type](DataforseoLabsGoogleAppCompetitorsLiveItem.md#se_type)
- [sum\_position](DataforseoLabsGoogleAppCompetitorsLiveItem.md#sum_position)

### Methods

- [init](DataforseoLabsGoogleAppCompetitorsLiveItem.md#init)
- [toJSON](DataforseoLabsGoogleAppCompetitorsLiveItem.md#tojson)
- [fromJS](DataforseoLabsGoogleAppCompetitorsLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleAppCompetitorsLiveItem**(`data?`): [`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md) |

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)

#### Defined in

main.ts:111686

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the competitor app

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveItem](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[app_id](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#app_id)

#### Defined in

main.ts:111665

___

### avg\_position

• `Optional` **avg\_position**: `number`

average position of the app in Google Play SERP
Note: average position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveItem](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[avg_position](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#avg_position)

#### Defined in

main.ts:111669

___

### competitor\_metrics

• `Optional` **competitor\_metrics**: [`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

metrics for intersecting keywords
ranking data relevant to the keywords that the provided competitor application shares with the app in a POST request;
note: in this array ranking data is provided for the returned competitor’s app_id

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveItem](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[competitor_metrics](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#competitor_metrics)

#### Defined in

main.ts:111679

___

### full\_metrics

• `Optional` **full\_metrics**: [`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

metrics for all keywords of the application
full overview of ranking data relevant to all keywords that the provided app_id is ranking for

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveItem](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[full_metrics](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#full_metrics)

#### Defined in

main.ts:111682

___

### intersections

• `Optional` **intersections**: `number`

number of intersecting keywords

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveItem](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[intersections](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#intersections)

#### Defined in

main.ts:111675

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveItem](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[se_type](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#se_type)

#### Defined in

main.ts:111663

___

### sum\_position

• `Optional` **sum\_position**: `number`

sum of all app positions in Google Play SERP
Note: sum position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveItem](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[sum_position](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#sum_position)

#### Defined in

main.ts:111673

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

main.ts:111695

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

main.ts:111718

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)

#### Defined in

main.ts:111711
