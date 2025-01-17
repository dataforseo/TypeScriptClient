[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationGenerateTextLiveRequestInfo

# Class: ContentGenerationGenerateTextLiveRequestInfo

Defined in: main.ts:181560

## Implements

- [`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationGenerateTextLiveRequestInfo()

> **new ContentGenerationGenerateTextLiveRequestInfo**(`data`?): [`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)

Defined in: main.ts:181614

#### Parameters

##### data?

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md)

#### Returns

[`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)

## Properties

### creativity\_index?

> `optional` **creativity\_index**: `number`

Defined in: main.ts:181594

creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`creativity_index`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#creativity_index)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:181581

meta description of the content to generate
optional field
can contain from 1 to 1000 tokens
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`description`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#description)

***

### include\_conclusion?

> `optional` **include\_conclusion**: `boolean`

Defined in: main.ts:181598

include conclusion in generated text
optional field
if set to true, generated content will include a logical conclusion

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`include_conclusion`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#include_conclusion)

***

### meta\_keywords?

> `optional` **meta\_keywords**: `string`[]

Defined in: main.ts:181587

keywords for the content to generate
optional field
can contain up to 10 terms;
learn more about this parameter on our help center
example: "meta_keywords": ["iPhone","sell","CEO"]

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`meta_keywords`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#meta_keywords)

***

### sub\_topics?

> `optional` **sub\_topics**: `string`[]

Defined in: main.ts:181576

secondary topics of the content to generate
optional field
secondary topics for generating content;
can contain up to 10 terms;
example: "sub_topics": ["Apple","Pixar","Amazing Products"]

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`sub_topics`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#sub_topics)

***

### supplement\_token?

> `optional` **supplement\_token**: `string`

Defined in: main.ts:181604

token for generating subsequent results
optional field
provided in the identical filed of the response to each request;
you can use this parameter to continue the generation of text from the initial response
supplement_token values are unique for each subsequent task

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`supplement_token`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#supplement_token)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:181610

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`tag`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#tag)

***

### topic?

> `optional` **topic**: `string`

Defined in: main.ts:181565

main topic of the content to generate
required field
main topic for generating content;
can contain from 1 to 50 tokens

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`topic`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#topic)

***

### word\_count?

> `optional` **word\_count**: `number`

Defined in: main.ts:181570

number of words in content
required field
the number of tokens in the generated text;
can take values from 1 to 1000

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`word_count`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#word_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:181623

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:181656

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)

Defined in: main.ts:181649

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)
