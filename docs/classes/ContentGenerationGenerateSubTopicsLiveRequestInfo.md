[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationGenerateSubTopicsLiveRequestInfo

# Class: ContentGenerationGenerateSubTopicsLiveRequestInfo

## Implements

- [`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationGenerateSubTopicsLiveRequestInfo()

> **new ContentGenerationGenerateSubTopicsLiveRequestInfo**(`data`?): [`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Parameters

##### data?

[`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Returns

[`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Defined in

main.ts:182152

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

[`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md).[`creativity_index`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md#creativity_index)

#### Defined in

main.ts:182142

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md).[`tag`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md#tag)

#### Defined in

main.ts:182148

***

### topic?

> `optional` **topic**: `string`

main topic of the content to generate
required field
main topic for content generation;
can contain from 1 to 50 tokens

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md).[`topic`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md#topic)

#### Defined in

main.ts:182135

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:182161

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:182180

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Defined in

main.ts:182173
