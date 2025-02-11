[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentGenerationParaphraseLiveRequestInfo

# Interface: IContentGenerationParaphraseLiveRequestInfo

Defined in: main.ts:182895

## Indexable

\[`key`: `string`\]: `any`

## Properties

### creativity\_index?

> `optional` **creativity\_index**: `number`

Defined in: main.ts:182907

creativity of content generation
required field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1;
default value: 0.8
learn more about this parameter on our help center

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:182913

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:182900

target text
required field
can contain from 1 to 500 tokens
learn more about tokens on our help center
