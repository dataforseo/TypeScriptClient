[**Documentation**](../README.md)

***

[Documentation](../README.md) / ResourceMetaInfo

# Class: ResourceMetaInfo

Defined in: main.ts:167806

## Implements

- [`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ResourceMetaInfo()

> **new ResourceMetaInfo**(`data`?): [`ResourceMetaInfo`](ResourceMetaInfo.md)

Defined in: main.ts:167823

#### Parameters

##### data?

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md)

#### Returns

[`ResourceMetaInfo`](ResourceMetaInfo.md)

## Properties

### alternative\_text?

> `optional` **alternative\_text**: `string`

Defined in: main.ts:167809

content of the image alt attribute
the value depends on the resource_type

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`alternative_text`](../interfaces/IResourceMetaInfo.md#alternative_text)

***

### height?

> `optional` **height**: `number`

Defined in: main.ts:167819

image height in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`height`](../interfaces/IResourceMetaInfo.md#height)

***

### original\_height?

> `optional` **original\_height**: `number`

Defined in: main.ts:167815

original image height in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`original_height`](../interfaces/IResourceMetaInfo.md#original_height)

***

### original\_width?

> `optional` **original\_width**: `number`

Defined in: main.ts:167813

original image width in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`original_width`](../interfaces/IResourceMetaInfo.md#original_width)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:167811

title

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`title`](../interfaces/IResourceMetaInfo.md#title)

***

### width?

> `optional` **width**: `number`

Defined in: main.ts:167817

image width in px

#### Implementation of

[`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md).[`width`](../interfaces/IResourceMetaInfo.md#width)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:167832

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:167854

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ResourceMetaInfo`](ResourceMetaInfo.md)

Defined in: main.ts:167847

#### Parameters

##### data

`any`

#### Returns

[`ResourceMetaInfo`](ResourceMetaInfo.md)
