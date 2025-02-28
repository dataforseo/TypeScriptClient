[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksTimeseriesSummaryLiveResultInfo

# Class: BacklinksTimeseriesSummaryLiveResultInfo

Defined in: main.ts:159744

## Implements

- [`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksTimeseriesSummaryLiveResultInfo()

> **new BacklinksTimeseriesSummaryLiveResultInfo**(`data`?): [`BacklinksTimeseriesSummaryLiveResultInfo`](BacklinksTimeseriesSummaryLiveResultInfo.md)

Defined in: main.ts:159766

#### Parameters

##### data?

[`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md)

#### Returns

[`BacklinksTimeseriesSummaryLiveResultInfo`](BacklinksTimeseriesSummaryLiveResultInfo.md)

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:159751

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[`date_from`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:159756

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[`date_to`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#date_to)

***

### group\_range?

> `optional` **group\_range**: `string`

Defined in: main.ts:159758

group_range from a POST array

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[`group_range`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#group_range)

***

### items?

> `optional` **items**: [`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)[]

Defined in: main.ts:159762

contains relevant summary data

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[`items`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:159760

the number of results returned in the items array

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#items_count)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:159746

target from a POST array

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[`target`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:159775

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:159801

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksTimeseriesSummaryLiveResultInfo`](BacklinksTimeseriesSummaryLiveResultInfo.md)

Defined in: main.ts:159794

#### Parameters

##### data

`any`

#### Returns

[`BacklinksTimeseriesSummaryLiveResultInfo`](BacklinksTimeseriesSummaryLiveResultInfo.md)
