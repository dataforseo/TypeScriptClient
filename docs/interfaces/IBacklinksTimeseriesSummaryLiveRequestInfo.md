[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksTimeseriesSummaryLiveRequestInfo

# Interface: IBacklinksTimeseriesSummaryLiveRequestInfo

## Implemented by

- [`BacklinksTimeseriesSummaryLiveRequestInfo`](../classes/BacklinksTimeseriesSummaryLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IBacklinksTimeseriesSummaryLiveRequestInfo.md#date_from)
- [date\_to](IBacklinksTimeseriesSummaryLiveRequestInfo.md#date_to)
- [group\_range](IBacklinksTimeseriesSummaryLiveRequestInfo.md#group_range)
- [tag](IBacklinksTimeseriesSummaryLiveRequestInfo.md#tag)
- [target](IBacklinksTimeseriesSummaryLiveRequestInfo.md#target)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
this field indicates the date which will be used as a threshold for summary data;
minimum value: 2019-01-30
maximum value shouldn’t exceed the date specified in the date_to
date format: "yyyy-mm-dd"
example:
"2021-01-01"

#### Defined in

[main.ts:138462](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138462)

___


### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
minimum value shouldn’t preceed the date specified in the date_from
maximum value: today’s date
date format: "yyyy-mm-dd"
example:
"2021-01-15"

#### Defined in

[main.ts:138471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138471)

___


### group\_range

• `Optional` **group\_range**: `string`

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

#### Defined in

[main.ts:138484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138484)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:138490](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138490)

___


### target

• `Optional` **target**: `string`

domain to get data for
required field
a domain should be specified without https:// and www.
example:
"forbes.com"

#### Defined in

[main.ts:138453](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138453)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")