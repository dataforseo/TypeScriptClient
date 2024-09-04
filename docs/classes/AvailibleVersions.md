[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AvailibleVersions

# Class: AvailibleVersions

## Implements

- [`IAvailibleVersions`](../interfaces/IAvailibleVersions.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AvailibleVersions()

> **new AvailibleVersions**(`data`?): [`AvailibleVersions`](AvailibleVersions.md)

#### Parameters

• **data?**: [`IAvailibleVersions`](../interfaces/IAvailibleVersions.md)

#### Returns

[`AvailibleVersions`](AvailibleVersions.md)

#### Defined in

main.ts:167585

## Properties

### default?

> `optional` **default**: `boolean`

the version is used by default
if false, the version is not used by default and should be specified in the corresponding field of the POST request if necessary

#### Implementation of

[`IAvailibleVersions`](../interfaces/IAvailibleVersions.md).[`default`](../interfaces/IAvailibleVersions.md#default)

#### Defined in

main.ts:167581

***

### version?

> `optional` **version**: `string`

lighthouse version

#### Implementation of

[`IAvailibleVersions`](../interfaces/IAvailibleVersions.md).[`version`](../interfaces/IAvailibleVersions.md#version)

#### Defined in

main.ts:167578

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:167594

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:167612

***

### fromJS()

> `static` **fromJS**(`data`): [`AvailibleVersions`](AvailibleVersions.md)

#### Parameters

• **data**: `any`

#### Returns

[`AvailibleVersions`](AvailibleVersions.md)

#### Defined in

main.ts:167605
