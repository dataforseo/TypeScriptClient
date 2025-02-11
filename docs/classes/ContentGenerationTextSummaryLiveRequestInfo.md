[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationTextSummaryLiveRequestInfo

# Class: ContentGenerationTextSummaryLiveRequestInfo

Defined in: main.ts:183844

## Implements

- [`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationTextSummaryLiveRequestInfo()

> **new ContentGenerationTextSummaryLiveRequestInfo**(`data`?): [`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)

Defined in: main.ts:183872

#### Parameters

##### data?

[`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md)

#### Returns

[`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)

## Properties

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:183862

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the keyword_density array
default value: 10

#### Implementation of

[`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#internal_list_limit)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:183857

code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Text Summary API

#### Implementation of

[`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[`language_code`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:183853

name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Text Summary API

#### Implementation of

[`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[`language_name`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#language_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:183868

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[`tag`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#tag)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:183849

target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center

#### Implementation of

[`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[`text`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#text)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:183881

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:183902

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)

Defined in: main.ts:183895

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)
