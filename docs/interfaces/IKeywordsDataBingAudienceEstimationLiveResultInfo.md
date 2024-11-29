[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataBingAudienceEstimationLiveResultInfo

# Interface: IKeywordsDataBingAudienceEstimationLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### currency?

> `optional` **currency**: `string`

currency name
example: USDollar

#### Defined in

main.ts:141267

***

### est\_audience\_size?

> `optional` **est\_audience\_size**: [`EstInfo`](../classes/EstInfo.md)

monthly estimated reach user count range

#### Defined in

main.ts:141244

***

### est\_clicks?

> `optional` **est\_clicks**: [`EstInfo`](../classes/EstInfo.md)

monthly estimated click count range

#### Defined in

main.ts:141246

***

### est\_cost\_per\_event?

> `optional` **est\_cost\_per\_event**: [`EstCInfo`](../classes/EstCInfo.md)

indicates the estimated cost per event with range result

#### Defined in

main.ts:141250

***

### est\_ctr?

> `optional` **est\_ctr**: [`EstCInfo`](../classes/EstCInfo.md)

estimated click-through rate range

#### Defined in

main.ts:141252

***

### est\_impressions?

> `optional` **est\_impressions**: [`EstInfo`](../classes/EstInfo.md)

monthly estimated impressions range

#### Defined in

main.ts:141242

***

### est\_reach\_audience\_size?

> `optional` **est\_reach\_audience\_size**: `number`

monthly estimated user count

#### Defined in

main.ts:141262

***

### est\_reach\_impressions?

> `optional` **est\_reach\_impressions**: `number`

monthly estimated impressions

#### Defined in

main.ts:141264

***

### est\_spend?

> `optional` **est\_spend**: [`EstInfo`](../classes/EstInfo.md)

monthly estimated spending range

#### Defined in

main.ts:141248

***

### events\_lost\_to\_bid?

> `optional` **events\_lost\_to\_bid**: `number`

indicates event lost count due to insufficient input bid

#### Defined in

main.ts:141258

***

### events\_lost\_to\_budget?

> `optional` **events\_lost\_to\_budget**: `number`

indicates the event lost count due to insufficient input budget

#### Defined in

main.ts:141260

***

### suggested\_bid?

> `optional` **suggested\_bid**: `number`

suggested bid value under the current targeting

#### Defined in

main.ts:141254

***

### suggested\_budget?

> `optional` **suggested\_budget**: `number`

suggested daily budget value under the current targeting and bid

#### Defined in

main.ts:141256
