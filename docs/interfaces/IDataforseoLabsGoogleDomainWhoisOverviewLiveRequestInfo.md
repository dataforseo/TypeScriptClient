[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo

# Interface: IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](../classes/DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [filters](IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#filters)
- [limit](IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#limit)
- [offset](IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#offset)
- [order\_by](IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#order_by)
- [tag](IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#tag)

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
examples:
["expiration_datetime", "<", "2021-02-15 01:00:00 +00:00"]
[["expiration_datetime", "<", "2021-02-15 01:00:00 +00:00"],
"and",
["domain", "like", "%seo%"]]

for more information about filters, please refer to Dataforseo Labs - Filters or this help center guide

#### Defined in

[main.ts:85615](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85615)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:85595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85595)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned items
optional field
default value: 0
if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items

#### Defined in

[main.ts:85600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85600)

___


### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc - results will be sorted in the ascending order
desc - results will be sorted in the descending order
the comma is used as a separator
example:
["metrics.organic.pos_1,desc"]
default rule:
["metrics.organic.count,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["expiration_datetime,asc","metrics.organic.etv,desc","metrics.organic.pos_1,desc"]

#### Defined in

[main.ts:85631](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85631)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:85637](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85637)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")