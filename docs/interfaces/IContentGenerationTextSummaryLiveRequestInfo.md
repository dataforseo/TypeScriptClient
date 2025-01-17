[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentGenerationTextSummaryLiveRequestInfo

# Interface: IContentGenerationTextSummaryLiveRequestInfo

Defined in: main.ts:183555

## Indexable

\[`key`: `string`\]: `any`

## Properties

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:183573

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the keyword_density array
default value: 10

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:183568

code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Text Summary API

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:183564

name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Text Summary API

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:183579

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:183560

target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center
