[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / PeriodCovered

# Class: PeriodCovered

## Implements

- [`IPeriodCovered`](../interfaces/IPeriodCovered.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PeriodCovered()

> **new PeriodCovered**(`data`?): [`PeriodCovered`](PeriodCovered.md)

#### Parameters

• **data?**: [`IPeriodCovered`](../interfaces/IPeriodCovered.md)

#### Returns

[`PeriodCovered`](PeriodCovered.md)

#### Defined in

main.ts:54036

## Properties

### displayed\_date?

> `optional` **displayed\_date**: `string`

period displayed in SERP
example:
Mar 2, 2020 - Dec 9, 2022

#### Implementation of

[`IPeriodCovered`](../interfaces/IPeriodCovered.md).[`displayed_date`](../interfaces/IPeriodCovered.md#displayed_date)

#### Defined in

main.ts:54032

***

### end\_date?

> `optional` **end\_date**: `string`

date and time when the period ends
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-12-09 02:00:00 +00:00

#### Implementation of

[`IPeriodCovered`](../interfaces/IPeriodCovered.md).[`end_date`](../interfaces/IPeriodCovered.md#end_date)

#### Defined in

main.ts:54028

***

### start\_date?

> `optional` **start\_date**: `string`

date and time when the period starts
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2020-03-02 02:00:00 +00:00

#### Implementation of

[`IPeriodCovered`](../interfaces/IPeriodCovered.md).[`start_date`](../interfaces/IPeriodCovered.md#start_date)

#### Defined in

main.ts:54023

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:54045

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:54064

***

### fromJS()

> `static` **fromJS**(`data`): [`PeriodCovered`](PeriodCovered.md)

#### Parameters

• **data**: `any`

#### Returns

[`PeriodCovered`](PeriodCovered.md)

#### Defined in

main.ts:54057
