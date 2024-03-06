[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageLinksRequestInfo

# Interface: IOnPageLinksRequestInfo

## Implemented by

- [`OnPageLinksRequestInfo`](../classes/OnPageLinksRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [filters](IOnPageLinksRequestInfo.md#filters)
- [id](IOnPageLinksRequestInfo.md#id)
- [limit](IOnPageLinksRequestInfo.md#limit)
- [offset](IOnPageLinksRequestInfo.md#offset)
- [page\_from](IOnPageLinksRequestInfo.md#page_from)
- [page\_to](IOnPageLinksRequestInfo.md#page_to)
- [tag](IOnPageLinksRequestInfo.md#tag)

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["direction","=","external"]
[["domain_to","<>","example.com"],
"and",
["link_from","not_like","%example.com/blog%"]]
[["direction","=","external"],
"and",
[["link_from","like","%example.com/blog%"],"or",["link_from","like","%example.com/help%"]]]
The full list of possible filters is available by this link.

#### Defined in

[main.ts:148024](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148024)

___


### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Defined in

[main.ts:147987](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147987)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned links
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:148002](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148002)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned links
optional field
default value: 0
if you specify the 10 value, the first ten links in the results array will be omitted and the data will be provided for the successive links

#### Defined in

[main.ts:148007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148007)

___


### page\_from

• `Optional` **page\_from**: `string`

relative page URL
optional field
if you use this field, the API response will contain only links from the specified page
note that in this field you can specify relative URLs only

#### Defined in

[main.ts:147992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147992)

___


### page\_to

• `Optional` **page\_to**: `string`

relative page URL
optional field
if you use this field, the API response will contain only internal links pointing to the specified page
note that in this field you can specify relative URLs only

#### Defined in

[main.ts:147997](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147997)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:148030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148030)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")