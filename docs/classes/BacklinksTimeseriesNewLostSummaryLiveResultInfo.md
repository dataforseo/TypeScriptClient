[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksTimeseriesNewLostSummaryLiveResultInfo

# Class: BacklinksTimeseriesNewLostSummaryLiveResultInfo

## Implements

- [`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksTimeseriesNewLostSummaryLiveResultInfo()

> **new BacklinksTimeseriesNewLostSummaryLiveResultInfo**(`data`?): [`BacklinksTimeseriesNewLostSummaryLiveResultInfo`](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveResultInfo`](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

#### Defined in

main.ts:148772

## Properties

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[`date_from`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#date_from)

#### Defined in

main.ts:148757

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[`date_to`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#date_to)

#### Defined in

main.ts:148762

***

### group\_range?

> `optional` **group\_range**: `string`

group_range from the POST array

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[`group_range`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#group_range)

#### Defined in

main.ts:148764

***

### items?

> `optional` **items**: [`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[`items`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#items)

#### Defined in

main.ts:148768

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#items_count)

#### Defined in

main.ts:148766

***

### target?

> `optional` **target**: `string`

target from a POST array

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md).[`target`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResultInfo.md#target)

#### Defined in

main.ts:148752

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:148781

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:148807

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksTimeseriesNewLostSummaryLiveResultInfo`](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveResultInfo`](BacklinksTimeseriesNewLostSummaryLiveResultInfo.md)

#### Defined in

main.ts:148800
