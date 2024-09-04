[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksCompetitorsLiveItem

# Class: BacklinksCompetitorsLiveItem

## Implements

- [`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksCompetitorsLiveItem()

> **new BacklinksCompetitorsLiveItem**(`data`?): [`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md)

#### Returns

[`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

#### Defined in

main.ts:145743

## Properties

### intersections?

> `optional` **intersections**: `number`

indicates the number of backlink intersections with the target specified in the POST array

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`intersections`](../interfaces/IBacklinksCompetitorsLiveItem.md#intersections)

#### Defined in

main.ts:145739

***

### rank?

> `optional` **rank**: `number`

domain rank
domain rank across all domains in the database
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`rank`](../interfaces/IBacklinksCompetitorsLiveItem.md#rank)

#### Defined in

main.ts:145737

***

### target?

> `optional` **target**: `string`

competitor domain

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`target`](../interfaces/IBacklinksCompetitorsLiveItem.md#target)

#### Defined in

main.ts:145732

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`type`](../interfaces/IBacklinksCompetitorsLiveItem.md#type)

#### Defined in

main.ts:145730

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:145752

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:145772

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksCompetitorsLiveItem`](BacklinksCompetitorsLiveItem.md)

#### Defined in

main.ts:145765
