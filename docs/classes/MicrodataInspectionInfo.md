[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MicrodataInspectionInfo

# Class: MicrodataInspectionInfo

## Implements

- [`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MicrodataInspectionInfo()

> **new MicrodataInspectionInfo**(`data`?): [`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

#### Parameters

• **data?**: [`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md)

#### Returns

[`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

#### Defined in

main.ts:160072

## Properties

### fields?

> `optional` **fields**: [`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)[]

microdata fields
an array of objects containing data fields related to the certain microdata type

#### Implementation of

[`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md).[`fields`](../interfaces/IMicrodataInspectionInfo.md#fields)

#### Defined in

main.ts:160068

***

### types?

> `optional` **types**: `string`[]

parent microdata types
for a full list of available types, please visit schema.org

#### Implementation of

[`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md).[`types`](../interfaces/IMicrodataInspectionInfo.md#types)

#### Defined in

main.ts:160065

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:160081

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:160107

***

### fromJS()

> `static` **fromJS**(`data`): [`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

#### Defined in

main.ts:160100
