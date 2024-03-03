[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsSerpCompetitorsLiveItem

# Interface: IDataforseoLabsSerpCompetitorsLiveItem

## Implemented by

- [`DataforseoLabsSerpCompetitorsLiveItem`](../classes/DataforseoLabsSerpCompetitorsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [avg\_position](IDataforseoLabsSerpCompetitorsLiveItem.md#avg_position)
- [domain](IDataforseoLabsSerpCompetitorsLiveItem.md#domain)
- [etv](IDataforseoLabsSerpCompetitorsLiveItem.md#etv)
- [keywords\_count](IDataforseoLabsSerpCompetitorsLiveItem.md#keywords_count)
- [keywords\_positions](IDataforseoLabsSerpCompetitorsLiveItem.md#keywords_positions)
- [median\_position](IDataforseoLabsSerpCompetitorsLiveItem.md#median_position)
- [rating](IDataforseoLabsSerpCompetitorsLiveItem.md#rating)
- [relevant\_serp\_items](IDataforseoLabsSerpCompetitorsLiveItem.md#relevant_serp_items)
- [se\_type](IDataforseoLabsSerpCompetitorsLiveItem.md#se_type)
- [visibility](IDataforseoLabsSerpCompetitorsLiveItem.md#visibility)

## Properties

### avg\_position

• `Optional` **avg\_position**: `number`

the average position of the domain for the specified keywords
the arithmetic mean of values in the keywords_positions array

#### Defined in

main.ts:87901

___

### domain

• `Optional` **domain**: `string`

domain name of the detected SERP competitor

#### Defined in

main.ts:87898

___

### etv

• `Optional` **etv**: `number`

estimated traffic volume
represents the estimated monthly traffic that specified keywords are driving to the website
calculated as the sum of the products of the specified keywords’ search volume values and CTR (click-through-rate) rates at certain positions in SERP
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:87913

___

### keywords\_count

• `Optional` **keywords\_count**: `number`

the number of specified keywords the domain has positions for in SERPs

#### Defined in

main.ts:87915

___

### keywords\_positions

• `Optional` **keywords\_positions**: `Object`

keyword positions
SERP positions the related domain holds in SERP for the specified keywords

#### Index signature

▪ [key: `string`]: `number`[]

#### Defined in

main.ts:87927

___

### median\_position

• `Optional` **median\_position**: `number`

the median position of the domain for the specified keywords
the median of the values in the keywords_positions array

#### Defined in

main.ts:87904

___

### rating

• `Optional` **rating**: `number`

the margin between the greatest possible and actual keyword positions
represents the relative visibility rate of the domain in SERP for the specified keywords
calculated as sum(100-keywords_positions)

#### Defined in

main.ts:87908

___

### relevant\_serp\_items

• `Optional` **relevant\_serp\_items**: `number`

the number of SERP elements relevant to the domain
represents the number of search results in SERP relevant to the domain for the specified keywords

#### Defined in

main.ts:87924

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:87896

___

### visibility

• `Optional` **visibility**: `number`

SERP visibility rate
represents the website visibility rate based on the SERP positions of the specified keywords
Keywords with positions in the range from 1 to 10 are assigned the visibility index from 1 to 0.1, respectively
Keywords with positions in the range from 11 to 20 have the fixed visibility index of 0.05
keywords with positions from 20 to 100 have the visibility index equal to 0

#### Defined in

main.ts:87921
