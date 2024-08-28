[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / HistoricalMetricsInfo

# Class: HistoricalMetricsInfo

## Implements

- [`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HistoricalMetricsInfo()

> **new HistoricalMetricsInfo**(`data`?): [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

#### Parameters

• **data?**: [`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md)

#### Returns

[`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

#### Defined in

main.ts:104411

## Properties

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

#### Implementation of

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md).[`clickstream_etv`](../interfaces/IHistoricalMetricsInfo.md#clickstream_etv)

#### Defined in

main.ts:104407

***

### count?

> `optional` **count**: `number`

total count of organic SERPs that contain the domain

#### Implementation of

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md).[`count`](../interfaces/IHistoricalMetricsInfo.md#count)

#### Defined in

main.ts:104402

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md).[`etv`](../interfaces/IHistoricalMetricsInfo.md#etv)

#### Defined in

main.ts:104400

***

### month?

> `optional` **month**: `number`

month for which the data is provided

#### Implementation of

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md).[`month`](../interfaces/IHistoricalMetricsInfo.md#month)

#### Defined in

main.ts:104395

***

### year?

> `optional` **year**: `number`

year for which the data is provided

#### Implementation of

[`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md).[`year`](../interfaces/IHistoricalMetricsInfo.md#year)

#### Defined in

main.ts:104393

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:104420

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:104441

***

### fromJS()

> `static` **fromJS**(`data`): [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

#### Defined in

main.ts:104434
