**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PeriodCovered

# Class: PeriodCovered

## Implements

- [`IPeriodCovered`](../interfaces/IPeriodCovered.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PeriodCovered(data)

> **new PeriodCovered**(`data`?): [`PeriodCovered`](PeriodCovered.md)

#### Parameters

• **data?**: [`IPeriodCovered`](../interfaces/IPeriodCovered.md)

#### Returns

[`PeriodCovered`](PeriodCovered.md)

#### Source

main.ts:55041

## Properties

### displayed\_date?

> **`optional`** **displayed\_date**: `string`

period displayed in SERP
example:
Mar 2, 2020 - Dec 9, 2022

#### Implementation of

[`IPeriodCovered`](../interfaces/IPeriodCovered.md).[`displayed_date`](../interfaces/IPeriodCovered.md#displayed_date)

#### Source

main.ts:55037

***

### end\_date?

> **`optional`** **end\_date**: `string`

date and time when the period ends
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-12-09 02:00:00 +00:00

#### Implementation of

[`IPeriodCovered`](../interfaces/IPeriodCovered.md).[`end_date`](../interfaces/IPeriodCovered.md#end_date)

#### Source

main.ts:55033

***

### start\_date?

> **`optional`** **start\_date**: `string`

date and time when the period starts
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2020-03-02 02:00:00 +00:00

#### Implementation of

[`IPeriodCovered`](../interfaces/IPeriodCovered.md).[`start_date`](../interfaces/IPeriodCovered.md#start_date)

#### Source

main.ts:55028

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:55050

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:55069

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PeriodCovered`](PeriodCovered.md)

#### Parameters

• **data**: `any`

#### Returns

[`PeriodCovered`](PeriodCovered.md)

#### Source

main.ts:55062
