[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IContentGenerationTextSummaryLiveRequestInfo

# Interface: IContentGenerationTextSummaryLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the keyword_density array
default value: 10

#### Defined in

main.ts:171883

***

### language\_code?

> `optional` **language\_code**: `string`

code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Text Summary API

#### Defined in

main.ts:171878

***

### language\_name?

> `optional` **language\_name**: `string`

name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Text Summary API

#### Defined in

main.ts:171874

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:171889

***

### text?

> `optional` **text**: `string`

target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center

#### Defined in

main.ts:171870
