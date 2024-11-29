[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksHistoryLiveResultInfo

# Class: BacklinksHistoryLiveResultInfo

## Implements

- [`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksHistoryLiveResultInfo()

> **new BacklinksHistoryLiveResultInfo**(`data`?): [`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

#### Parameters

##### data?

[`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md)

#### Returns

[`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

#### Defined in

main.ts:151146

## Properties

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Implementation of

[`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md).[`date_from`](../interfaces/IBacklinksHistoryLiveResultInfo.md#date_from)

#### Defined in

main.ts:151131

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md).[`date_to`](../interfaces/IBacklinksHistoryLiveResultInfo.md#date_to)

#### Defined in

main.ts:151136

***

### items?

> `optional` **items**: [`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)[]

contains historical backlink data for the specified domain
the data is provided month-by-month;
the metrics are aggregated according to the backlinks the specified domain had on the first day of each given month

#### Implementation of

[`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md).[`items`](../interfaces/IBacklinksHistoryLiveResultInfo.md#items)

#### Defined in

main.ts:151142

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksHistoryLiveResultInfo.md#items_count)

#### Defined in

main.ts:151138

***

### target?

> `optional` **target**: `string`

target from the POST array

#### Implementation of

[`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md).[`target`](../interfaces/IBacklinksHistoryLiveResultInfo.md#target)

#### Defined in

main.ts:151126

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:151155

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:151180

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

#### Defined in

main.ts:151173
