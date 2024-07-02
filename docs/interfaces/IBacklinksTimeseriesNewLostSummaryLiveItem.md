**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksTimeseriesNewLostSummaryLiveItem

# Interface: IBacklinksTimeseriesNewLostSummaryLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date?

> **`optional`** **date**: `string`

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:147170

***

### lost\_backlinks?

> **`optional`** **lost\_backlinks**: `number`

number of lost backlinks
number of lost backlinks of the target

#### Source

main.ts:147176

***

### lost\_referring\_domains?

> **`optional`** **lost\_referring\_domains**: `number`

number of lost referring domains
number of lost referring domains of the target

#### Source

main.ts:147182

***

### lost\_referring\_main\_domains?

> **`optional`** **lost\_referring\_main\_domains**: `number`

number of lost referring main domains
number of lost referring main domains of the target

#### Source

main.ts:147188

***

### new\_backlinks?

> **`optional`** **new\_backlinks**: `number`

number of new backlinks
number of new backlinks pointing to the target

#### Source

main.ts:147173

***

### new\_referring\_domains?

> **`optional`** **new\_referring\_domains**: `number`

number of new referring domains
number of new referring domains pointing to the target

#### Source

main.ts:147179

***

### new\_referring\_main\_domains?

> **`optional`** **new\_referring\_main\_domains**: `number`

number of new referring main domains
number of new referring main domains pointing to the target

#### Source

main.ts:147185

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:147165
