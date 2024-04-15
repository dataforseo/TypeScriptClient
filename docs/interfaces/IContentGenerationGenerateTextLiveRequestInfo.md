**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IContentGenerationGenerateTextLiveRequestInfo

# Interface: IContentGenerationGenerateTextLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### creativity\_index?

> **`optional`** **creativity\_index**: `number`

creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center

#### Source

main.ts:165945

***

### description?

> **`optional`** **description**: `string`

meta description of the content to generate
optional field
can contain from 1 to 1000 tokens
learn more about this parameter on our help center

#### Source

main.ts:165932

***

### include\_conclusion?

> **`optional`** **include\_conclusion**: `boolean`

include conclusion in generated text
optional field
if set to true, generated content will include a logical conclusion

#### Source

main.ts:165949

***

### meta\_keywords?

> **`optional`** **meta\_keywords**: `string`[]

keywords for the content to generate
optional field
can contain up to 10 terms;
learn more about this parameter on our help center
example: "meta_keywords": ["iPhone","sell","CEO"]

#### Source

main.ts:165938

***

### sub\_topics?

> **`optional`** **sub\_topics**: `string`[]

secondary topics of the content to generate
optional field
secondary topics for generating content;
can contain up to 10 terms;
example: "sub_topics": ["Apple","Pixar","Amazing Products"]

#### Source

main.ts:165927

***

### supplement\_token?

> **`optional`** **supplement\_token**: `string`

token for generating subsequent results
optional field
provided in the identical filed of the response to each request;
you can use this parameter to continue the generation of text from the initial response
supplement_token values are unique for each subsequent task

#### Source

main.ts:165955

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:165961

***

### topic?

> **`optional`** **topic**: `string`

main topic of the content to generate
required field
main topic for generating content;
can contain from 1 to 50 tokens

#### Source

main.ts:165916

***

### word\_count?

> **`optional`** **word\_count**: `number`

number of words in content
required field
the number of tokens in the generated text;
can take values from 1 to 1000

#### Source

main.ts:165921
