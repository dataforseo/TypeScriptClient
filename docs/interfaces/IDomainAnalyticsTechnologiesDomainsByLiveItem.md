[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDomainAnalyticsTechnologiesDomainsByLiveItem

# Interface: IDomainAnalyticsTechnologiesDomainsByLiveItem

items array

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### content\_language\_code?

> `optional` **content\_language\_code**: `string`

content language
code of the language that content on the target domain is written with

#### Defined in

main.ts:78159

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

domain ISO code
ISO code of the country that target domain is determined to belong to

#### Defined in

main.ts:78153

***

### description?

> `optional` **description**: `string`

domain meta description

#### Defined in

main.ts:78140

***

### domain?

> `optional` **domain**: `string`

specified domain name

#### Defined in

main.ts:78136

***

### domain\_rank?

> `optional` **domain\_rank**: `string`

backlink rank of the target domain
learn more about the metric and how it is calculated in this help center article

#### Defined in

main.ts:78145

***

### emails?

> `optional` **emails**: `string`[]

emails of the target
emails indicated on the target website

#### Defined in

main.ts:78165

***

### language\_code?

> `optional` **language\_code**: `string`

domain language
code of the language that target domain is determined to be associated with

#### Defined in

main.ts:78156

***

### last\_visited?

> `optional` **last\_visited**: `string`

most recent date when our crawler visited the domain
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-10-10 12:57:46 +00:00

#### Defined in

main.ts:78150

***

### meta\_keywords?

> `optional` **meta\_keywords**: `string`[]

domain meta keywords

#### Defined in

main.ts:78142

***

### phone\_numbers?

> `optional` **phone\_numbers**: `string`[]

phone numbers of the target
contact phone numbers indicated on the target website

#### Defined in

main.ts:78162

***

### social\_graph\_urls?

> `optional` **social\_graph\_urls**: `string`[]

social media links and handles
social media URLs detected in the social graphs of the target website

#### Defined in

main.ts:78168

***

### technologies?

> `optional` **technologies**: [`TechnologiesInfo`](../classes/TechnologiesInfo.md)

technologies used by target domain
contains objects with the names of technologies used on the website;
to get a full list of technologies and their structure, refer to the technologies endpoint

#### Defined in

main.ts:78172

***

### title?

> `optional` **title**: `string`

domain meta title

#### Defined in

main.ts:78138

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:78134
