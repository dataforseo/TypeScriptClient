**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksCompetitorsLiveItem

# Class: BacklinksCompetitorsLiveItem

## Implements

- [`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksCompetitorsLiveItem(data)

> **new BacklinksCompetitorsLiveItem**(`data`?): [`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md)

#### Returns

[`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

#### Source

main.ts:143894

## Properties

### intersections?

> **`optional`** **intersections**: `number`

indicates the number of backlink intersections with the target specified in the POST array

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`intersections`](../interfaces/IBacklinksCompetitorsLiveItem.md#intersections)

#### Source

main.ts:143890

***

### rank?

> **`optional`** **rank**: `number`

domain rank
domain rank across all domains in the database
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`rank`](../interfaces/IBacklinksCompetitorsLiveItem.md#rank)

#### Source

main.ts:143888

***

### target?

> **`optional`** **target**: `string`

competitor domain

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`target`](../interfaces/IBacklinksCompetitorsLiveItem.md#target)

#### Source

main.ts:143883

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`type`](../interfaces/IBacklinksCompetitorsLiveItem.md#type)

#### Source

main.ts:143881

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:143903

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:143923

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

#### Source

main.ts:143916
