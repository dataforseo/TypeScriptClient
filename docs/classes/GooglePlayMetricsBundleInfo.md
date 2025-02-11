[**Documentation**](../README.md)

***

[Documentation](../README.md) / GooglePlayMetricsBundleInfo

# Class: GooglePlayMetricsBundleInfo

Defined in: main.ts:122366

## Implements

- [`IGooglePlayMetricsBundleInfo`](../interfaces/IGooglePlayMetricsBundleInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GooglePlayMetricsBundleInfo()

> **new GooglePlayMetricsBundleInfo**(`data`?): [`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

Defined in: main.ts:122372

#### Parameters

##### data?

[`IGooglePlayMetricsBundleInfo`](../interfaces/IGooglePlayMetricsBundleInfo.md)

#### Returns

[`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

## Properties

### google\_play\_search\_organic?

> `optional` **google\_play\_search\_organic**: [`AppMetricsInfo`](AppMetricsInfo.md)

Defined in: main.ts:122368

ranking data from Google Play organic search

#### Implementation of

[`IGooglePlayMetricsBundleInfo`](../interfaces/IGooglePlayMetricsBundleInfo.md).[`google_play_search_organic`](../interfaces/IGooglePlayMetricsBundleInfo.md#google_play_search_organic)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:122381

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:122398

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

Defined in: main.ts:122391

#### Parameters

##### data

`any`

#### Returns

[`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)
