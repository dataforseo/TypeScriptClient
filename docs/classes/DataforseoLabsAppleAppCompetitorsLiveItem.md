[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsAppleAppCompetitorsLiveItem

# Class: DataforseoLabsAppleAppCompetitorsLiveItem

## Implements

- [`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleAppCompetitorsLiveItem()

> **new DataforseoLabsAppleAppCompetitorsLiveItem**(`data`?): [`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Defined in

main.ts:118088

## Properties

### app\_id?

> `optional` **app\_id**: `string`

id of the competitor app

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`app_id`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#app_id)

#### Defined in

main.ts:118067

***

### avg\_position?

> `optional` **avg\_position**: `number`

average position of the app in App Store SERP
Note: average position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`avg_position`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#avg_position)

#### Defined in

main.ts:118071

***

### competitor\_metrics?

> `optional` **competitor\_metrics**: [`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

metrics for intersecting keywords
ranking data relevant to the keywords that the provided competitor application shares with the app in a POST request;
note: in this array ranking data is provided for the returned competitor’s app_id

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`competitor_metrics`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#competitor_metrics)

#### Defined in

main.ts:118081

***

### full\_metrics?

> `optional` **full\_metrics**: [`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

metrics for all keywords of the application
full overview of ranking data relevant to all keywords that the provided app_id is ranking for

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`full_metrics`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#full_metrics)

#### Defined in

main.ts:118084

***

### intersections?

> `optional` **intersections**: `number`

number of intersecting keywords

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`intersections`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#intersections)

#### Defined in

main.ts:118077

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#se_type)

#### Defined in

main.ts:118065

***

### sum\_position?

> `optional` **sum\_position**: `number`

sum of all app positions in App Store SERP
Note: sum position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Implementation of

[`IDataforseoLabsAppleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md).[`sum_position`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveItem.md#sum_position)

#### Defined in

main.ts:118075

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:118097

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:118120

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveItem`](DataforseoLabsAppleAppCompetitorsLiveItem.md)

#### Defined in

main.ts:118113
