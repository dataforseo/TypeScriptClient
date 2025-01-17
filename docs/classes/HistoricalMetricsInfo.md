[**Documentation**](../README.md)

***

[Documentation](../README.md) / HistoricalMetricsInfo

# Class: HistoricalMetricsInfo

Defined in: main.ts:111380

## Implements

- [`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HistoricalMetricsInfo()

> **new HistoricalMetricsInfo**(`data`?): [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

Defined in: main.ts:111400

#### Parameters

##### data?

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md)

#### Returns

[`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

## Properties

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

Defined in: main.ts:111396

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

#### Implementation of

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md).[`clickstream_etv`](../interfaces/IHistoricalMetricsInfo.md#clickstream_etv)

***

### count?

> `optional` **count**: `number`

Defined in: main.ts:111391

total count of organic SERPs that contain the domain

#### Implementation of

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md).[`count`](../interfaces/IHistoricalMetricsInfo.md#count)

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:111389

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md).[`etv`](../interfaces/IHistoricalMetricsInfo.md#etv)

***

### month?

> `optional` **month**: `number`

Defined in: main.ts:111384

month for which the data is provided

#### Implementation of

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md).[`month`](../interfaces/IHistoricalMetricsInfo.md#month)

***

### year?

> `optional` **year**: `number`

Defined in: main.ts:111382

year for which the data is provided

#### Implementation of

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md).[`year`](../interfaces/IHistoricalMetricsInfo.md#year)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:111409

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:111430

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

Defined in: main.ts:111423

#### Parameters

##### data

`any`

#### Returns

[`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)
