[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentGenerationGenerateTextLiveRequestInfo

# Interface: IContentGenerationGenerateTextLiveRequestInfo

Defined in: main.ts:182045

## Indexable

\[`key`: `string`\]: `any`

## Properties

### creativity\_index?

> `optional` **creativity\_index**: `number`

Defined in: main.ts:182079

creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:182066

meta description of the content to generate
optional field
can contain from 1 to 1000 tokens
learn more about this parameter on our help center

***

### include\_conclusion?

> `optional` **include\_conclusion**: `boolean`

Defined in: main.ts:182083

include conclusion in generated text
optional field
if set to true, generated content will include a logical conclusion

***

### meta\_keywords?

> `optional` **meta\_keywords**: `string`[]

Defined in: main.ts:182072

keywords for the content to generate
optional field
can contain up to 10 terms;
learn more about this parameter on our help center
example: "meta_keywords": ["iPhone","sell","CEO"]

***

### sub\_topics?

> `optional` **sub\_topics**: `string`[]

Defined in: main.ts:182061

secondary topics of the content to generate
optional field
secondary topics for generating content;
can contain up to 10 terms;
example: "sub_topics": ["Apple","Pixar","Amazing Products"]

***

### supplement\_token?

> `optional` **supplement\_token**: `string`

Defined in: main.ts:182089

token for generating subsequent results
optional field
provided in the identical filed of the response to each request;
you can use this parameter to continue the generation of text from the initial response
supplement_token values are unique for each subsequent task

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:182095

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### topic?

> `optional` **topic**: `string`

Defined in: main.ts:182050

main topic of the content to generate
required field
main topic for generating content;
can contain from 1 to 50 tokens

***

### word\_count?

> `optional` **word\_count**: `number`

Defined in: main.ts:182055

number of words in content
required field
the number of tokens in the generated text;
can take values from 1 to 1000
