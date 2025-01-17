[**Documentation**](../README.md)

***

[Documentation](../README.md) / AvailibleVersions

# Class: AvailibleVersions

Defined in: main.ts:175196

## Implements

- [`IAvailibleVersions`](../interfaces/IAvailibleVersions.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AvailibleVersions()

> **new AvailibleVersions**(`data`?): [`AvailibleVersions`](AvailibleVersions.md)

Defined in: main.ts:175205

#### Parameters

##### data?

[`IAvailibleVersions`](../interfaces/IAvailibleVersions.md)

#### Returns

[`AvailibleVersions`](AvailibleVersions.md)

## Properties

### default?

> `optional` **default**: `boolean`

Defined in: main.ts:175201

the version is used by default
if false, the version is not used by default and should be specified in the corresponding field of the POST request if necessary

#### Implementation of

[`IAvailibleVersions`](../interfaces/IAvailibleVersions.md).[`default`](../interfaces/IAvailibleVersions.md#default)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:175198

lighthouse version

#### Implementation of

[`IAvailibleVersions`](../interfaces/IAvailibleVersions.md).[`version`](../interfaces/IAvailibleVersions.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:175214

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:175232

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AvailibleVersions`](AvailibleVersions.md)

Defined in: main.ts:175225

#### Parameters

##### data

`any`

#### Returns

[`AvailibleVersions`](AvailibleVersions.md)
