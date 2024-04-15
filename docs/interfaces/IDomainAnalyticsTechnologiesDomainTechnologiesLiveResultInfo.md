**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo

# Interface: IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### content\_language\_code?

> **`optional`** **content\_language\_code**: `string`

content language
code of the language that content on the target domain is written in

#### Source

main.ts:77677

***

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

domain ISO code
ISO code of the country that the target domain is determined to belong to

#### Source

main.ts:77671

***

### description?

> **`optional`** **description**: `string`

domain meta description

#### Source

main.ts:77658

***

### domain?

> **`optional`** **domain**: `string`

specified domain name

#### Source

main.ts:77654

***

### domain\_rank?

> **`optional`** **domain\_rank**: `string`

backlink rank of the target domain
learn more about the metric and how it is calculated in this help center article

#### Source

main.ts:77663

***

### emails?

> **`optional`** **emails**: `string`[]

emails of the target
emails indicated on the target website

#### Source

main.ts:77683

***

### language\_code?

> **`optional`** **language\_code**: `string`

domain language
code of the language that the target domain is determined to be associated with

#### Source

main.ts:77674

***

### last\_visited?

> **`optional`** **last\_visited**: `string`

most recent date when our crawler visited the domain
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-10-10 12:57:46 +00:00

#### Source

main.ts:77668

***

### meta\_keywords?

> **`optional`** **meta\_keywords**: `string`[]

domain meta keywords

#### Source

main.ts:77660

***

### phone\_numbers?

> **`optional`** **phone\_numbers**: `string`[]

phone numbers of the target
contact phone numbers indicated on the target website

#### Source

main.ts:77680

***

### social\_graph\_urls?

> **`optional`** **social\_graph\_urls**: `string`[]

social media links and handles
social media URLs detected in the social graphs of the target website

#### Source

main.ts:77686

***

### technologies?

> **`optional`** **technologies**: [`TechnologiesInfo`](../classes/TechnologiesInfo.md)

technologies used by target domain
contains objects with the names of technologies used on the website
see the full list of available technologies structured by groups and categories

#### Source

main.ts:77690

***

### title?

> **`optional`** **title**: `string`

domain meta title

#### Source

main.ts:77656

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:77652
