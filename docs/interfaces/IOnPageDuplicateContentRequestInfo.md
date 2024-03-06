[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageDuplicateContentRequestInfo

# Interface: IOnPageDuplicateContentRequestInfo

## Implemented by

- [`OnPageDuplicateContentRequestInfo`](../classes/OnPageDuplicateContentRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [id](IOnPageDuplicateContentRequestInfo.md#id)
- [limit](IOnPageDuplicateContentRequestInfo.md#limit)
- [offset](IOnPageDuplicateContentRequestInfo.md#offset)
- [similarity](IOnPageDuplicateContentRequestInfo.md#similarity)
- [tag](IOnPageDuplicateContentRequestInfo.md#tag)
- [url](IOnPageDuplicateContentRequestInfo.md#url)

## Properties

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Defined in

[main.ts:147516](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147516)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:147529](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147529)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Defined in

[main.ts:147534](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147534)

___


### similarity

• `Optional` **similarity**: `number`

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
you can specify any similarity score in the 0-to-10 range

#### Defined in

[main.ts:147524](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147524)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:147540](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147540)

___


### url

• `Optional` **url**: `string`

page URL
required field
specify the initial page you want to receive duplicate content for

#### Defined in

[main.ts:147520](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147520)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")