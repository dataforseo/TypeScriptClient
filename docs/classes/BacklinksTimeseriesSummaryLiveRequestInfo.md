[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksTimeseriesSummaryLiveRequestInfo

# Class: BacklinksTimeseriesSummaryLiveRequestInfo

## Implements

- [`IBacklinksTimeseriesSummaryLiveRequestInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksTimeseriesSummaryLiveRequestInfo()

> **new BacklinksTimeseriesSummaryLiveRequestInfo**(`data`?): [`BacklinksTimeseriesSummaryLiveRequestInfo`](BacklinksTimeseriesSummaryLiveRequestInfo.md)

#### Parameters

##### data?

[`IBacklinksTimeseriesSummaryLiveRequestInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveRequestInfo.md)

#### Returns

[`BacklinksTimeseriesSummaryLiveRequestInfo`](BacklinksTimeseriesSummaryLiveRequestInfo.md)

#### Defined in

main.ts:159278

## Properties

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
optional field
this field indicates the date which will be used as a threshold for summary data;
minimum value: 2019-01-30
maximum value shouldn’t exceed the date specified in the date_to
date format: "yyyy-mm-dd"
example:
"2021-01-01"

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveRequestInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveRequestInfo.md).[`date_from`](../interfaces/IBacklinksTimeseriesSummaryLiveRequestInfo.md#date_from)

#### Defined in

main.ts:159241

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
minimum value shouldn’t preceed the date specified in the date_from
maximum value: today’s date
date format: "yyyy-mm-dd"
example:
"2021-01-15"

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveRequestInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveRequestInfo.md).[`date_to`](../interfaces/IBacklinksTimeseriesSummaryLiveRequestInfo.md#date_to)

#### Defined in

main.ts:159250

***

### group\_range?

> `optional` **group\_range**: `string`

time range which will be used to group the results
optional field
default value: month
possible values: day, week, month, year
note: for day, we will return items corresponding to all dates between and including date_from and date_to;
for week/month/year, we will return items corresponding to full weeks/months/years, where each item will indicate the last day of the week/month/year
for example, if you specify:
"group_range": "month",
"date_from": "2022-03-23",
"date_to": "2022-05-13"
we will return items falling between 2022-03-01 and 2022-05-31, namely, three items corresponding to the following dates: 2022-03-31, 2022-04-30, 2022-05-31
if there is no data for a certain  day/week/month/year, we will return 0

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveRequestInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveRequestInfo.md).[`group_range`](../interfaces/IBacklinksTimeseriesSummaryLiveRequestInfo.md#group_range)

#### Defined in

main.ts:159263

***

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveRequestInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveRequestInfo.md).[`include_subdomains`](../interfaces/IBacklinksTimeseriesSummaryLiveRequestInfo.md#include_subdomains)

#### Defined in

main.ts:159268

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveRequestInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksTimeseriesSummaryLiveRequestInfo.md#tag)

#### Defined in

main.ts:159274

***

### target?

> `optional` **target**: `string`

domain to get data for
required field
a domain should be specified without https:// and www.
example:
"forbes.com"

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveRequestInfo`](../interfaces/IBacklinksTimeseriesSummaryLiveRequestInfo.md).[`target`](../interfaces/IBacklinksTimeseriesSummaryLiveRequestInfo.md#target)

#### Defined in

main.ts:159232

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:159287

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:159309

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksTimeseriesSummaryLiveRequestInfo`](BacklinksTimeseriesSummaryLiveRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksTimeseriesSummaryLiveRequestInfo`](BacklinksTimeseriesSummaryLiveRequestInfo.md)

#### Defined in

main.ts:159302
