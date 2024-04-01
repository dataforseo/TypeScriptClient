[Documentation](../README.md) / [Exports](../modules.md) / IAvgBacklinksInfo

# Interface: IAvgBacklinksInfo

## Implemented by

- [`AvgBacklinksInfo`](../classes/AvgBacklinksInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks](IAvgBacklinksInfo.md#backlinks)
- [dofollow](IAvgBacklinksInfo.md#dofollow)
- [last\_updated\_time](IAvgBacklinksInfo.md#last_updated_time)
- [main\_domain\_rank](IAvgBacklinksInfo.md#main_domain_rank)
- [rank](IAvgBacklinksInfo.md#rank)
- [referring\_domains](IAvgBacklinksInfo.md#referring_domains)
- [referring\_main\_domains](IAvgBacklinksInfo.md#referring_main_domains)
- [referring\_pages](IAvgBacklinksInfo.md#referring_pages)
- [se\_type](IAvgBacklinksInfo.md#se_type)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

average number of backlinks

#### Defined in

main.ts:81895

___

### dofollow

• `Optional` **dofollow**: `number`

average number of dofollow links

#### Defined in

main.ts:81897

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when backlink data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:81914

___

### main\_domain\_rank

• `Optional` **main\_domain\_rank**: `number`

average main domain rank
learn more about the metric and its calculation formula in this help center article

#### Defined in

main.ts:81909

___

### rank

• `Optional` **rank**: `number`

average rank
learn more about the metric and its calculation formula in this help center article

#### Defined in

main.ts:81906

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

average number of referring domains

#### Defined in

main.ts:81901

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

average number of referring main domains

#### Defined in

main.ts:81903

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

average number of referring pages

#### Defined in

main.ts:81899

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:81893
