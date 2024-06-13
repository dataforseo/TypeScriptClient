**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentGenerationParaphraseLiveRequestInfo

# Class: ContentGenerationParaphraseLiveRequestInfo

## Implements

- [`IContentGenerationParaphraseLiveRequestInfo`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationParaphraseLiveRequestInfo(data)

> **new ContentGenerationParaphraseLiveRequestInfo**(`data`?): [`ContentGenerationParaphraseLiveRequestInfo`](ContentGenerationParaphraseLiveRequestInfo.md)

#### Parameters

• **data?**: [`IContentGenerationParaphraseLiveRequestInfo`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md)

#### Returns

[`ContentGenerationParaphraseLiveRequestInfo`](ContentGenerationParaphraseLiveRequestInfo.md)

#### Source

main.ts:169229

## Properties

### creativity\_index?

> **`optional`** **creativity\_index**: `number`

creativity of content generation
required field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1;
default value: 0.8
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationParaphraseLiveRequestInfo`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md).[`creativity_index`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md#creativity_index)

#### Source

main.ts:169219

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentGenerationParaphraseLiveRequestInfo`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md).[`tag`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md#tag)

#### Source

main.ts:169225

***

### text?

> **`optional`** **text**: `string`

target text
required field
can contain from 1 to 500 tokens
learn more about tokens on our help center

#### Implementation of

[`IContentGenerationParaphraseLiveRequestInfo`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md).[`text`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md#text)

#### Source

main.ts:169212

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:169238

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:169257

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentGenerationParaphraseLiveRequestInfo`](ContentGenerationParaphraseLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentGenerationParaphraseLiveRequestInfo`](ContentGenerationParaphraseLiveRequestInfo.md)

#### Source

main.ts:169250
