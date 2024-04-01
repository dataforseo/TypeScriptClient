[Documentation](../README.md) / [Exports](../modules.md) / IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo

# Interface: IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo

## Implemented by

- [`DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../classes/DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [content\_language\_code](IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#content_language_code)
- [country\_iso\_code](IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#country_iso_code)
- [description](IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#description)
- [domain](IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#domain)
- [domain\_rank](IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#domain_rank)
- [emails](IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#emails)
- [language\_code](IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#language_code)
- [last\_visited](IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#last_visited)
- [meta\_keywords](IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#meta_keywords)
- [phone\_numbers](IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#phone_numbers)
- [social\_graph\_urls](IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#social_graph_urls)
- [technologies](IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#technologies)
- [title](IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#title)
- [type](IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#type)

## Properties

### content\_language\_code

• `Optional` **content\_language\_code**: `string`

content language
code of the language that content on the target domain is written in

#### Defined in

main.ts:77657

___

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

domain ISO code
ISO code of the country that the target domain is determined to belong to

#### Defined in

main.ts:77651

___

### description

• `Optional` **description**: `string`

domain meta description

#### Defined in

main.ts:77638

___

### domain

• `Optional` **domain**: `string`

specified domain name

#### Defined in

main.ts:77634

___

### domain\_rank

• `Optional` **domain\_rank**: `string`

backlink rank of the target domain
learn more about the metric and how it is calculated in this help center article

#### Defined in

main.ts:77643

___

### emails

• `Optional` **emails**: `string`[]

emails of the target
emails indicated on the target website

#### Defined in

main.ts:77663

___

### language\_code

• `Optional` **language\_code**: `string`

domain language
code of the language that the target domain is determined to be associated with

#### Defined in

main.ts:77654

___

### last\_visited

• `Optional` **last\_visited**: `string`

most recent date when our crawler visited the domain
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-10-10 12:57:46 +00:00

#### Defined in

main.ts:77648

___

### meta\_keywords

• `Optional` **meta\_keywords**: `string`[]

domain meta keywords

#### Defined in

main.ts:77640

___

### phone\_numbers

• `Optional` **phone\_numbers**: `string`[]

phone numbers of the target
contact phone numbers indicated on the target website

#### Defined in

main.ts:77660

___

### social\_graph\_urls

• `Optional` **social\_graph\_urls**: `string`[]

social media links and handles
social media URLs detected in the social graphs of the target website

#### Defined in

main.ts:77666

___

### technologies

• `Optional` **technologies**: [`TechnologiesInfo`](../classes/TechnologiesInfo.md)

technologies used by target domain
contains objects with the names of technologies used on the website
see the full list of available technologies structured by groups and categories

#### Defined in

main.ts:77670

___

### title

• `Optional` **title**: `string`

domain meta title

#### Defined in

main.ts:77636

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:77632
