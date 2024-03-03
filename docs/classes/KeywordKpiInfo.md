[Documentation](../README.md) / [Exports](../modules.md) / KeywordKpiInfo

# Class: KeywordKpiInfo

## Implements

- [`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordKpiInfo.md#constructor)

### Properties

- [ad\_position](KeywordKpiInfo.md#ad_position)
- [average\_bid](KeywordKpiInfo.md#average_bid)
- [average\_cpc](KeywordKpiInfo.md#average_cpc)
- [clicks](KeywordKpiInfo.md#clicks)
- [ctr](KeywordKpiInfo.md#ctr)
- [impressions](KeywordKpiInfo.md#impressions)
- [total\_cost](KeywordKpiInfo.md#total_cost)

### Methods

- [init](KeywordKpiInfo.md#init)
- [toJSON](KeywordKpiInfo.md#tojson)
- [fromJS](KeywordKpiInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordKpiInfo**(`data?`): [`KeywordKpiInfo`](KeywordKpiInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordKpiInfo`](../interfaces/IKeywordKpiInfo.md) |

#### Returns

[`KeywordKpiInfo`](KeywordKpiInfo.md)

#### Defined in

main.ts:127303

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

#### Implementation of

[IKeywordKpiInfo](../interfaces/IKeywordKpiInfo.md).[ad_position](../interfaces/IKeywordKpiInfo.md#ad_position)

#### Defined in

main.ts:127282

___

### average\_bid

• `Optional` **average\_bid**: `number`

average bid of the keyword

#### Implementation of

[IKeywordKpiInfo](../interfaces/IKeywordKpiInfo.md).[average_bid](../interfaces/IKeywordKpiInfo.md#average_bid)

#### Defined in

main.ts:127299

___

### average\_cpc

• `Optional` **average\_cpc**: `number`

average cost per click, USD
calculated by dividing the cost of all clicks by the number of clicks

#### Implementation of

[IKeywordKpiInfo](../interfaces/IKeywordKpiInfo.md).[average_cpc](../interfaces/IKeywordKpiInfo.md#average_cpc)

#### Defined in

main.ts:127291

___

### clicks

• `Optional` **clicks**: `number`

ad clicks
the number of clicks that the keyword and match type generated during the last month

#### Implementation of

[IKeywordKpiInfo](../interfaces/IKeywordKpiInfo.md).[clicks](../interfaces/IKeywordKpiInfo.md#clicks)

#### Defined in

main.ts:127285

___

### ctr

• `Optional` **ctr**: `number`

click-through rate as a percentage
calculated by dividing the number of clicks by the number of impressions and multiplying the result by 100

#### Implementation of

[IKeywordKpiInfo](../interfaces/IKeywordKpiInfo.md).[ctr](../interfaces/IKeywordKpiInfo.md#ctr)

#### Defined in

main.ts:127294

___

### impressions

• `Optional` **impressions**: `number`

ad impressions
the number of impressions that the keyword and match type generated during the last month

#### Implementation of

[IKeywordKpiInfo](../interfaces/IKeywordKpiInfo.md).[impressions](../interfaces/IKeywordKpiInfo.md#impressions)

#### Defined in

main.ts:127288

___

### total\_cost

• `Optional` **total\_cost**: `number`

total cost of an ad, USD
the cost of using the specified keyword and match type during the last month

#### Implementation of

[IKeywordKpiInfo](../interfaces/IKeywordKpiInfo.md).[total_cost](../interfaces/IKeywordKpiInfo.md#total_cost)

#### Defined in

main.ts:127297

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:127312

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:127335

___

### fromJS

▸ **fromJS**(`data`): [`KeywordKpiInfo`](KeywordKpiInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordKpiInfo`](KeywordKpiInfo.md)

#### Defined in

main.ts:127328
