**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DatasetDescription

# Class: DatasetDescription

## Implements

- [`IDatasetDescription`](../interfaces/IDatasetDescription.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DatasetDescription(data)

> **new DatasetDescription**(`data`?): [`DatasetDescription`](DatasetDescription.md)

#### Parameters

• **data?**: [`IDatasetDescription`](../interfaces/IDatasetDescription.md)

#### Returns

[`DatasetDescription`](DatasetDescription.md)

#### Source

main.ts:54552

## Properties

### links?

> **`optional`** **links**: [`LinkElement`](LinkElement.md)[]

links featured in the ‘dataset_description’

#### Implementation of

[`IDatasetDescription`](../interfaces/IDatasetDescription.md).[`links`](../interfaces/IDatasetDescription.md#links)

#### Source

main.ts:54548

***

### text?

> **`optional`** **text**: `string`

text of the description

#### Implementation of

[`IDatasetDescription`](../interfaces/IDatasetDescription.md).[`text`](../interfaces/IDatasetDescription.md#text)

#### Source

main.ts:54546

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:54561

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:54583

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DatasetDescription`](DatasetDescription.md)

#### Parameters

• **data**: `any`

#### Returns

[`DatasetDescription`](DatasetDescription.md)

#### Source

main.ts:54576
