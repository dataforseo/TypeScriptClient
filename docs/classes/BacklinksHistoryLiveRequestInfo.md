[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksHistoryLiveRequestInfo

# Class: BacklinksHistoryLiveRequestInfo

Defined in: main.ts:150740

## Implements

- [`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksHistoryLiveRequestInfo()

> **new BacklinksHistoryLiveRequestInfo**(`data`?): [`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)

Defined in: main.ts:150769

#### Parameters

##### data?

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md)

#### Returns

[`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:150752

starting date of the time range
optional field
minimum value 2019-01-01
if you don’t specify this field, the minimum value will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[`date_from`](../interfaces/IBacklinksHistoryLiveRequestInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:150759

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[`date_to`](../interfaces/IBacklinksHistoryLiveRequestInfo.md#date_to)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:150765

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksHistoryLiveRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:150744

domain
required field
a domain should be specified without https:// and www.

#### Implementation of

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[`target`](../interfaces/IBacklinksHistoryLiveRequestInfo.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:150778

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:150798

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)

Defined in: main.ts:150791

#### Parameters

##### data

`any`

#### Returns

[`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)
