[dataforseo-client](../README.md) / [Exports](../modules.md) / IResponseDataInfo

# Interface: IResponseDataInfo

## Implemented by

- [`ResponseDataInfo`](../classes/ResponseDataInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [author](IResponseDataInfo.md#author)
- [text](IResponseDataInfo.md#text)
- [timestamp](IResponseDataInfo.md#timestamp)
- [title](IResponseDataInfo.md#title)

## Properties

### author

• `Optional` **author**: `string`

author of the response

#### Defined in

[main.ts:181271](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181271)

___

### text

• `Optional` **text**: `string`

content of the response

#### Defined in

[main.ts:181276](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181276)

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the response was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:181281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181281)

___

### title

• `Optional` **title**: `string`

title of the response
in this case, will equal null

#### Defined in

[main.ts:181274](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181274)
