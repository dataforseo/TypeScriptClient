**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IContentGenerationCheckGrammarLiveRequestInfo

# Interface: IContentGenerationCheckGrammarLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### language\_code?

> **`optional`** **language\_code**: `string`

code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Check Grammar API

#### Source

main.ts:169329

***

### language\_name?

> **`optional`** **language\_name**: `string`

name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Check Grammar API

#### Source

main.ts:169333

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:169339

***

### text?

> **`optional`** **text**: `string`

target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center

#### Source

main.ts:169325
