[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationTextSummaryLiveRequestInfo

# Class: ContentGenerationTextSummaryLiveRequestInfo

## Implements

- [`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationTextSummaryLiveRequestInfo()

> **new ContentGenerationTextSummaryLiveRequestInfo**(`data`?): [`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)

#### Parameters

##### data?

[`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md)

#### Returns

[`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)

#### Defined in

main.ts:183442

## Properties

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the keyword_density array
default value: 10

#### Implementation of

[`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#internal_list_limit)

#### Defined in

main.ts:183432

***

### language\_code?

> `optional` **language\_code**: `string`

code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Text Summary API

#### Implementation of

[`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[`language_code`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#language_code)

#### Defined in

main.ts:183427

***

### language\_name?

> `optional` **language\_name**: `string`

name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Text Summary API

#### Implementation of

[`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[`language_name`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#language_name)

#### Defined in

main.ts:183423

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[`tag`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#tag)

#### Defined in

main.ts:183438

***

### text?

> `optional` **text**: `string`

target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center

#### Implementation of

[`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[`text`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#text)

#### Defined in

main.ts:183419

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:183451

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:183472

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)

#### Defined in

main.ts:183465
