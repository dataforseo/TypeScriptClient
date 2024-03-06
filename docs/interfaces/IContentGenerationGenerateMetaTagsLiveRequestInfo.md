[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IContentGenerationGenerateMetaTagsLiveRequestInfo

# Interface: IContentGenerationGenerateMetaTagsLiveRequestInfo

## Implemented by

- [`ContentGenerationGenerateMetaTagsLiveRequestInfo`](../classes/ContentGenerationGenerateMetaTagsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [creativity\_index](IContentGenerationGenerateMetaTagsLiveRequestInfo.md#creativity_index)
- [tag](IContentGenerationGenerateMetaTagsLiveRequestInfo.md#tag)
- [text](IContentGenerationGenerateMetaTagsLiveRequestInfo.md#text)

## Properties

### creativity\_index

• `Optional` **creativity\_index**: `number`

creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1;
default value: 0.8
learn more about this parameter on our help center

#### Defined in

[main.ts:160646](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160646)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:160652](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160652)

___


### text

• `Optional` **text**: `string`

initial target text
required field
text input for generating content;
can contain from 1 to 500 tokens
learn more about tokens on our help center

#### Defined in

[main.ts:160639](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160639)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")