[**Documentation**](../README.md)

***

[Documentation](../README.md) / MicrodataInspectionInfo

# Class: MicrodataInspectionInfo

## Implements

- [`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MicrodataInspectionInfo()

> **new MicrodataInspectionInfo**(`data`?): [`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

#### Parameters

##### data?

[`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md)

#### Returns

[`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

#### Defined in

main.ts:171748

## Properties

### fields?

> `optional` **fields**: [`MicrodataFieldsInfo`](MicrodataFieldsInfo.md)[]

microdata fields
an array of objects containing data fields related to the certain microdata type

#### Implementation of

[`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md).[`fields`](../interfaces/IMicrodataInspectionInfo.md#fields)

#### Defined in

main.ts:171744

***

### types?

> `optional` **types**: `string`[]

parent microdata types
for a full list of available types, please visit schema.org

#### Implementation of

[`IMicrodataInspectionInfo`](../interfaces/IMicrodataInspectionInfo.md).[`types`](../interfaces/IMicrodataInspectionInfo.md#types)

#### Defined in

main.ts:171741

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:171757

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:171783

***

### fromJS()

> `static` **fromJS**(`data`): [`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`MicrodataInspectionInfo`](MicrodataInspectionInfo.md)

#### Defined in

main.ts:171776
