**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AvailibleVersions

# Class: AvailibleVersions

## Implements

- [`IAvailibleVersions`](../interfaces/IAvailibleVersions.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AvailibleVersions(data)

> **new AvailibleVersions**(`data`?): [`AvailibleVersions`](AvailibleVersions.md)

#### Parameters

• **data?**: [`IAvailibleVersions`](../interfaces/IAvailibleVersions.md)

#### Returns

[`AvailibleVersions`](AvailibleVersions.md)

#### Source

main.ts:161725

## Properties

### default?

> **`optional`** **default**: `boolean`

the version is used by default
if false, the version is not used by default and should be specified in the corresponding field of the POST request if necessary

#### Implementation of

[`IAvailibleVersions`](../interfaces/IAvailibleVersions.md).[`default`](../interfaces/IAvailibleVersions.md#default)

#### Source

main.ts:161721

***

### version?

> **`optional`** **version**: `string`

lighthouse version

#### Implementation of

[`IAvailibleVersions`](../interfaces/IAvailibleVersions.md).[`version`](../interfaces/IAvailibleVersions.md#version)

#### Source

main.ts:161718

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:161734

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:161752

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AvailibleVersions`](AvailibleVersions.md)

#### Parameters

• **data**: `any`

#### Returns

[`AvailibleVersions`](AvailibleVersions.md)

#### Source

main.ts:161745
