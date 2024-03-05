[dataforseo-client](../README.md) / [Exports](../modules.md) / IContentGenerationGenerateLiveRequestInfo

# Interface: IContentGenerationGenerateLiveRequestInfo

## Implemented by

- [`ContentGenerationGenerateLiveRequestInfo`](../classes/ContentGenerationGenerateLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [avoid\_starting\_words](IContentGenerationGenerateLiveRequestInfo.md#avoid_starting_words)
- [avoid\_words](IContentGenerationGenerateLiveRequestInfo.md#avoid_words)
- [creativity\_index](IContentGenerationGenerateLiveRequestInfo.md#creativity_index)
- [max\_new\_tokens](IContentGenerationGenerateLiveRequestInfo.md#max_new_tokens)
- [max\_tokens](IContentGenerationGenerateLiveRequestInfo.md#max_tokens)
- [stop\_words](IContentGenerationGenerateLiveRequestInfo.md#stop_words)
- [supplement\_token](IContentGenerationGenerateLiveRequestInfo.md#supplement_token)
- [tag](IContentGenerationGenerateLiveRequestInfo.md#tag)
- [temperature](IContentGenerationGenerateLiveRequestInfo.md#temperature)
- [text](IContentGenerationGenerateLiveRequestInfo.md#text)
- [token\_repetition\_penalty](IContentGenerationGenerateLiveRequestInfo.md#token_repetition_penalty)
- [top\_k](IContentGenerationGenerateLiveRequestInfo.md#top_k)
- [top\_p](IContentGenerationGenerateLiveRequestInfo.md#top_p)

## Properties

### avoid\_starting\_words

• `Optional` **avoid\_starting\_words**: `string`[]

words or phrases to avoid in the beginning of the generated text
optional field
you can specify up to 50 terms;
example:
["SEO", "search engine optimization"]

#### Defined in

[main.ts:159992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159992)

___

### avoid\_words

• `Optional` **avoid\_words**: `string`[]

words or phrases to avoid when generating a text
optional field
you can specify up to 50 terms;
example:
["term", "optimization"]

#### Defined in

[main.ts:159986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159986)

___

### creativity\_index

• `Optional` **creativity\_index**: `number`

creativity of content generation
optional field
if you use this field, you don’t need to use top_k / top_p / temperature
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center

#### Defined in

[main.ts:159949](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159949)

___

### max\_new\_tokens

• `Optional` **max\_new\_tokens**: `number`

generation limit for new tokens
required field if max_tokens is not specified
the maximum number of new tokens for generated content;
maximum value: 300;
Note: the number does not include tokens specified in the text field;
learn more about this parameter on our help center

#### Defined in

[main.ts:159934](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159934)

___

### max\_tokens

• `Optional` **max\_tokens**: `number`

generation limit for all tokens
required field if max_new_tokens is not specified
the maximum total number of tokens for generated content;
maximum value: 1024;
Note: the number includes tokens specified in the text field
learn more about this parameter on our help center

#### Defined in

[main.ts:159941](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159941)

___

### stop\_words

• `Optional` **stop\_words**: `string`[]

words or phrases to end the text
optional field
you can specify up to 50 terms;
example:
["now","subscribe"]

#### Defined in

[main.ts:159998](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159998)

___

### supplement\_token

• `Optional` **supplement\_token**: `string`

token for generating subsequent results
optional field
provided in the identical filed of the response to each request;
you can use this parameter to continue the generation of text from the initial response
supplement_token values are unique for each subsequent task

#### Defined in

[main.ts:160004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160004)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:160010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160010)

___

### temperature

• `Optional` **temperature**: `number`

controls the randomness in the output
optional field
if you use creativity_index, this field will be ignored
the lower the temperature, the more likely the model will choose words with a higher probability of occurrence;
can take values from 0 to 1;
default value: 0.7
learn more about this parameter on our help center

#### Defined in

[main.ts:159980](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159980)

___

### text

• `Optional` **text**: `string`

initial target text
required field
text input for content generation;
can contain from 1 to 500 tokens
learn more about tokens on our help center

#### Defined in

[main.ts:159927](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159927)

___

### token\_repetition\_penalty

• `Optional` **token\_repetition\_penalty**: `number`

token repetition
optional field
limits the repetition of the same tokens in the generated content;
can take values from 0.5 to 2;
default value: 1

#### Defined in

[main.ts:159955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159955)

___

### top\_k

• `Optional` **top\_k**: `number`

the number of initial tokens in each iteration for choosing a subsequent word
optional field
if you use creativity_index, this field will be ignored
the higher the number, the more high-probability tokens will be shortlisted for generation;
can take values from 1 to 100;
default value: 40
learn more about this parameter on our help center

#### Defined in

[main.ts:159963](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159963)

___

### top\_p

• `Optional` **top\_p**: `number`

excludes initial tokens with probability lower than one
optional field
if you use creativity_index, this field will be ignored
the higher the value, the less low-probability tokens may be shortlisted for generation;
can take values from 0 to 1
default value: 0.9
Note:if both top_k and top_p are used, top_k acts first;
learn more about this parameter on our help center

#### Defined in

[main.ts:159972](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159972)
