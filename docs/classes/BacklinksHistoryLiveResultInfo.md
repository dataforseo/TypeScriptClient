[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksHistoryLiveResultInfo

# Class: BacklinksHistoryLiveResultInfo

Defined in: main.ts:151192

## Implements

- [`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksHistoryLiveResultInfo()

> **new BacklinksHistoryLiveResultInfo**(`data`?): [`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

Defined in: main.ts:151214

#### Parameters

##### data?

[`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md)

#### Returns

[`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:151199

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Implementation of

[`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md).[`date_from`](../interfaces/IBacklinksHistoryLiveResultInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:151204

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md).[`date_to`](../interfaces/IBacklinksHistoryLiveResultInfo.md#date_to)

***

### items?

> `optional` **items**: [`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)[]

Defined in: main.ts:151210

contains historical backlink data for the specified domain
the data is provided month-by-month;
the metrics are aggregated according to the backlinks the specified domain had on the first day of each given month

#### Implementation of

[`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md).[`items`](../interfaces/IBacklinksHistoryLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:151206

the number of results returned in the items array

#### Implementation of

[`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksHistoryLiveResultInfo.md#items_count)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:151194

target from the POST array

#### Implementation of

[`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md).[`target`](../interfaces/IBacklinksHistoryLiveResultInfo.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:151223

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:151248

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

Defined in: main.ts:151241

#### Parameters

##### data

`any`

#### Returns

[`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)
