[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksHistoryLiveRequestInfo

# Class: BacklinksHistoryLiveRequestInfo

## Implements

- [`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksHistoryLiveRequestInfo()

> **new BacklinksHistoryLiveRequestInfo**(`data`?): [`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md)

#### Returns

[`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)

#### Defined in

main.ts:142597

## Properties

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
optional field
minimum value 2019-01-01
if you don’t specify this field, the minimum value will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[`date_from`](../interfaces/IBacklinksHistoryLiveRequestInfo.md#date_from)

#### Defined in

main.ts:142580

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[`date_to`](../interfaces/IBacklinksHistoryLiveRequestInfo.md#date_to)

#### Defined in

main.ts:142587

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksHistoryLiveRequestInfo.md#tag)

#### Defined in

main.ts:142593

***

### target?

> `optional` **target**: `string`

domain
required field
a domain should be specified without https:// and www.

#### Implementation of

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[`target`](../interfaces/IBacklinksHistoryLiveRequestInfo.md#target)

#### Defined in

main.ts:142572

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:142606

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:142626

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)

#### Defined in

main.ts:142619
