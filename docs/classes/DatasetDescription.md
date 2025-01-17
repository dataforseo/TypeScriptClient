[**Documentation**](../README.md)

***

[Documentation](../README.md) / DatasetDescription

# Class: DatasetDescription

Defined in: main.ts:57790

## Implements

- [`IDatasetDescription`](../interfaces/IDatasetDescription.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DatasetDescription()

> **new DatasetDescription**(`data`?): [`DatasetDescription`](DatasetDescription.md)

Defined in: main.ts:57798

#### Parameters

##### data?

[`IDatasetDescription`](../interfaces/IDatasetDescription.md)

#### Returns

[`DatasetDescription`](DatasetDescription.md)

## Properties

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:57794

links featured in the ‘dataset_description’

#### Implementation of

[`IDatasetDescription`](../interfaces/IDatasetDescription.md).[`links`](../interfaces/IDatasetDescription.md#links)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:57792

text of the description

#### Implementation of

[`IDatasetDescription`](../interfaces/IDatasetDescription.md).[`text`](../interfaces/IDatasetDescription.md#text)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:57807

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:57829

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DatasetDescription`](DatasetDescription.md)

Defined in: main.ts:57822

#### Parameters

##### data

`any`

#### Returns

[`DatasetDescription`](DatasetDescription.md)
