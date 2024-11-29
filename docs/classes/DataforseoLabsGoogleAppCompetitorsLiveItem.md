[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleAppCompetitorsLiveItem

# Class: DataforseoLabsGoogleAppCompetitorsLiveItem

## Implements

- [`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleAppCompetitorsLiveItem()

> **new DataforseoLabsGoogleAppCompetitorsLiveItem**(`data`?): [`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md)

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)

#### Defined in

main.ts:122257

## Properties

### app\_id?

> `optional` **app\_id**: `string`

id of the competitor app

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[`app_id`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#app_id)

#### Defined in

main.ts:122236

***

### avg\_position?

> `optional` **avg\_position**: `number`

average position of the app in Google Play SERP
Note: average position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[`avg_position`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#avg_position)

#### Defined in

main.ts:122240

***

### competitor\_metrics?

> `optional` **competitor\_metrics**: [`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

metrics for intersecting keywords
ranking data relevant to the keywords that the provided competitor application shares with the app in a POST request;
note: in this array ranking data is provided for the returned competitor’s app_id

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[`competitor_metrics`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#competitor_metrics)

#### Defined in

main.ts:122250

***

### full\_metrics?

> `optional` **full\_metrics**: [`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

metrics for all keywords of the application
full overview of ranking data relevant to all keywords that the provided app_id is ranking for

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[`full_metrics`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#full_metrics)

#### Defined in

main.ts:122253

***

### intersections?

> `optional` **intersections**: `number`

number of intersecting keywords

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[`intersections`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#intersections)

#### Defined in

main.ts:122246

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#se_type)

#### Defined in

main.ts:122234

***

### sum\_position?

> `optional` **sum\_position**: `number`

sum of all app positions in Google Play SERP
Note: sum position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[`sum_position`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#sum_position)

#### Defined in

main.ts:122244

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:122266

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:122289

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)

#### Defined in

main.ts:122282
