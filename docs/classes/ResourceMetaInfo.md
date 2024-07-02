**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ResourceMetaInfo

# Class: ResourceMetaInfo

## Implements

- [`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ResourceMetaInfo(data)

> **new ResourceMetaInfo**(`data`?): [`ResourceMetaInfo`](ResourceMetaInfo.md)

#### Parameters

• **data?**: [`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md)

#### Returns

[`ResourceMetaInfo`](ResourceMetaInfo.md)

#### Source

main.ts:154640

## Properties

### alternative\_text?

> **`optional`** **alternative\_text**: `string`

content of the image alt attribute
the value depends on the resource_type

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`alternative_text`](../interfaces/IResourceMetaInfo.md#alternative_text)

#### Source

main.ts:154626

***

### height?

> **`optional`** **height**: `number`

image height in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`height`](../interfaces/IResourceMetaInfo.md#height)

#### Source

main.ts:154636

***

### original\_height?

> **`optional`** **original\_height**: `number`

original image height in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`original_height`](../interfaces/IResourceMetaInfo.md#original_height)

#### Source

main.ts:154632

***

### original\_width?

> **`optional`** **original\_width**: `number`

original image width in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`original_width`](../interfaces/IResourceMetaInfo.md#original_width)

#### Source

main.ts:154630

***

### title?

> **`optional`** **title**: `string`

title

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`title`](../interfaces/IResourceMetaInfo.md#title)

#### Source

main.ts:154628

***

### width?

> **`optional`** **width**: `number`

image width in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`width`](../interfaces/IResourceMetaInfo.md#width)

#### Source

main.ts:154634

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:154649

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:154671

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ResourceMetaInfo`](ResourceMetaInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ResourceMetaInfo`](ResourceMetaInfo.md)

#### Source

main.ts:154664
