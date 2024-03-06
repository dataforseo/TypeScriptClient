[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPagePagesRequestInfo

# Interface: IOnPagePagesRequestInfo

## Implemented by

- [`OnPagePagesRequestInfo`](../classes/OnPagePagesRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [filters](IOnPagePagesRequestInfo.md#filters)
- [id](IOnPagePagesRequestInfo.md#id)
- [limit](IOnPagePagesRequestInfo.md#limit)
- [offset](IOnPagePagesRequestInfo.md#offset)
- [order\_by](IOnPagePagesRequestInfo.md#order_by)
- [tag](IOnPagePagesRequestInfo.md#tag)

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["meta.external_links_count","<=",50]["url","like","https://dataforseo.com/apis/dataforseo-labs-api"][["checks.high_waiting_time","=",false],
"and",["resource_type","=","html"]][["page_timing.duration_time","<",100],"and",[["checks.large_page_size","=",false],"or",["checks.high_waiting_time","=",false]]]The full list of possible filters is available by this link.

#### Defined in

[main.ts:144020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144020)

___


### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Defined in

[main.ts:143999](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143999)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:144004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144004)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Defined in

[main.ts:144009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144009)

___


### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["meta.external_links_count,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["page_timing.dom_complete,asc","size,desc"]

#### Defined in

[main.ts:144034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144034)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:144040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L144040)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")