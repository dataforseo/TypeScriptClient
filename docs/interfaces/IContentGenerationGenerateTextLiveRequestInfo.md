[Documentation](../README.md) / [Exports](../modules.md) / IContentGenerationGenerateTextLiveRequestInfo

# Interface: IContentGenerationGenerateTextLiveRequestInfo

## Implemented by

- [`ContentGenerationGenerateTextLiveRequestInfo`](../classes/ContentGenerationGenerateTextLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [creativity\_index](IContentGenerationGenerateTextLiveRequestInfo.md#creativity_index)
- [description](IContentGenerationGenerateTextLiveRequestInfo.md#description)
- [include\_conclusion](IContentGenerationGenerateTextLiveRequestInfo.md#include_conclusion)
- [meta\_keywords](IContentGenerationGenerateTextLiveRequestInfo.md#meta_keywords)
- [sub\_topics](IContentGenerationGenerateTextLiveRequestInfo.md#sub_topics)
- [supplement\_token](IContentGenerationGenerateTextLiveRequestInfo.md#supplement_token)
- [tag](IContentGenerationGenerateTextLiveRequestInfo.md#tag)
- [topic](IContentGenerationGenerateTextLiveRequestInfo.md#topic)
- [word\_count](IContentGenerationGenerateTextLiveRequestInfo.md#word_count)

## Properties

### creativity\_index

• `Optional` **creativity\_index**: `number`

creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center

#### Defined in

main.ts:160480

___

### description

• `Optional` **description**: `string`

meta description of the content to generate
optional field
can contain from 1 to 1000 tokens
learn more about this parameter on our help center

#### Defined in

main.ts:160467

___

### include\_conclusion

• `Optional` **include\_conclusion**: `boolean`

include conclusion in generated text
optional field
if set to true, generated content will include a logical conclusion

#### Defined in

main.ts:160484

___

### meta\_keywords

• `Optional` **meta\_keywords**: `string`[]

keywords for the content to generate
optional field
can contain up to 10 terms;
learn more about this parameter on our help center
example: "meta_keywords": ["iPhone","sell","CEO"]

#### Defined in

main.ts:160473

___

### sub\_topics

• `Optional` **sub\_topics**: `string`[]

secondary topics of the content to generate
optional field
secondary topics for generating content;
can contain up to 10 terms;
example: "sub_topics": ["Apple","Pixar","Amazing Products"]

#### Defined in

main.ts:160462

___

### supplement\_token

• `Optional` **supplement\_token**: `string`

token for generating subsequent results
optional field
provided in the identical filed of the response to each request;
you can use this parameter to continue the generation of text from the initial response
supplement_token values are unique for each subsequent task

#### Defined in

main.ts:160490

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:160496

___

### topic

• `Optional` **topic**: `string`

main topic of the content to generate
required field
main topic for generating content;
can contain from 1 to 50 tokens

#### Defined in

main.ts:160451

___

### word\_count

• `Optional` **word\_count**: `number`

number of words in content
required field
the number of tokens in the generated text;
can take values from 1 to 1000

#### Defined in

main.ts:160456
