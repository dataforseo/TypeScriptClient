[**Documentation**](../README.md)

***

[Documentation](../README.md) / DatasetDescription

# Class: DatasetDescription

Defined in: main.ts:57806

## Implements

- [`IDatasetDescription`](../interfaces/IDatasetDescription.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DatasetDescription()

> **new DatasetDescription**(`data`?): [`DatasetDescription`](DatasetDescription.md)

Defined in: main.ts:57814

#### Parameters

##### data?

[`IDatasetDescription`](../interfaces/IDatasetDescription.md)

#### Returns

[`DatasetDescription`](DatasetDescription.md)

## Properties

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:57810

links featured in the ‘dataset_description’

#### Implementation of

[`IDatasetDescription`](../interfaces/IDatasetDescription.md).[`links`](../interfaces/IDatasetDescription.md#links)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:57808

text of the description

#### Implementation of

[`IDatasetDescription`](../interfaces/IDatasetDescription.md).[`text`](../interfaces/IDatasetDescription.md#text)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:57823

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:57845

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DatasetDescription`](DatasetDescription.md)

Defined in: main.ts:57838

#### Parameters

##### data

`any`

#### Returns

[`DatasetDescription`](DatasetDescription.md)
