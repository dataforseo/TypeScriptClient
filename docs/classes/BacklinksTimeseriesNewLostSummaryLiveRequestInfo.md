[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksTimeseriesNewLostSummaryLiveRequestInfo

# Class: BacklinksTimeseriesNewLostSummaryLiveRequestInfo

## Implements

- [`IBacklinksTimeseriesNewLostSummaryLiveRequestInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md#constructor)

### Properties

- [date\_from](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md#date_from)
- [date\_to](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md#date_to)
- [group\_range](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md#group_range)
- [tag](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md#tag)
- [target](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md#target)

### Methods

- [init](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md#init)
- [toJSON](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md#tojson)
- [fromJS](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksTimeseriesNewLostSummaryLiveRequestInfo**(`data?`): [`BacklinksTimeseriesNewLostSummaryLiveRequestInfo`](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksTimeseriesNewLostSummaryLiveRequestInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveRequestInfo.md) |

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveRequestInfo`](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md)

#### Defined in

[main.ts:138882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138882)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
this field indicates the date which will be used as a threshold for new and lost backlinks and referring domains;
the backlinks and referring domains that appeared in our index after the specified date will be considered as new;
the backlinks and referring domains that weren’t found after the specified date, but were present before, will be considered as lost;
minimum value: 2019-01-30
maximum value shouldn’t exceed the date specified in the date_to
date format: "yyyy-mm-dd"
example:
"2021-01-01"

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveRequestInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveRequestInfo.md).[date_from](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveRequestInfo.md#date_from)

#### Defined in

[main.ts:138850](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138850)

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

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveRequestInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveRequestInfo.md).[date_to](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveRequestInfo.md#date_to)

#### Defined in

[main.ts:138859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138859)

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

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveRequestInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveRequestInfo.md).[group_range](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveRequestInfo.md#group_range)

#### Defined in

[main.ts:138872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138872)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveRequestInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveRequestInfo.md).[tag](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveRequestInfo.md#tag)

#### Defined in

[main.ts:138878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138878)

___


### target

• `Optional` **target**: `string`

domain to get data for
required field
a domain should be specified without https:// and www.
example:
"forbes.com"

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveRequestInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveRequestInfo.md).[target](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveRequestInfo.md#target)

#### Defined in

[main.ts:138839](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138839)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:138891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138891)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:138912](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138912)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksTimeseriesNewLostSummaryLiveRequestInfo`](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveRequestInfo`](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md)

#### Defined in

[main.ts:138905](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138905)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")