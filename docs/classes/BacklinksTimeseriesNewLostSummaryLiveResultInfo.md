[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksTimeseriesNewLostSummaryLiveResultInfo

# Class: BacklinksTimeseriesNewLostSummaryLiveResultInfo

Defined in: main.ts:160056

## Implements

- [`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksTimeseriesNewLostSummaryLiveResultInfo()

> **new BacklinksTimeseriesNewLostSummaryLiveResultInfo**(`data`?): [`BacklinksTimeseriesNewLostSummaryLiveResultInfo`](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

Defined in: main.ts:160078

#### Parameters

##### data?

[`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveResultInfo`](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:160063

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[`date_from`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:160068

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[`date_to`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#date_to)

***

### group\_range?

> `optional` **group\_range**: `string`

Defined in: main.ts:160070

group_range from the POST array

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[`group_range`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#group_range)

***

### items?

> `optional` **items**: [`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)[]

Defined in: main.ts:160074

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[`items`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:160072

the number of results returned in the items array

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#items_count)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:160058

target from a POST array

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[`target`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:160087

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:160113

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksTimeseriesNewLostSummaryLiveResultInfo`](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

Defined in: main.ts:160106

#### Parameters

##### data

`any`

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveResultInfo`](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md)
