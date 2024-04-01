[Documentation](../README.md) / [Exports](../modules.md) / IIndexHistory

# Interface: IIndexHistory

## Implemented by

- [`IndexHistory`](../classes/IndexHistory.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date](IIndexHistory.md#date)
- [total\_backlinks](IIndexHistory.md#total_backlinks)
- [total\_domains](IIndexHistory.md#total_domains)
- [total\_pages](IIndexHistory.md#total_pages)

## Properties

### date

• `Optional` **date**: `string`

date for which index volume data is provided
in the UTC format: “yyyy-mm-dd”
example:
2021-10-01

#### Defined in

main.ts:134367

___

### total\_backlinks

• `Optional` **total\_backlinks**: `number`

total number of backlinks our database contained on the given date

#### Defined in

main.ts:134369

___

### total\_domains

• `Optional` **total\_domains**: `number`

total number of domains our database contained on the given date

#### Defined in

main.ts:134373

___

### total\_pages

• `Optional` **total\_pages**: `number`

total number of pages our database contained on the given date

#### Defined in

main.ts:134371
