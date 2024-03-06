[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageMicrodataRequestInfo

# Interface: IOnPageMicrodataRequestInfo

## Implemented by

- [`OnPageMicrodataRequestInfo`](../classes/OnPageMicrodataRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [id](IOnPageMicrodataRequestInfo.md#id)
- [tag](IOnPageMicrodataRequestInfo.md#tag)
- [url](IOnPageMicrodataRequestInfo.md#url)

## Properties

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
"07131248-1535-0216-1000-17384017ad04"

#### Defined in

[main.ts:150562](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150562)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:150574](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150574)

___


### url

• `Optional` **url**: `string`

resource URL
required field
you can get this URL in the response of the Pages endpoint
example:
https://dataforseo.com/apis

#### Defined in

[main.ts:150568](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150568)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")