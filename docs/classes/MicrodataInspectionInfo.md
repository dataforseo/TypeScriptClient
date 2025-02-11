[**Documentation**](../README.md)

***

[Documentation](../README.md) / MicrodataInspectionInfo

# Class: MicrodataInspectionInfo

Defined in: main.ts:171970

## Implements

- [`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MicrodataInspectionInfo()

> **new MicrodataInspectionInfo**(`data`?): [`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

Defined in: main.ts:171980

#### Parameters

##### data?

[`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md)

#### Returns

[`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

## Properties

### fields?

> `optional` **fields**: [`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)[]

Defined in: main.ts:171976

microdata fields
an array of objects containing data fields related to the certain microdata type

#### Implementation of

[`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md).[`fields`](../interfaces/IMicrodataInspectionInfo.md#fields)

***

### types?

> `optional` **types**: `string`[]

Defined in: main.ts:171973

parent microdata types
for a full list of available types, please visit schema.org

#### Implementation of

[`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md).[`types`](../interfaces/IMicrodataInspectionInfo.md#types)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:171989

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:172015

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

Defined in: main.ts:172008

#### Parameters

##### data

`any`

#### Returns

[`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)
