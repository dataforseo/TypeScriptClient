[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksHistoryLiveRequestInfo

# Interface: IBacklinksHistoryLiveRequestInfo

## Implemented by

- [`BacklinksHistoryLiveRequestInfo`](../classes/BacklinksHistoryLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IBacklinksHistoryLiveRequestInfo.md#date_from)
- [date\_to](IBacklinksHistoryLiveRequestInfo.md#date_to)
- [tag](IBacklinksHistoryLiveRequestInfo.md#tag)
- [target](IBacklinksHistoryLiveRequestInfo.md#target)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
minimum value 2019-01-01
if you don’t specify this field, the minimum value will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

[main.ts:129987](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129987)

___


### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

[main.ts:129994](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129994)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:130000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L130000)

___


### target

• `Optional` **target**: `string`

domain
required field
a domain should be specified without https:// and www.

#### Defined in

[main.ts:129979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129979)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")