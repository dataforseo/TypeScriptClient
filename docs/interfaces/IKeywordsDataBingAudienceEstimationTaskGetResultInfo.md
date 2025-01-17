[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataBingAudienceEstimationTaskGetResultInfo

# Interface: IKeywordsDataBingAudienceEstimationTaskGetResultInfo

Defined in: main.ts:140896

## Indexable

\[`key`: `string`\]: `any`

## Properties

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:140923

currency name
example: USDollar

***

### est\_audience\_size?

> `optional` **est\_audience\_size**: [`EstInfo`](../classes/EstInfo.md)

Defined in: main.ts:140900

monthly estimated reach user count range

***

### est\_clicks?

> `optional` **est\_clicks**: [`EstInfo`](../classes/EstInfo.md)

Defined in: main.ts:140902

monthly estimated click count range

***

### est\_cost\_per\_event?

> `optional` **est\_cost\_per\_event**: [`EstCInfo`](../classes/EstCInfo.md)

Defined in: main.ts:140906

indicates the estimated cost per event with range result

***

### est\_ctr?

> `optional` **est\_ctr**: [`EstCInfo`](../classes/EstCInfo.md)

Defined in: main.ts:140908

estimated click-through rate range

***

### est\_impressions?

> `optional` **est\_impressions**: [`EstInfo`](../classes/EstInfo.md)

Defined in: main.ts:140898

monthly estimated impressions range

***

### est\_reach\_audience\_size?

> `optional` **est\_reach\_audience\_size**: `number`

Defined in: main.ts:140918

monthly estimated user count

***

### est\_reach\_impressions?

> `optional` **est\_reach\_impressions**: `number`

Defined in: main.ts:140920

monthly estimated impressions

***

### est\_spend?

> `optional` **est\_spend**: [`EstInfo`](../classes/EstInfo.md)

Defined in: main.ts:140904

monthly estimated spending range

***

### events\_lost\_to\_bid?

> `optional` **events\_lost\_to\_bid**: `number`

Defined in: main.ts:140914

indicates event lost count due to insufficient input bid

***

### events\_lost\_to\_budget?

> `optional` **events\_lost\_to\_budget**: `number`

Defined in: main.ts:140916

indicates the event lost count due to insufficient input budget

***

### suggested\_bid?

> `optional` **suggested\_bid**: `number`

Defined in: main.ts:140910

suggested bid value under the current targeting

***

### suggested\_budget?

> `optional` **suggested\_budget**: `number`

Defined in: main.ts:140912

suggested daily budget value under the current targeting and bid
