[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksTimeseriesSummaryLiveResultInfo

# Class: BacklinksTimeseriesSummaryLiveResultInfo

## Implements

- [`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksTimeseriesSummaryLiveResultInfo()

> **new BacklinksTimeseriesSummaryLiveResultInfo**(`data`?): [`BacklinksTimeseriesSummaryLiveResultInfo`](BacklinksTimeseriesSummaryLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md)

#### Returns

[`BacklinksTimeseriesSummaryLiveResultInfo`](BacklinksTimeseriesSummaryLiveResultInfo.md)

#### Defined in

main.ts:151430

## Properties

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[`date_from`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#date_from)

#### Defined in

main.ts:151415

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[`date_to`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#date_to)

#### Defined in

main.ts:151420

***

### group\_range?

> `optional` **group\_range**: `string`

group_range from a POST array

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[`group_range`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#group_range)

#### Defined in

main.ts:151422

***

### items?

> `optional` **items**: [`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)[]

contains relevant summary data

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[`items`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#items)

#### Defined in

main.ts:151426

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#items_count)

#### Defined in

main.ts:151424

***

### target?

> `optional` **target**: `string`

target from a POST array

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveResultInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md).[`target`](../interfaces/IBacklinksTimeseriesSummaryLiveResultInfo.md#target)

#### Defined in

main.ts:151410

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:151439

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:151465

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksTimeseriesSummaryLiveResultInfo`](BacklinksTimeseriesSummaryLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksTimeseriesSummaryLiveResultInfo`](BacklinksTimeseriesSummaryLiveResultInfo.md)

#### Defined in

main.ts:151458
