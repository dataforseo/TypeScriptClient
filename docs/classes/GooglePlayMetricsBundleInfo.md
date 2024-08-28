[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / GooglePlayMetricsBundleInfo

# Class: GooglePlayMetricsBundleInfo

## Implements

- [`IGooglePlayMetricsBundleInfo`](../interfaces/IGooglePlayMetricsBundleInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GooglePlayMetricsBundleInfo()

> **new GooglePlayMetricsBundleInfo**(`data`?): [`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

#### Parameters

• **data?**: [`IGooglePlayMetricsBundleInfo`](../interfaces/IGooglePlayMetricsBundleInfo.md)

#### Returns

[`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

#### Defined in

main.ts:115727

## Properties

### google\_play\_search\_organic?

> `optional` **google\_play\_search\_organic**: [`AppMetricsInfo`](AppMetricsInfo.md)

ranking data from Google Play organic search

#### Implementation of

[`IGooglePlayMetricsBundleInfo`](../interfaces/IGooglePlayMetricsBundleInfo.md).[`google_play_search_organic`](../interfaces/IGooglePlayMetricsBundleInfo.md#google_play_search_organic)

#### Defined in

main.ts:115723

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:115736

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:115753

***

### fromJS()

> `static` **fromJS**(`data`): [`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

#### Defined in

main.ts:115746
