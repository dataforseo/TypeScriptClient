[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleAppCompetitorsLiveItem

# Class: DataforseoLabsGoogleAppCompetitorsLiveItem

Defined in: main.ts:122416

## Implements

- [`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleAppCompetitorsLiveItem()

> **new DataforseoLabsGoogleAppCompetitorsLiveItem**(`data`?): [`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)

Defined in: main.ts:122441

#### Parameters

##### data?

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md)

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:122420

id of the competitor app

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[`app_id`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#app_id)

***

### avg\_position?

> `optional` **avg\_position**: `number`

Defined in: main.ts:122424

average position of the app in Google Play SERP
Note: average position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[`avg_position`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#avg_position)

***

### competitor\_metrics?

> `optional` **competitor\_metrics**: [`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

Defined in: main.ts:122434

metrics for intersecting keywords
ranking data relevant to the keywords that the provided competitor application shares with the app in a POST request;
note: in this array ranking data is provided for the returned competitor’s app_id

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[`competitor_metrics`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#competitor_metrics)

***

### full\_metrics?

> `optional` **full\_metrics**: [`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

Defined in: main.ts:122437

metrics for all keywords of the application
full overview of ranking data relevant to all keywords that the provided app_id is ranking for

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[`full_metrics`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#full_metrics)

***

### intersections?

> `optional` **intersections**: `number`

Defined in: main.ts:122430

number of intersecting keywords

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[`intersections`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#intersections)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:122418

search engine type

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#se_type)

***

### sum\_position?

> `optional` **sum\_position**: `number`

Defined in: main.ts:122428

sum of all app positions in Google Play SERP
Note: sum position is calculated for intersected keywords only;
the value for a given application may differ when combined with different target applications

#### Implementation of

[`IDataforseoLabsGoogleAppCompetitorsLiveItem`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md).[`sum_position`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveItem.md#sum_position)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:122450

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:122473

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)

Defined in: main.ts:122466

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveItem`](DataforseoLabsGoogleAppCompetitorsLiveItem.md)
