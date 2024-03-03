[Documentation](../README.md) / [Exports](../modules.md) / IKeywordKpiInfo

# Interface: IKeywordKpiInfo

## Implemented by

- [`KeywordKpiInfo`](../classes/KeywordKpiInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [ad\_position](IKeywordKpiInfo.md#ad_position)
- [average\_bid](IKeywordKpiInfo.md#average_bid)
- [average\_cpc](IKeywordKpiInfo.md#average_cpc)
- [clicks](IKeywordKpiInfo.md#clicks)
- [ctr](IKeywordKpiInfo.md#ctr)
- [impressions](IKeywordKpiInfo.md#impressions)
- [total\_cost](IKeywordKpiInfo.md#total_cost)

## Properties

### ad\_position

• `Optional` **ad\_position**: `string`

represents the position of the relevant ad in SERP
can take the following values:
FirstPage1: The first ad to appear on the right side of the first search results page
FirstPage2: The second ad to appear on the right side of the first search results page
FirstPage3: The third ad to appear on the right side of the first search results page
FirstPage4: The fourth ad to appear on the right side of the first search results page
FirstPage5: The fifth ad to appear on the right side of the first search results page
FirstPage6: The sixth ad to appear on the right side of the first search results page
FirstPage7: The seventh ad to appear on the right side of the first search results page
FirstPage8: The eighth ad to appear on the right side of the first search results page
FirstPage9: The ninth ad to appear on the right side of the first search results page
FirstPage10: The tenth ad to appear on the right side of the first search results page
MainLine1: The first ad to appear at the top of the search results page
MainLine2: The second ad to appear at the top of the search results page
MainLine3: The third ad to appear at the top of the search results page
MainLine4: The fourth ad to appear at the top of the search results page

#### Defined in

main.ts:127369

___

### average\_bid

• `Optional` **average\_bid**: `number`

average bid of the keyword

#### Defined in

main.ts:127386

___

### average\_cpc

• `Optional` **average\_cpc**: `number`

average cost per click, USD
calculated by dividing the cost of all clicks by the number of clicks

#### Defined in

main.ts:127378

___

### clicks

• `Optional` **clicks**: `number`

ad clicks
the number of clicks that the keyword and match type generated during the last month

#### Defined in

main.ts:127372

___

### ctr

• `Optional` **ctr**: `number`

click-through rate as a percentage
calculated by dividing the number of clicks by the number of impressions and multiplying the result by 100

#### Defined in

main.ts:127381

___

### impressions

• `Optional` **impressions**: `number`

ad impressions
the number of impressions that the keyword and match type generated during the last month

#### Defined in

main.ts:127375

___

### total\_cost

• `Optional` **total\_cost**: `number`

total cost of an ad, USD
the cost of using the specified keyword and match type during the last month

#### Defined in

main.ts:127384
