[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationGenerateMetaTagsLiveRequestInfo

# Class: ContentGenerationGenerateMetaTagsLiveRequestInfo

## Implements

- [`IContentGenerationGenerateMetaTagsLiveRequestInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationGenerateMetaTagsLiveRequestInfo()

> **new ContentGenerationGenerateMetaTagsLiveRequestInfo**(`data`?): [`ContentGenerationGenerateMetaTagsLiveRequestInfo`](ContentGenerationGenerateMetaTagsLiveRequestInfo.md)

#### Parameters

##### data?

[`IContentGenerationGenerateMetaTagsLiveRequestInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md)

#### Returns

[`ContentGenerationGenerateMetaTagsLiveRequestInfo`](ContentGenerationGenerateMetaTagsLiveRequestInfo.md)

#### Defined in

main.ts:181881

## Properties

### creativity\_index?

> `optional` **creativity\_index**: `number`

creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1;
default value: 0.8
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationGenerateMetaTagsLiveRequestInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md).[`creativity_index`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md#creativity_index)

#### Defined in

main.ts:181871

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentGenerationGenerateMetaTagsLiveRequestInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md).[`tag`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md#tag)

#### Defined in

main.ts:181877

***

### text?

> `optional` **text**: `string`

initial target text
required field
text input for generating content;
can contain from 1 to 500 tokens
learn more about tokens on our help center

#### Implementation of

[`IContentGenerationGenerateMetaTagsLiveRequestInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md).[`text`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md#text)

#### Defined in

main.ts:181864

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:181890

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:181909

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationGenerateMetaTagsLiveRequestInfo`](ContentGenerationGenerateMetaTagsLiveRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationGenerateMetaTagsLiveRequestInfo`](ContentGenerationGenerateMetaTagsLiveRequestInfo.md)

#### Defined in

main.ts:181902
