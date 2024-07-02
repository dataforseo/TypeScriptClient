**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / GooglePlayMetricsBundleInfo

# Class: GooglePlayMetricsBundleInfo

## Implements

- [`IGooglePlayMetricsBundleInfo`](../interfaces/IGooglePlayMetricsBundleInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GooglePlayMetricsBundleInfo(data)

> **new GooglePlayMetricsBundleInfo**(`data`?): [`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

#### Parameters

• **data?**: [`IGooglePlayMetricsBundleInfo`](../interfaces/IGooglePlayMetricsBundleInfo.md)

#### Returns

[`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

#### Source

main.ts:114080

## Properties

### google\_play\_search\_organic?

> **`optional`** **google\_play\_search\_organic**: [`AppMetricsInfo`](AppMetricsInfo.md)

ranking data from Google Play organic search

#### Implementation of

[`IGooglePlayMetricsBundleInfo`](../interfaces/IGooglePlayMetricsBundleInfo.md).[`google_play_search_organic`](../interfaces/IGooglePlayMetricsBundleInfo.md#google_play_search_organic)

#### Source

main.ts:114076

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:114089

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:114106

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

#### Source

main.ts:114099
