[Documentation](../README.md) / [Exports](../modules.md) / IPeriodCovered

# Interface: IPeriodCovered

## Implemented by

- [`PeriodCovered`](../classes/PeriodCovered.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [displayed\_date](IPeriodCovered.md#displayed_date)
- [end\_date](IPeriodCovered.md#end_date)
- [start\_date](IPeriodCovered.md#start_date)

## Properties

### displayed\_date

• `Optional` **displayed\_date**: `string`

period displayed in SERP
example:
Mar 2, 2020 - Dec 9, 2022

#### Defined in

main.ts:53140

___

### end\_date

• `Optional` **end\_date**: `string`

date and time when the period ends
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-12-09 02:00:00 +00:00

#### Defined in

main.ts:53136

___

### start\_date

• `Optional` **start\_date**: `string`

date and time when the period starts
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2020-03-02 02:00:00 +00:00

#### Defined in

main.ts:53131
