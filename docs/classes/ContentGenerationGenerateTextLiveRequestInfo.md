[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ContentGenerationGenerateTextLiveRequestInfo

# Class: ContentGenerationGenerateTextLiveRequestInfo

## Implements

- [`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationGenerateTextLiveRequestInfo()

> **new ContentGenerationGenerateTextLiveRequestInfo**(`data`?): [`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)

#### Parameters

• **data?**: [`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md)

#### Returns

[`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)

#### Defined in

main.ts:173994

## Properties

### creativity\_index?

> `optional` **creativity\_index**: `number`

creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`creativity_index`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#creativity_index)

#### Defined in

main.ts:173974

***

### description?

> `optional` **description**: `string`

meta description of the content to generate
optional field
can contain from 1 to 1000 tokens
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`description`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#description)

#### Defined in

main.ts:173961

***

### include\_conclusion?

> `optional` **include\_conclusion**: `boolean`

include conclusion in generated text
optional field
if set to true, generated content will include a logical conclusion

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`include_conclusion`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#include_conclusion)

#### Defined in

main.ts:173978

***

### meta\_keywords?

> `optional` **meta\_keywords**: `string`[]

keywords for the content to generate
optional field
can contain up to 10 terms;
learn more about this parameter on our help center
example: "meta_keywords": ["iPhone","sell","CEO"]

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`meta_keywords`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#meta_keywords)

#### Defined in

main.ts:173967

***

### sub\_topics?

> `optional` **sub\_topics**: `string`[]

secondary topics of the content to generate
optional field
secondary topics for generating content;
can contain up to 10 terms;
example: "sub_topics": ["Apple","Pixar","Amazing Products"]

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`sub_topics`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#sub_topics)

#### Defined in

main.ts:173956

***

### supplement\_token?

> `optional` **supplement\_token**: `string`

token for generating subsequent results
optional field
provided in the identical filed of the response to each request;
you can use this parameter to continue the generation of text from the initial response
supplement_token values are unique for each subsequent task

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`supplement_token`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#supplement_token)

#### Defined in

main.ts:173984

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`tag`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#tag)

#### Defined in

main.ts:173990

***

### topic?

> `optional` **topic**: `string`

main topic of the content to generate
required field
main topic for generating content;
can contain from 1 to 50 tokens

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`topic`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#topic)

#### Defined in

main.ts:173945

***

### word\_count?

> `optional` **word\_count**: `number`

number of words in content
required field
the number of tokens in the generated text;
can take values from 1 to 1000

#### Implementation of

[`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[`word_count`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#word_count)

#### Defined in

main.ts:173950

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:174003

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:174036

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)

#### Defined in

main.ts:174029
