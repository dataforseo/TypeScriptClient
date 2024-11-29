[**Documentation**](../README.md)

***

[Documentation](../README.md) / ResourceMetaInfo

# Class: ResourceMetaInfo

## Implements

- [`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ResourceMetaInfo()

> **new ResourceMetaInfo**(`data`?): [`ResourceMetaInfo`](ResourceMetaInfo.md)

#### Parameters

##### data?

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md)

#### Returns

[`ResourceMetaInfo`](ResourceMetaInfo.md)

#### Defined in

main.ts:167755

## Properties

### alternative\_text?

> `optional` **alternative\_text**: `string`

content of the image alt attribute
the value depends on the resource_type

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`alternative_text`](../interfaces/IResourceMetaInfo.md#alternative_text)

#### Defined in

main.ts:167741

***

### height?

> `optional` **height**: `number`

image height in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`height`](../interfaces/IResourceMetaInfo.md#height)

#### Defined in

main.ts:167751

***

### original\_height?

> `optional` **original\_height**: `number`

original image height in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`original_height`](../interfaces/IResourceMetaInfo.md#original_height)

#### Defined in

main.ts:167747

***

### original\_width?

> `optional` **original\_width**: `number`

original image width in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`original_width`](../interfaces/IResourceMetaInfo.md#original_width)

#### Defined in

main.ts:167745

***

### title?

> `optional` **title**: `string`

title

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`title`](../interfaces/IResourceMetaInfo.md#title)

#### Defined in

main.ts:167743

***

### width?

> `optional` **width**: `number`

image width in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`width`](../interfaces/IResourceMetaInfo.md#width)

#### Defined in

main.ts:167749

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:167764

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:167786

***

### fromJS()

> `static` **fromJS**(`data`): [`ResourceMetaInfo`](ResourceMetaInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`ResourceMetaInfo`](ResourceMetaInfo.md)

#### Defined in

main.ts:167779
