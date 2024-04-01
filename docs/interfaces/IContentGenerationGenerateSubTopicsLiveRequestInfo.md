[Documentation](../README.md) / [Exports](../modules.md) / IContentGenerationGenerateSubTopicsLiveRequestInfo

# Interface: IContentGenerationGenerateSubTopicsLiveRequestInfo

## Implemented by

- [`ContentGenerationGenerateSubTopicsLiveRequestInfo`](../classes/ContentGenerationGenerateSubTopicsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [creativity\_index](IContentGenerationGenerateSubTopicsLiveRequestInfo.md#creativity_index)
- [tag](IContentGenerationGenerateSubTopicsLiveRequestInfo.md#tag)
- [topic](IContentGenerationGenerateSubTopicsLiveRequestInfo.md#topic)

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

main.ts:166343

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:166349

___

### topic

• `Optional` **topic**: `string`

main topic of the content to generate
required field
main topic for content generation;
can contain from 1 to 50 tokens

#### Defined in

main.ts:166336
