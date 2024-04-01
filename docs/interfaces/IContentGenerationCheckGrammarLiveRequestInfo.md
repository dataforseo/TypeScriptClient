[Documentation](../README.md) / [Exports](../modules.md) / IContentGenerationCheckGrammarLiveRequestInfo

# Interface: IContentGenerationCheckGrammarLiveRequestInfo

## Implemented by

- [`ContentGenerationCheckGrammarLiveRequestInfo`](../classes/ContentGenerationCheckGrammarLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [language\_code](IContentGenerationCheckGrammarLiveRequestInfo.md#language_code)
- [language\_name](IContentGenerationCheckGrammarLiveRequestInfo.md#language_name)
- [tag](IContentGenerationCheckGrammarLiveRequestInfo.md#tag)
- [text](IContentGenerationCheckGrammarLiveRequestInfo.md#text)

## Properties

### language\_code

• `Optional` **language\_code**: `string`

code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Check Grammar API

#### Defined in

main.ts:166879

___

### language\_name

• `Optional` **language\_name**: `string`

name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Check Grammar API

#### Defined in

main.ts:166883

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:166889

___

### text

• `Optional` **text**: `string`

target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center

#### Defined in

main.ts:166875
