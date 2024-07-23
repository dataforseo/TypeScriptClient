**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / FormatsElement

# Class: FormatsElement

## Implements

- [`IFormatsElement`](../interfaces/IFormatsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FormatsElement(data)

> **new FormatsElement**(`data`?): [`FormatsElement`](FormatsElement.md)

#### Parameters

• **data?**: [`IFormatsElement`](../interfaces/IFormatsElement.md)

#### Returns

[`FormatsElement`](FormatsElement.md)

#### Source

main.ts:54902

## Properties

### format?

> **`optional`** **format**: `string`

type of file format of the dataset
for example: zip, html, csv

#### Implementation of

[`IFormatsElement`](../interfaces/IFormatsElement.md).[`format`](../interfaces/IFormatsElement.md#format)

#### Source

main.ts:54896

***

### size?

> **`optional`** **size**: `string`

file size in bytes

#### Implementation of

[`IFormatsElement`](../interfaces/IFormatsElement.md).[`size`](../interfaces/IFormatsElement.md#size)

#### Source

main.ts:54898

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IFormatsElement`](../interfaces/IFormatsElement.md).[`type`](../interfaces/IFormatsElement.md#type)

#### Source

main.ts:54893

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:54911

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:54930

***

### fromJS()

> **`static`** **fromJS**(`data`): [`FormatsElement`](FormatsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`FormatsElement`](FormatsElement.md)

#### Source

main.ts:54923
