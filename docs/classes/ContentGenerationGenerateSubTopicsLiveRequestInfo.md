**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentGenerationGenerateSubTopicsLiveRequestInfo

# Class: ContentGenerationGenerateSubTopicsLiveRequestInfo

## Implements

- [`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationGenerateSubTopicsLiveRequestInfo(data)

> **new ContentGenerationGenerateSubTopicsLiveRequestInfo**(`data`?): [`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Returns

[`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Source

main.ts:166448

## Properties

### creativity\_index?

> **`optional`** **creativity\_index**: `number`

creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md).[`creativity_index`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md#creativity_index)

#### Source

main.ts:166438

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md).[`tag`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md#tag)

#### Source

main.ts:166444

***

### topic?

> **`optional`** **topic**: `string`

main topic of the content to generate
required field
main topic for content generation;
can contain from 1 to 50 tokens

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md).[`topic`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md#topic)

#### Source

main.ts:166431

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:166457

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:166476

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Source

main.ts:166469
