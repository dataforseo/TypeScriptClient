**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordKpiInfo

# Class: KeywordKpiInfo

## Implements

- [`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordKpiInfo(data)

> **new KeywordKpiInfo**(`data`?): [`KeywordKpiInfo`](KeywordKpiInfo.md)

#### Parameters

• **data?**: [`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md)

#### Returns

[`KeywordKpiInfo`](KeywordKpiInfo.md)

#### Source

main.ts:133789

## Properties

### ad\_position?

> **`optional`** **ad\_position**: `string`

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

#### Implementation of

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md).[`ad_position`](../interfaces/IKeywordKpiInfo.md#ad_position)

#### Source

main.ts:133768

***

### average\_bid?

> **`optional`** **average\_bid**: `number`

average bid of the keyword

#### Implementation of

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md).[`average_bid`](../interfaces/IKeywordKpiInfo.md#average_bid)

#### Source

main.ts:133785

***

### average\_cpc?

> **`optional`** **average\_cpc**: `number`

average cost per click, USD
calculated by dividing the cost of all clicks by the number of clicks

#### Implementation of

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md).[`average_cpc`](../interfaces/IKeywordKpiInfo.md#average_cpc)

#### Source

main.ts:133777

***

### clicks?

> **`optional`** **clicks**: `number`

ad clicks
the number of clicks that the keyword and match type generated during the last month

#### Implementation of

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md).[`clicks`](../interfaces/IKeywordKpiInfo.md#clicks)

#### Source

main.ts:133771

***

### ctr?

> **`optional`** **ctr**: `number`

click-through rate as a percentage
calculated by dividing the number of clicks by the number of impressions and multiplying the result by 100

#### Implementation of

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md).[`ctr`](../interfaces/IKeywordKpiInfo.md#ctr)

#### Source

main.ts:133780

***

### impressions?

> **`optional`** **impressions**: `number`

ad impressions
the number of impressions that the keyword and match type generated during the last month

#### Implementation of

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md).[`impressions`](../interfaces/IKeywordKpiInfo.md#impressions)

#### Source

main.ts:133774

***

### total\_cost?

> **`optional`** **total\_cost**: `number`

total cost of an ad, USD
the cost of using the specified keyword and match type during the last month

#### Implementation of

[`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md).[`total_cost`](../interfaces/IKeywordKpiInfo.md#total_cost)

#### Source

main.ts:133783

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:133798

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:133821

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordKpiInfo`](KeywordKpiInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordKpiInfo`](KeywordKpiInfo.md)

#### Source

main.ts:133814
