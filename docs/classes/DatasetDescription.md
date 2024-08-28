[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DatasetDescription

# Class: DatasetDescription

## Implements

- [`IDatasetDescription`](../interfaces/IDatasetDescription.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DatasetDescription()

> **new DatasetDescription**(`data`?): [`DatasetDescription`](DatasetDescription.md)

#### Parameters

• **data?**: [`IDatasetDescription`](../interfaces/IDatasetDescription.md)

#### Returns

[`DatasetDescription`](DatasetDescription.md)

#### Defined in

main.ts:55641

## Properties

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

links featured in the ‘dataset_description’

#### Implementation of

[`IDatasetDescription`](../interfaces/IDatasetDescription.md).[`links`](../interfaces/IDatasetDescription.md#links)

#### Defined in

main.ts:55637

***

### text?

> `optional` **text**: `string`

text of the description

#### Implementation of

[`IDatasetDescription`](../interfaces/IDatasetDescription.md).[`text`](../interfaces/IDatasetDescription.md#text)

#### Defined in

main.ts:55635

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:55650

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:55672

***

### fromJS()

> `static` **fromJS**(`data`): [`DatasetDescription`](DatasetDescription.md)

#### Parameters

• **data**: `any`

#### Returns

[`DatasetDescription`](DatasetDescription.md)

#### Defined in

main.ts:55665
