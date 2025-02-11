[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksCompetitorsLiveItem

# Class: BacklinksCompetitorsLiveItem

Defined in: main.ts:157198

## Implements

- [`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksCompetitorsLiveItem()

> **new BacklinksCompetitorsLiveItem**(`data`?): [`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

Defined in: main.ts:157213

#### Parameters

##### data?

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md)

#### Returns

[`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

## Properties

### intersections?

> `optional` **intersections**: `number`

Defined in: main.ts:157209

indicates the number of backlink intersections with the target specified in the POST array

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`intersections`](../interfaces/IBacklinksCompetitorsLiveItem.md#intersections)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:157207

domain rank
domain rank across all domains in the database
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`rank`](../interfaces/IBacklinksCompetitorsLiveItem.md#rank)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:157202

competitor domain

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`target`](../interfaces/IBacklinksCompetitorsLiveItem.md#target)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:157200

type of element

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`type`](../interfaces/IBacklinksCompetitorsLiveItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:157222

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:157242

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

Defined in: main.ts:157235

#### Parameters

##### data

`any`

#### Returns

[`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)
