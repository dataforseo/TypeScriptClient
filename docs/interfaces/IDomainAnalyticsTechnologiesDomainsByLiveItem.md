[Documentation](../README.md) / [Exports](../modules.md) / IDomainAnalyticsTechnologiesDomainsByLiveItem

# Interface: IDomainAnalyticsTechnologiesDomainsByLiveItem

items array

## Implemented by

- [`DomainAnalyticsTechnologiesDomainsByLiveItem`](../classes/DomainAnalyticsTechnologiesDomainsByLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [content\_language\_code](IDomainAnalyticsTechnologiesDomainsByLiveItem.md#content_language_code)
- [country\_iso\_code](IDomainAnalyticsTechnologiesDomainsByLiveItem.md#country_iso_code)
- [description](IDomainAnalyticsTechnologiesDomainsByLiveItem.md#description)
- [domain](IDomainAnalyticsTechnologiesDomainsByLiveItem.md#domain)
- [domain\_rank](IDomainAnalyticsTechnologiesDomainsByLiveItem.md#domain_rank)
- [emails](IDomainAnalyticsTechnologiesDomainsByLiveItem.md#emails)
- [language\_code](IDomainAnalyticsTechnologiesDomainsByLiveItem.md#language_code)
- [last\_visited](IDomainAnalyticsTechnologiesDomainsByLiveItem.md#last_visited)
- [meta\_keywords](IDomainAnalyticsTechnologiesDomainsByLiveItem.md#meta_keywords)
- [phone\_numbers](IDomainAnalyticsTechnologiesDomainsByLiveItem.md#phone_numbers)
- [social\_graph\_urls](IDomainAnalyticsTechnologiesDomainsByLiveItem.md#social_graph_urls)
- [technologies](IDomainAnalyticsTechnologiesDomainsByLiveItem.md#technologies)
- [title](IDomainAnalyticsTechnologiesDomainsByLiveItem.md#title)
- [type](IDomainAnalyticsTechnologiesDomainsByLiveItem.md#type)

## Properties

### content\_language\_code

• `Optional` **content\_language\_code**: `string`

content language
code of the language that content on the target domain is written with

#### Defined in

main.ts:76779

___

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

domain ISO code
ISO code of the country that target domain is determined to belong to

#### Defined in

main.ts:76773

___

### description

• `Optional` **description**: `string`

domain meta description

#### Defined in

main.ts:76760

___

### domain

• `Optional` **domain**: `string`

specified domain name

#### Defined in

main.ts:76756

___

### domain\_rank

• `Optional` **domain\_rank**: `string`

backlink rank of the target domain
learn more about the metric and how it is calculated in this help center article

#### Defined in

main.ts:76765

___

### emails

• `Optional` **emails**: `string`[]

emails of the target
emails indicated on the target website

#### Defined in

main.ts:76785

___

### language\_code

• `Optional` **language\_code**: `string`

domain language
code of the language that target domain is determined to be associated with

#### Defined in

main.ts:76776

___

### last\_visited

• `Optional` **last\_visited**: `string`

most recent date when our crawler visited the domain
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-10-10 12:57:46 +00:00

#### Defined in

main.ts:76770

___

### meta\_keywords

• `Optional` **meta\_keywords**: `string`[]

domain meta keywords

#### Defined in

main.ts:76762

___

### phone\_numbers

• `Optional` **phone\_numbers**: `string`[]

phone numbers of the target
contact phone numbers indicated on the target website

#### Defined in

main.ts:76782

___

### social\_graph\_urls

• `Optional` **social\_graph\_urls**: `string`[]

social media links and handles
social media URLs detected in the social graphs of the target website

#### Defined in

main.ts:76788

___

### technologies

• `Optional` **technologies**: [`TechnologiesInfo`](../classes/TechnologiesInfo.md)

technologies used by target domain
contains objects with the names of technologies used on the website;
to get a full list of technologies and their structure, refer to the technologies endpoint

#### Defined in

main.ts:76792

___

### title

• `Optional` **title**: `string`

domain meta title

#### Defined in

main.ts:76758

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:76754
