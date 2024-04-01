[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksInfo

# Interface: IBacklinksInfo

## Implemented by

- [`BacklinksInfo`](../classes/BacklinksInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks](IBacklinksInfo.md#backlinks)
- [dofollow](IBacklinksInfo.md#dofollow)
- [referring\_domains](IBacklinksInfo.md#referring_domains)
- [referring\_main\_domains](IBacklinksInfo.md#referring_main_domains)
- [referring\_pages](IBacklinksInfo.md#referring_pages)
- [time\_update](IBacklinksInfo.md#time_update)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

total number of backlinks
the total number of backlinks, including dofollow and nofollow links

#### Defined in

main.ts:78439

___

### dofollow

• `Optional` **dofollow**: `number`

number of dofollow links

#### Defined in

main.ts:78436

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

number of referring domains

#### Defined in

main.ts:78430

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

number of referring main domains

#### Defined in

main.ts:78432

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

number of referring pages

#### Defined in

main.ts:78434

___

### time\_update

• `Optional` **time\_update**: `string`

date and time when backlink data was updated
in the UTC format: "yyyy-mm-dd hh-mm-ss +00:00"
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:78444
