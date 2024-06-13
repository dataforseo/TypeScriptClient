**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IContentGenerationGenerateLiveRequestInfo

# Interface: IContentGenerationGenerateLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### avoid\_starting\_words?

> **`optional`** **avoid\_starting\_words**: `string`[]

words or phrases to avoid in the beginning of the generated text
optional field
you can specify up to 50 terms;
example:
["SEO", "search engine optimization"]

#### Source

main.ts:168086

***

### avoid\_words?

> **`optional`** **avoid\_words**: `string`[]

words or phrases to avoid when generating a text
optional field
you can specify up to 50 terms;
example:
["term", "optimization"]

#### Source

main.ts:168080

***

### creativity\_index?

> **`optional`** **creativity\_index**: `number`

creativity of content generation
optional field
if you use this field, you don’t need to use top_k / top_p / temperature
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center

#### Source

main.ts:168043

***

### max\_new\_tokens?

> **`optional`** **max\_new\_tokens**: `number`

generation limit for new tokens
required field if max_tokens is not specified
the maximum number of new tokens for generated content;
maximum value: 300;
Note: the number does not include tokens specified in the text field;
learn more about this parameter on our help center

#### Source

main.ts:168028

***

### max\_tokens?

> **`optional`** **max\_tokens**: `number`

generation limit for all tokens
required field if max_new_tokens is not specified
the maximum total number of tokens for generated content;
maximum value: 1024;
Note: the number includes tokens specified in the text field
learn more about this parameter on our help center

#### Source

main.ts:168035

***

### stop\_words?

> **`optional`** **stop\_words**: `string`[]

words or phrases to end the text
optional field
you can specify up to 50 terms;
example:
["now","subscribe"]

#### Source

main.ts:168092

***

### supplement\_token?

> **`optional`** **supplement\_token**: `string`

token for generating subsequent results
optional field
provided in the identical filed of the response to each request;
you can use this parameter to continue the generation of text from the initial response
supplement_token values are unique for each subsequent task

#### Source

main.ts:168098

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:168104

***

### temperature?

> **`optional`** **temperature**: `number`

controls the randomness in the output
optional field
if you use creativity_index, this field will be ignored
the lower the temperature, the more likely the model will choose words with a higher probability of occurrence;
can take values from 0 to 1;
default value: 0.7
learn more about this parameter on our help center

#### Source

main.ts:168074

***

### text?

> **`optional`** **text**: `string`

initial target text
required field
text input for content generation;
can contain from 1 to 500 tokens
learn more about tokens on our help center

#### Source

main.ts:168021

***

### token\_repetition\_penalty?

> **`optional`** **token\_repetition\_penalty**: `number`

token repetition
optional field
limits the repetition of the same tokens in the generated content;
can take values from 0.5 to 2;
default value: 1

#### Source

main.ts:168049

***

### top\_k?

> **`optional`** **top\_k**: `number`

the number of initial tokens in each iteration for choosing a subsequent word
optional field
if you use creativity_index, this field will be ignored
the higher the number, the more high-probability tokens will be shortlisted for generation;
can take values from 1 to 100;
default value: 40
learn more about this parameter on our help center

#### Source

main.ts:168057

***

### top\_p?

> **`optional`** **top\_p**: `number`

excludes initial tokens with probability lower than one
optional field
if you use creativity_index, this field will be ignored
the higher the value, the less low-probability tokens may be shortlisted for generation;
can take values from 0 to 1
default value: 0.9
Note:if both top_k and top_p are used, top_k acts first;
learn more about this parameter on our help center

#### Source

main.ts:168066
