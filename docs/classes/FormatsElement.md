[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / FormatsElement

# Class: FormatsElement

## Implements

- [`IFormatsElement`](../interfaces/IFormatsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FormatsElement()

> **new FormatsElement**(`data`?): [`FormatsElement`](FormatsElement.md)

#### Parameters

• **data?**: [`IFormatsElement`](../interfaces/IFormatsElement.md)

#### Returns

[`FormatsElement`](FormatsElement.md)

#### Defined in

main.ts:53897

## Properties

### format?

> `optional` **format**: `string`

type of file format of the dataset
for example: zip, html, csv

#### Implementation of

[`IFormatsElement`](../interfaces/IFormatsElement.md).[`format`](../interfaces/IFormatsElement.md#format)

#### Defined in

main.ts:53891

***

### size?

> `optional` **size**: `string`

file size in bytes

#### Implementation of

[`IFormatsElement`](../interfaces/IFormatsElement.md).[`size`](../interfaces/IFormatsElement.md#size)

#### Defined in

main.ts:53893

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IFormatsElement`](../interfaces/IFormatsElement.md).[`type`](../interfaces/IFormatsElement.md#type)

#### Defined in

main.ts:53888

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:53906

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:53925

***

### fromJS()

> `static` **fromJS**(`data`): [`FormatsElement`](FormatsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`FormatsElement`](FormatsElement.md)

#### Defined in

main.ts:53918
