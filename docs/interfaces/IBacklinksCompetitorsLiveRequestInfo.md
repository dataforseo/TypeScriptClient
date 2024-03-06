[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksCompetitorsLiveRequestInfo

# Interface: IBacklinksCompetitorsLiveRequestInfo

## Implemented by

- [`BacklinksCompetitorsLiveRequestInfo`](../classes/BacklinksCompetitorsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [exclude\_large\_domains](IBacklinksCompetitorsLiveRequestInfo.md#exclude_large_domains)
- [filters](IBacklinksCompetitorsLiveRequestInfo.md#filters)
- [limit](IBacklinksCompetitorsLiveRequestInfo.md#limit)
- [main\_domain](IBacklinksCompetitorsLiveRequestInfo.md#main_domain)
- [offset](IBacklinksCompetitorsLiveRequestInfo.md#offset)
- [order\_by](IBacklinksCompetitorsLiveRequestInfo.md#order_by)
- [tag](IBacklinksCompetitorsLiveRequestInfo.md#tag)
- [target](IBacklinksCompetitorsLiveRequestInfo.md#target)

## Properties

### exclude\_large\_domains

• `Optional` **exclude\_large\_domains**: `boolean`

indicates whether large domain will appear in results
optional field
if set to true, the results from the large domain (google.com, amazon.com, etc.) will be omitted;
default value: true

#### Defined in

[main.ts:136108](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136108)

___


### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, =, <>, in, not_in, like, not_like, ilike, not_ilike
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["rank",">","100"]
[["target","like","%forbes%"],
"and",
[["rank",">","100"],"or",["intersections",">","5"]]]
The full list of possible filters is available here.

#### Defined in

[main.ts:136084](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136084)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:136065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136065)

___


### main\_domain

• `Optional` **main\_domain**: `boolean`

indicates if only main domain of the target will be included in the search
optional field
if set to true, only the main domain will be included in search;
default value: true

#### Defined in

[main.ts:136103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136103)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive pages

#### Defined in

[main.ts:136070](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136070)

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
["rank,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["intersections,desc","rank,asc"]

#### Defined in

[main.ts:136098](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136098)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:136114](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136114)

___


### target

• `Optional` **target**: `string`

domain, subdomain or webpage to get competitor domains for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

#### Defined in

[main.ts:136060](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136060)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")