[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataSocialMediaPinterestLiveRequestInfo

# Interface: IBusinessDataSocialMediaPinterestLiveRequestInfo

## Implemented by

- [`BusinessDataSocialMediaPinterestLiveRequestInfo`](../classes/BusinessDataSocialMediaPinterestLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [tag](IBusinessDataSocialMediaPinterestLiveRequestInfo.md#tag)
- [targets](IBusinessDataSocialMediaPinterestLiveRequestInfo.md#targets)

## Properties

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:205699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205699)

___


### targets

• `Optional` **targets**: `string`[]

target URLs
required field
target page should be specified with its absolute URL (including http:// or https://)
example:
https://dataforseo.com/
Note: you can specify 10 targets maximum. You will be charged per earch URL you specify in this array

#### Defined in

[main.ts:205693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205693)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")