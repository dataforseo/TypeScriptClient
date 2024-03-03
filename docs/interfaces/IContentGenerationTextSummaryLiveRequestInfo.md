[Documentation](../README.md) / [Exports](../modules.md) / IContentGenerationTextSummaryLiveRequestInfo

# Interface: IContentGenerationTextSummaryLiveRequestInfo

## Implemented by

- [`ContentGenerationTextSummaryLiveRequestInfo`](../classes/ContentGenerationTextSummaryLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [internal\_list\_limit](IContentGenerationTextSummaryLiveRequestInfo.md#internal_list_limit)
- [language\_code](IContentGenerationTextSummaryLiveRequestInfo.md#language_code)
- [language\_name](IContentGenerationTextSummaryLiveRequestInfo.md#language_name)
- [tag](IContentGenerationTextSummaryLiveRequestInfo.md#tag)
- [text](IContentGenerationTextSummaryLiveRequestInfo.md#text)

## Properties

### internal\_list\_limit

• `Optional` **internal\_list\_limit**: `number`

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the keyword_density array
default value: 10

#### Defined in

main.ts:162336

___

### language\_code

• `Optional` **language\_code**: `string`

code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Text Summary API

#### Defined in

main.ts:162331

___

### language\_name

• `Optional` **language\_name**: `string`

name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Text Summary API

#### Defined in

main.ts:162327

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:162342

___

### text

• `Optional` **text**: `string`

target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center

#### Defined in

main.ts:162323
