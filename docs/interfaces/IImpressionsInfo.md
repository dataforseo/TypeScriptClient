**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IImpressionsInfo

# Interface: IImpressionsInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### ad\_position\_average?

> **`optional`** **ad\_position\_average**: `number`

the average ad position
represents the average position of the advertisement

#### Source

main.ts:83896

***

### ad\_position\_max?

> **`optional`** **ad\_position\_max**: `number`

the maximum ad position
represents the maximum position of the advertisement

#### Source

main.ts:83893

***

### ad\_position\_min?

> **`optional`** **ad\_position\_min**: `number`

the minimum ad position
represents the minimum position of the advertisement

#### Source

main.ts:83890

***

### bid?

> **`optional`** **bid**: `number`

the maximum CPC
it stands for the price you are willing to pay for an ad. The higher value, the higher positions and price you will getwe return the results for the 999 bid value to provide the highest number of impressions and level down the account-specific factors

#### Source

main.ts:83884

***

### cpc\_average?

> **`optional`** **cpc\_average**: `number`

the average value of cost-per-click
the average cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Source

main.ts:83911

***

### cpc\_max?

> **`optional`** **cpc\_max**: `number`

the maximum value of cost-per-click
the maximum cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Source

main.ts:83906

***

### cpc\_min?

> **`optional`** **cpc\_min**: `number`

the minimum value of cost-per-click
the minimum cost-per-click (USD) for the keyword given that a bid is set to 999;
note: this field does not represent an actual CPC value;
you can find an actual CPC value for a keyword in the cpc field of the keyword_info object

#### Source

main.ts:83901

***

### daily\_clicks\_average?

> **`optional`** **daily\_clicks\_average**: `number`

the average value of daily clicks
represents the average number of daily clicks on the advertisement

#### Source

main.ts:83929

***

### daily\_clicks\_max?

> **`optional`** **daily\_clicks\_max**: `number`

the maximum value of daily clicks
represents the maximum number of daily clicks on the advertisement

#### Source

main.ts:83926

***

### daily\_clicks\_min?

> **`optional`** **daily\_clicks\_min**: `number`

the minimum value of daily clicks
represents the minimum number of daily clicks on the advertisement

#### Source

main.ts:83923

***

### daily\_cost\_average?

> **`optional`** **daily\_cost\_average**: `number`

the average daily charge value
represents the average daily cost of the advertisement (USD)

#### Source

main.ts:83938

***

### daily\_cost\_max?

> **`optional`** **daily\_cost\_max**: `number`

the maximum daily charge value
represents the maximum daily cost of the advertisement (USD)

#### Source

main.ts:83935

***

### daily\_cost\_min?

> **`optional`** **daily\_cost\_min**: `number`

the minimum daily charge value
represents the minimum daily cost of the advertisement (USD)

#### Source

main.ts:83932

***

### daily\_impressions\_average?

> **`optional`** **daily\_impressions\_average**: `number`

the average value of daily impressions
represents the average number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Source

main.ts:83920

***

### daily\_impressions\_max?

> **`optional`** **daily\_impressions\_max**: `number`

the maximum value of daily impressions
represents the maximum number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Source

main.ts:83917

***

### daily\_impressions\_min?

> **`optional`** **daily\_impressions\_min**: `number`

the minimum value of daily impressions
represents the minimum number of daily impressions of the advertisement given that that a bid is set to 999; provides a more accurate alternative to Google search volume data

#### Source

main.ts:83914

***

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when impressions data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:83881

***

### match\_type?

> **`optional`** **match\_type**: `string`

type of keyword match
can take the following values: exact, broad, phrase

#### Source

main.ts:83887

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:83876
